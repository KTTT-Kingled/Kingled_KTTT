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
        width: 50,
        height: 4,
        borderRadius: 10,
        marginTop: 12,
    },
  });
  export default Line;