import Geocode from 'react-geocode';

import { GOOGLE_API_KEY, fieldName } from './constants';

Geocode.setApiKey(GOOGLE_API_KEY);
Geocode.setLanguage('en');

const getGeo = async (geoposition, setAddress) => {
    if (geoposition) {
        const lat = geoposition?.coords.latitude;
        const lng = geoposition?.coords.longitude;

        Geocode.fromLatLng(lat, lng).then(
            (response) => {
                const addressArr = response.results[0].formatted_address.split(
                    ', '
                );

                const [
                    build = '',
                    buildNumber = '',
                    city = '',
                    country = '',
                    zipCode = '',
                ] = addressArr;

                setAddress({
                    [fieldName.address]: build,
                    [fieldName.gateCode]: buildNumber,
                    [fieldName.city]: city,
                    [fieldName.country]: country,
                    [fieldName.zip]: zipCode,
                });
            },
            (error) => {
                console.error(error);
            }
        );
    }
};

export default getGeo;
