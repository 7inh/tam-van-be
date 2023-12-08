import { getProvince, getDistrict, getWard, getPrice } from "./address.query";

const AddressService = {
    query: {
        getProvince,
        getDistrict,
        getWard,
        getPrice,
    },
    mutation: {},
};

export default AddressService;
