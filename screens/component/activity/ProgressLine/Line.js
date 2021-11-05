import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button,Text,View,StyleSheet} from 'react-native'




const Line = ({ navigation }) => {
    return (
        <View style={styles.line}>

        </View>
    );
  };
const styles = StyleSheet.create({
    line:{
        backgroundColor:"white",
        width: "100%",
        borderColor:"#FF792E",
        borderBottomWidth:2
    },
  });
  export default Line;