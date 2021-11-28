
import { deviceTypes } from "../constants/deviceConst";
export const getDeviceType = (val) => {
    let deviceType =  deviceTypes.find(ele => ele.value === val)
    return deviceType.label;
}