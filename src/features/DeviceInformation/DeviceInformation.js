import React,{
    useState, 
    useEffect,
    useSelector,
    useDispatch
} from 'react';
import {
  SafeAreaView,
  View,
  Button
} from 'react-native';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as deviceInfoActions from "../../store/actions/actions"

import styles from './DeviceInformation.styles'
import { InfoItem } from './info-item'
// import {Button} from '../../components/button'
import {Image} from '../../components/image'
import colors from '../../assets/colors'
import imagesUrl from '../../assets/imagesUrl'

import {DeviceInfoService} from "../../infrastructure/services/DeviceInfoService"

const DeviceInformation = ({fetchDeviceInformation, device}) =>{

    const [uniqueId, setUniqueId] = useState('')
    const [androidAppleToken, setAndroidAppleToken] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const [ipAddress, setIpAddress] = useState('')
    //const fn = fetchDeviceInformation()
    const _fetchUser = ()=> {
        fetchDeviceInformation()
    }
    useEffect(() => {
        const fn = fetchDeviceInformation()
        const {
            data,
            error,
            loading
        } = device;
        setUniqueId(device.data.dataDevice)
        // async function getAllDeviceInformations() {

        //     //const a = props.device
            
        //     // const device = await DeviceInfoService.info();
        //     // setManufacturer(device.manufacturer)
        //     // setUniqueId(device.uniqueId)
        //     // setAndroidAppleToken(device.token)
        //     // setIpAddress(device.ipAddress)
        // }
        // getAllDeviceInformations();
    }, []);


    // navigation.setOptions({
    //     headerShown: true,
    //     headerTitle: 'Device Informations',
    //     headerTitleAlign: 'center',
    //     headerStyle: {
    //       backgroundColor: colors.grayBlack,
    //     },
    //     headerTitleStyle: {
    //         color: colors.white
    //     }
    // })

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View>
                <Image style={styles.image} source={imagesUrl.deviceInformation}/>
            </View>
            <View style={styles.view
            }>
                <InfoItem label="UUID/IMEI" value = {uniqueId}/>
                <InfoItem label="Token" value = {androidAppleToken}/>
                <InfoItem label="MAC" value = {manufacturer}/>
                <InfoItem label="IP Address" value = {ipAddress}/>
                <Button
              onPress={() => _fetchUser()}
              title="Refresh"
            />
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = state => ({
    device: state.device,
});
    
const mapDispatchToProps = dispatch => ({
    fetchDeviceInformation: () => dispatch(deviceInfoActions.default.fetchDeviceInformation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceInformation);
