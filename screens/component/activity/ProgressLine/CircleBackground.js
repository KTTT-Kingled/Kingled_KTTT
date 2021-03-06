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
    backgroundColor:"#4cb71a",
    borderRadius:100,
    borderColor:"#4cb71a",
    borderWidth:2,
    alignItems: 'center',
    justifyContent: 'center',
},
  });
  export default CircleBackground;