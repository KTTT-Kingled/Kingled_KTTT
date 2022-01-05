import React from "react";
import {StyleSheet,Text,View,Modal,TouchableOpacity,SafeAreaView ,Dimensions,ScrollView,Image} from "react-native";
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const ModalPicker = (props) => {
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
                <Image source={{uri: 'https://th.bing.com/th/id/R.3c99f118e6f0ce6d2fb1dedd3d09436a?rik=m439jeY7yAZwDg&riu=http%3a%2f%2fg02.a.alicdn.com%2fkf%2fHTB17mPtJFXXXXbDXpXXq6xXFXXXj%2fPOSSBAY-DIY-Decoration-12V-Auto-Car-Interior-LED-EL-Wire-Rope-Tube-Neon-Light-Line-10.jpg&ehk=P1kk5g4mrQNWth2dHPwLDK0P2yhcARh83tBVRPHi7AU%3d&risl=&pid=ImgRaw&r=0'}} 
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

export {ModalPicker}