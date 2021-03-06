import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";

const CircleBackground = ({ navigation }) => {
    return (
        <View style={[styles.circle]}>
          <Text style={[styles.Text1]}>4</Text>
          
        </View>

    );
  };
const styles = StyleSheet.create({
    circle:{
        width:25,
        height:25,
        //backgroundColor:"#4cb71a",
        borderRadius:100,
        //marginTop:"-3.2%",
        //marginLeft:"16%",
        borderColor:"#4cb71a",
        borderWidth:2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text1: {
      fontSize: 12,
      fontWeight: 'bold',
      color: "#4cb71a",
    },
  });
  export default CircleBackground;