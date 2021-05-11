import getGeo from './getGeo';

const fillForm = async (geo, prevValues, resetForm) => {
    const address = await getGeo(geo);
    resetForm({ values: { ...prevValues, ...address } });
};

export default fillForm;
