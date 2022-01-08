import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HeaderComponent from '../headerComponent.js';
import CircleBackground from './ProgressLine/CircleBackground.js';
import Line from './ProgressLine/Line.js';
import LineCart from './ProgressLine/LineCart.js';
import SectionListAbate from './SectionList/SectionListAbate.js';

const ConfirmCart = ({ navigation }) => {
    return (
        <ScrollView>
            <HeaderComponent/>
        <View style={styles.container}>
        <View style={{alignItems: 'center',marginTop:8,marginBottom:8}}>
            <Text style={{color:"#425C59",fontSize:24}}>THÔNG TIN NHẬN HÀNG</Text>
        </View>
        <View style={styles.progress}>
            <View style={styles.colProgress}>
                <CircleBackground />
                <Text style={{color:'#4cb71a', fontSize: 12,textAlign:'center',}}>Giỏ hàng</Text>
            </View>
            <Line />
            <View style={styles.colProgress}>
                <CircleBackground />
                <Text style={{color:'#4cb71a', fontSize: 12,textAlign:'center',}}>Địa chỉ</Text>
            </View>
            <Line />
            <View style={styles.colProgress}>
                <CircleBackground />
                <Text style={{color:'#4cb71a', textAlign:'center', fontSize: 12,}}>Thanh toán</Text>
            </View>
            <Line />
            <View style={styles.colProgress}>
                <CircleBackground />
                <Text style={{color:'#4cb71a', fontSize: 12,textAlign:'center',}}>Xác nhận</Text>
            </View>
        </View>
        <View style={styles.containerList}>

            <LineCart ></LineCart>
            
            <Text style={{color:"#425C59",marginBottom:4,marginTop:12,fontSize:22,fontWeight:"bold"}}>
                Đơn hàng #1 của bạn đã được tạo thành công
            </Text>
            <Text style={styles.textConfirm}>Thông tin đơn hàng đã được gửi tới công ty</Text>
            <Text style={styles.textConfirm}>Chúng tôi sẽ sớm liên hệ đến bạn</Text>
            <Text style={styles.textConfirm}>Cảm ơn bạn đã quan tâm và mua hàng của chúng tôi</Text>
            <Text style={{color:"#FF792E",marginBottom:12,fontSize:18,marginTop:12}}>Sản phẩm của tôi</Text>
            <LineCart ></LineCart>
            <SectionListAbate/>
            <View style={{paddingTop:20}}></View>


            <View 
            style={{backgroundColor:"#FF792E",paddingTop:12,paddingBottom:12,width:"100%",alignItems:"center",borderRadius:2,marginTop:12,marginBottom:12}}
            onStartShouldSetResponder={
            () => ('OnPress', navigation.navigate('ConfirmCart'))
            }>
                <Text style={{color:"#FFFFFF",fontSize:18}}>TIẾP TỤC MUA HÀNG</Text>
            </View>

        </View>
    </View>
    </ScrollView>
    
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor:"white",
        paddingBottom:50,
        paddingTop:10
    },
    progress:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 65,
    },
    containerList:{
        width:"100%",
        padding:16
    },
    textConfirm:{
        color:"#585757",
    },
    colProgress:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //marginRight: -10,
        //marginLeft: -10,
    },
});
export default ConfirmCart;