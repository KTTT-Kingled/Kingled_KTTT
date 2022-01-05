import React from "react";
import {StyleSheet,Text,View,Modal,TouchableOpacity,SafeAreaView ,Dimensions,ScrollView,Image} from "react-native";
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const ModalPickerImage2 = (props) => {
    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option)
    }
    return (
        <TouchableOpacity
            onPress={()=>props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View style={[styles.modal,styles.elevation,{width: WIDTH - 20, height: HEIGHT/2}]}>
                <ScrollView>
                <Image source={{uri: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/308/159/products/led-sd-d08a5e31-8e77-408a-88e3-092befdb094e.jpg?v=1533229343560'}} 
                    style={{width:400,height:400}} />
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
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

export {ModalPickerImage2}