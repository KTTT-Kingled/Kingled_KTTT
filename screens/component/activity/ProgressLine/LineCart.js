import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button,Text,View,StyleSheet} from 'react-native'




const LineCart = ({ navigation }) => {
    return (
        <View style={styles.line}>

        </View>
    );
  };
const styles = StyleSheet.create({
    line:{
        backgroundColor:"white",
        width: "100%",
        borderColor:"#425C59",
        borderBottomWidth:2
    },
  });
  export default LineCart;