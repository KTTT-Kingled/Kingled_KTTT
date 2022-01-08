import * as React from 'react';
import { StyleSheet, View } from 'react-native';




const Line = ({ navigation }) => {
    return (
        <View style={styles.line}>

        </View>
    );
  };
const styles = StyleSheet.create({
    line:{
      backgroundColor:"#ffba07",
      width: 60,
      height: 7,
      //borderColor:"#6e5353",
      //borderWidth: 1,
      borderRadius: 10,
    },
  });
  export default Line;