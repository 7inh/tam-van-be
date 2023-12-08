import viettelPostInstance from "src/common/viettelPostInstance";

export async function getProvince() {
    const response: any = await viettelPostInstance.get(`/listProvinceById?provinceId=`);
    return response.data.data;
}

export async function getDistrict(provinceId: string) {
    const response: any = await viettelPostInstance.get(`/listDistrict?provinceId=${provinceId}`);
    return response.data.data;
}

export async function getWard(districtId: string) {
    const response: any = await viettelPostInstance.get(`/listWards?districtId=${districtId}`);
    return response.data.data;
}
