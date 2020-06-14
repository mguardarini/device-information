import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import styles from './InfoItem.styles'

const InfoItem = ({label,value}) => {

    return (
        <View style={styles.view}> 
            <Text style={styles.textOpacity}>
                {label}
            </Text>
            <Text style={styles.text}>
                {value}
            </Text>
        </View>
    )

}

export default InfoItem