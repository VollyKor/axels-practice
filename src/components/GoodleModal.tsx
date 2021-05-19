import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { setGeo } from '../redux/ducks/geo';
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url';

const GoogleMapsStyles = {
    width: '100%',
    height: '100%',

    minWidth: '200px',
    minHeight: '300px',
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};

const libraries: Libraries = ['places'];

interface Props {
    fillForm: TfillForm;
    onHide: Function;
    show: boolean;
}

const GoogleModal = ({ fillForm, ...props }: Props) => {
    const googleKey = process.env.REACT_APP_GOOGLE_API_KEY || 'unvalidKey';

    const [marker, setMarker] = useState(() => ({
        lat: 0,
        lng: 0,
    }));

    const geo = useSelector(({ geo }: RootState) => geo);
    const dispatch = useDispatch();

    useEffect(() => {
        setMarker({ ...geo });
    }, [dispatch, geo]);

    const { loadError } = useLoadScript({
        googleMapsApiKey: googleKey,
        libraries,
        language: 'en',
    });

    if (loadError) return <p>Google Map Error</p>;

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
                    mapContainerStyle={GoogleMapsStyles}
                    center={geo}
                    zoom={14}
                    options={options}
                    onClick={(event) => {
                        if (event.latLng && event.latLng) {
                            setMarker({
                                lat: event.latLng.lat(),
                                lng: event.latLng.lng(),
                            });
                        }
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
