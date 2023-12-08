import { getProvince, getDistrict, getWard } from "./address.query";

const AddressService = {
    query: {
        getProvince,
        getDistrict,
        getWard,
    },
    mutation: {},
};

export default AddressService;
