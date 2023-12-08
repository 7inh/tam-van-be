import viettelPostInstance from "src/common/viettelPostInstance";
import { AddressGetPrice } from "src/utils/types/type";

export async function getProvince() {
    const response: any = await viettelPostInstance.get(`/categories/listProvinceById?provinceId=`);
    return response.data.data;
}

export async function getDistrict(provinceId: string) {
    const response: any = await viettelPostInstance.get(
        `/categories/listDistrict?provinceId=${provinceId}`
    );
    return response.data.data;
}

export async function getWard(districtId: string) {
    const response: any = await viettelPostInstance.get(
        `/categories/listWards?districtId=${districtId}`
    );
    return response.data.data;
}

export async function getPrice(params: AddressGetPrice) {
    const response: any = await viettelPostInstance.post(`order/getPriceAll`, {
        SENDER_PROVINCE: params.senderProvince,
        SENDER_DISTRICT: params.senderDistrict,
        RECEIVER_PROVINCE: params.receiverProvince,
        RECEIVER_DISTRICT: params.receiverDistrict,
        PRODUCT_TYPE: "HH",
        PRODUCT_WEIGHT: params.productWeight,
        TYPE: 1,
    });
    return response.data;
}
