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
        backgroundColor:"#eeeeee",
        width: 60,
        height: 4,
        //borderColor:"#6e5353",
        //borderWidth: 1,
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
    },
  });
  export default Line;