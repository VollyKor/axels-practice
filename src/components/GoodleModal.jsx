import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { setGeo } from '../redux/ducks/geo';

const containerStyle = {
    width: '100%',
    height: '100%',

    minWidth: '200px',
    minHeight: '300px',
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};

const libraries = ['places'];

const GoogleModal = ({ fillForm, ...props }) => {
    const [marker, setMarker] = useState(() => ({
        lat: 0,
        lng: 0,
    }));

    const geo = useSelector((state) => state.geo);
    const dispatch = useDispatch();

    useEffect(() => {
        setMarker({ ...geo });
    }, [dispatch, geo]);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries,
        language: 'en',
    });

    if (loadError) return 'Google Map Error';
    if (!isLoaded) return 'Google Map Loading';

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Choose Your Address
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={geo}
                    zoom={14}
                    options={options}
                    onClick={(event) => {
                        setMarker({
                            lat: event.latLng.lat(),
                            lng: event.latLng.lng(),
                        });
                    }}
                >
                    <Marker position={geo && marker} />
                </GoogleMap>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={() => {
                        dispatch(setGeo(marker));
                        props.onHide();
                        fillForm(marker);
                    }}
                >
                    Submit
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => {
                        props.onHide();
                    }}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default GoogleModal;
