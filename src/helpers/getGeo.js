import Geocode from 'react-geocode';

import { fieldName } from './constants';
const { REACT_APP_GOOGLE_API_KEY } = process.env;

Geocode.setApiKey(REACT_APP_GOOGLE_API_KEY);
Geocode.setLanguage('en');

const getGeo = async (geoposition) => {
    const { lat, lng } = geoposition;

    return Geocode.fromLatLng(lat, lng).then(
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

            return {
                [fieldName.address]: build,
                [fieldName.gateCode]: buildNumber,
                [fieldName.city]: city,
                [fieldName.country]: country,
                [fieldName.zip]: zipCode,
            };
        },
        (error) => {
            console.error(error);
        }
    );
};

export default getGeo;
