import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';




const ProgressLine = ({ navigation }) => {
    return (
        <View style={styles.progressTextContainer}>
                <Text style={{marginLeft:'7%',color:'#4cb71a'}}>Giỏ hàng</Text>
                <Text style={{marginLeft:'10%',color:'#dddddd'}}>Địa chỉ</Text>
                <Text style={{marginLeft:'8%',color:'#dddddd'}}>Thanh toán</Text>
                <Text style={{marginLeft:'6%',color:'#dddddd'}}>Xác nhận</Text>
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
