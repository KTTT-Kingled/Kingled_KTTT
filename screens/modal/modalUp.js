import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet}

from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
class ModalUp extends Component {
   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   render() {
      return (
         <View style = {styles.container}>
            <Modal animationType = {"fade"} transparent = {true}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <View style = {styles.modalContainer}>
                        
                        <View style = {{width: "100%",marginBottom:12}}>
                            <Icon
                                name="close"
                                color="#425C59"
                                size={34}
                                style={{left: "86%"}}
                                />
                        </View>
                        <Text style = {styles.textUp}> Bạn cần nâng cấp tài khoản để có thể</Text>
                        <Text style = {styles.textUp}>đắt hàng</Text>
                        
                        <TouchableHighlight onPress = {() => {
                            this.toggleModal(!this.state.modalVisible)}}  
                            underlayColor="white"
                            >
                            
                            <View style = {styles.btnUp}>
                                <Text style = {styles.text}>NÂNG CẤP NGAY</Text>
                            </View>
                        </TouchableHighlight>
                  </View>
               </View>
            </Modal>
            
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}} 
                            underlayColor="white"
            >
                    <View style={[styles.btnProduct]}>
                        <Text style={styles.btnText}>Mua hàng</Text>
                    </View>
            </TouchableHighlight>
         </View>
      )
   }
}
export default ModalUp

const styles = StyleSheet.create ({
   container: {
    //   alignItems: 'center',
      backgroundColor: 'transparent',
    
    //   padding: 100
   },
   modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      paddingTop:"60%",
   },
   modalContainer:{
      borderWidth: 2,
      borderColor:"#425C59",
      width:"76%",
      backgroundColor:"#FFFFFF",
      alignItems: 'center',
      justifyContent:"center",
      borderRadius:4,
      padding:10,
      paddingBottom:18,

   },
   textUp:{
       color: '#425C59'
   },
   text: {
      color: 'white',
      fontWeight:"bold"
   },
   btnUp:{
       backgroundColor: '#425C59',
       width:150,
       justifyContent:"center",
       alignItems: 'center',
       height: 46,
       borderRadius:30,
       marginTop:18
   },
   btnProduct:{
    backgroundColor:"#FF792E",
    padding:0,
    borderRadius:4,
    paddingBottom:6,
    paddingTop:6,
    paddingLeft:18,
    paddingRight:18,
    overflow: 'hidden'
  },
  btnText:{
    color:"white"
  },
})