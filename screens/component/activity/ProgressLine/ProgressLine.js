import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';




const ProgressLine = ({ navigation }) => {
    return (
        <View style={styles.progressTextContainer}>
                <Text style={{marginLeft:'11%',color:'#FF792E'}}>Giỏ hàng</Text>
                <Text style={{marginLeft:'8%',color:'#FF792E'}}>Địa chỉ</Text>
                <Text style={{marginLeft:'7%',color:'#FF792E'}}>Thanh toán</Text>
                <Text style={{marginLeft:'5%',color:'#FF792E'}}>Xác nhận</Text>
            </View>
    );
  };
const styles = StyleSheet.create({
    progressTextContainer:{
        width:'100%',
        // height:30,
        // backgroundColor:"black",
        marginBottom:0,
        flexDirection:'row',
    },
  });
  export default ProgressLine;
