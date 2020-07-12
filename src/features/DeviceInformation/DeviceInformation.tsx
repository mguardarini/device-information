import React,{
    useState, 
    useEffect,
    useSelector,
    useDispatch
} from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import {Button} from '../../components/button'

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import {CreateActions} from "../../store/ducks/DeviceInformation"

import styles from './DeviceInformation.styles'
import { InfoItem } from './info-item'
import {Image} from '../../components/image'
import colors from '../../assets/colors'
import imagesUrl from '../../assets/imagesUrl'
import {DeviceInfoService} from "../../infrastructure/services/DeviceInfoService"

const DeviceInformation = ({fetchDeviceInformation, device, navigation}) =>{

    const [uniqueId, setUniqueId] = useState('')
    const [androidAppleToken, setAndroidAppleToken] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const [ipAddress, setIpAddress] = useState('')

    useEffect(() => {
      setManufacturer(device.data.manufacturer)
      setUniqueId(device.data.uniqueId)
      setAndroidAppleToken(device.data.token)
      setIpAddress(device.data.ipAddress)     
    }, []);


    navigation.setOptions({
        headerShown: true,
        headerTitle: 'Device Informations',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.grayBlack,
        },
        headerTitleStyle: {
            color: colors.white
        }
    })

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
                    text="Share"
                />
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = state => ({
    device: state.device,
});
    
const mapDispatchToProps = dispatch => ({
    fetchDeviceInformation: () => dispatch(CreateActions.default.fetchDeviceInformation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceInformation);
