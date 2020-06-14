import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import styles from './DeviceInformation.styles'
import { InfoItem } from './info-item'
import {Button} from '../../components/button'
import {Image} from '../../components/image'
import colors from '../../assets/colors'
import imagesUrl from '../../assets/imagesUrl'
import {DeviceInfoService} from "../../infrastructure/services/DeviceInfoService"

const DeviceInformation = ({navigation}) =>{
    
    const [uniqueId, setUniqueId] = useState('')
    const [androidAppleToken, setAndroidAppleToken] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const [ipAddress, setIpAddress] = useState('')

    useEffect(() => {
        async function getAllDeviceInformations() {
            const device = await DeviceInfoService.info();
            setManufacturer(device.manufacturer)
            setUniqueId(device.uniqueId)
            setAndroidAppleToken(device.token)
            setIpAddress(device.ipAddress)
        }
        getAllDeviceInformations();
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

                <Button text= "Share"/>
            </View>
        </SafeAreaView>
    )
}

export default DeviceInformation