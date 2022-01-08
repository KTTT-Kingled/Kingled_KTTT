import * as React from 'react';
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";




const CircleBackground = ({ navigation }) => {
    return (
        <View style={[styles.circle]}>
          <Icon
            name="checkmark"
            color="white"
            size={17}
            //style={{left: 1}}
          />
        </View>

    );
  };
const styles = StyleSheet.create({
  circle:{
    width:25,
    height:25,
    backgroundColor:"#ffba07",
    borderRadius:100,
    borderColor:"#ffba07",
    borderWidth:2,
    alignItems: 'center',
    justifyContent: 'center',
},
  });
  export default CircleBackground;