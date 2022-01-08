import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HeaderComponent from '../headerComponent.js';
import Circle3 from './ProgressLine/Circle3';
import Circle4Gr from './ProgressLine/Circle4Gr';
import CircleBackground from './ProgressLine/CircleBackground.js';
import Line from './ProgressLine/Line.js';
import LineCart from './ProgressLine/LineCart.js';
import LineGray from './ProgressLine/LineGray';
import SectionListAbate from './SectionList/SectionListAbate.js';




const AbateCart = ({ navigation }) => {
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
                <Circle3 />
                <Text style={{color:'#4cb71a', textAlign:'center', fontSize: 12,}}>Thanh toán</Text>
            </View>
            <LineGray />
            <View style={styles.colProgress}>
                <Circle4Gr />
                <Text style={{color:'#ddd', fontSize: 12,textAlign:'center',}}>Xác nhận</Text>
            </View>
        </View>
        <View style={styles.containerList}>

            <LineCart ></LineCart>
            
            <Text style={{color:"#425C59",marginBottom:12,marginTop:12,fontSize:18,fontWeight:"bold"}}>
                Chọn phương thức thanh toán
            </Text>

            
            <LineCart ></LineCart>
            <Text style={{color:"#425C59",marginTop:8,fontWeight:"bold"}}>Thanh toán khi nhận hàng</Text>
            <View 
            style={{backgroundColor:"#425C59",paddingTop:12,paddingBottom:12,width:"100%",alignItems:"center",borderRadius:2,marginTop:12,marginBottom:12}}
            onStartShouldSetResponder={
            () => ('OnPress', navigation.navigate('ConfirmCart'))
            }>
                <Text style={{color:"#FFFFFF",fontSize:18}}>THANH TOÁN KHI NHẬN HÀNG</Text>
            </View>
            <Text style={{color:"#FF792E",marginBottom:12,fontSize:18}}>Sản phẩm của tôi</Text>
            <LineCart ></LineCart>
            <SectionListAbate/>
            <View style={{paddingTop:20}}></View>
            <LineCart ></LineCart>
            <View style={{flexDirection: 'row',marginTop:10}}>
                <Text style={[styles.totalAmountText,styles.totalAmountFlex]}>Tổng tiền tạm tính</Text>
                <Text style={styles.totalAmountText}>3,444,000</Text>
                <Text style={styles.totalAmountText}> VNĐ</Text>
            </View>
            <View 
            style={{backgroundColor:"#FF792E",paddingTop:12,paddingBottom:12,width:"100%",alignItems:"center",borderRadius:2,marginTop:12,marginBottom:12}}
            onStartShouldSetResponder={
            () => ('OnPress', navigation.navigate('ConfirmCart'))
            }>
                <Text style={{color:"#FFFFFF",fontSize:18}}>XÁC NHẬN</Text>
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
        paddingBottom:
        50,paddingTop: 10
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
    totalAmountFlex:{
        flex:1,
    },
    totalAmountText:{
        color:"#FF2E2E",
        fontSize:15
    },
    colProgress:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //marginRight: -10,
        //marginLeft: -10,
    },
});
export default AbateCart;