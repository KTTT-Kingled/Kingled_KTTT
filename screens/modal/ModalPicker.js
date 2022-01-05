import React from "react";
import {StyleSheet,Text,View,Modal,TouchableOpacity,SafeAreaView ,Dimensions,ScrollView} from "react-native";
const OPTION = ['An Giang','Bà Rịa-Vũng Tàu','Bạc Liêu','Bắc Kạn','Bắc Giang','Bắc Ninh','Bình Dương','Bình Định','Đắk Nông','Đà Nẵng (TP)','Gia Lai','Quảng Ngãi','KomTum','Hòa Bình','Sơn Ka','Điện Biên','Quảng Nam','Quảng Ngãi','Thừa Thiên – Huế','Tiền Giang','Tuyên Quang','Vĩnh Long','Vĩnh Phúc','Yên Bái']
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const ModalPicker = (props) => {
    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option)
    }

    const option = OPTION.map((item,index)=>{
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={()=>onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })
    return (
        <TouchableOpacity
            onPress={()=>props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View style={[styles.modal,styles.elevation,{width: WIDTH - 20, height: HEIGHT/2}]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal:{
        backgroundColor:'white',
        borderRadius:10
    },
    option:{
        alignItems: 'flex-start',
    },
    text: {
        margin: 16,
        fontSize:16,
        fontWeight: 'bold',
        color: 'black'
    }
})

export {ModalPicker}