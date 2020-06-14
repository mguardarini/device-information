import React from 'react';
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

const DeviceInformation = ({navigation}) =>{

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
                <Image style={styles.image} source="https://octodex.github.com/images/ironcat.jpg"/>
            </View>
            <View style={styles.view
            }>
                <InfoItem label="UUID/IMEI" value = "FFFFF-11122-AAAAA-122222"/>
                <InfoItem label="Serial" value = "FFF-DDDD-2222-CCCCC"/>
                <InfoItem label="MAC" value = "FFF-DDDD-2222-CCCCC"/>
                <InfoItem label="IP Address" value = "192.154.12.122"/>

                <Button text= "Share"/>
            </View>
        </SafeAreaView>
    )
}

export default DeviceInformation