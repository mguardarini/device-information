import {Platform} from 'react-native'
import { 
    getUniqueId, 
    getMacAddress,
    getIpAddress,
    getAndroidId,
    getDeviceToken
} from 'react-native-device-info';

const DeviceInfoService  = {
    info: async () => {
        return { 
            uniqueId : getUniqueId(),
            token: await token(),
            manufacturer : await manufacturer(),
            ipAddress: await ipAddress(),
        } 
    }
}

function manufacturer(){ 
    return new Promise((resolve) => {
        getMacAddress().then((manufacturer)=>{ 
            resolve(manufacturer)
        })
    })
}
function ipAddress () { 
    return new Promise((resolve) => {
        getIpAddress().then((ip)=>{ 
            resolve(ip)
        })
    })
}

function token(){ 

    if(!__DEV__){
        if(Platform.OS === "ios") {
            return new Promise((resolve) => {
                getDeviceToken().then((token)=>{ 
                    resolve(token)
                })
            })
        }else{ 
            return new Promise((resolve) => {
                getAndroidId().then((token)=>{ 
                    resolve(token)
                })
            })
        }
    }
    return "we only generate token in phisical device"
}
export default DeviceInfoService;