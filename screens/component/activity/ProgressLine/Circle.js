import * as React from 'react';
import { StyleSheet, View } from 'react-native';




const Circle = ({ navigation }) => {
    return (
        <View style={[styles.circle]}></View>

    );
  };
const styles = StyleSheet.create({
    circle:{
        width:30,
        height:30,
        //backgroundColor:"#E9E9E9",
        borderRadius:100,
        marginTop:"-3.2%",
        marginLeft:"16%",
        borderColor:"#FF792E",
        borderWidth:2,
    },
  });
  export default Circle;