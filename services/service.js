import {request} from "../axios/Axios-utils";

export const getAllClaims = async(status)=>{
    return await request({url: '/customer/get-all-claim-details', method: 'post', data:{status}});
}

export const getAllVehicles = async () => {
    return await request({ url: '/customer/get-all-vehicles'})
}

export const addClaim = async(data)=>{
    return await request({url: '/customer/add-claim', method: 'post', data:data });
}
