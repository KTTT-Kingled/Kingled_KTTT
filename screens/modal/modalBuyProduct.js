import React, { Component } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
class ModalBuyProduct extends Component {
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
                     <View style = {{width: "100%",marginBottom:10}}>
                        <Icon
                           name="times-circle"
                           color="#FF792E"
                           size={30}
                           style={{left: "88%"}}
                           />
                     </View>
                        
                        <View style = {{padding:0,flexDirection:"row"}}>
                              <View style = {{flex: 1,padding:4}}>
                                 <Image source={{uri:"https://th.bing.com/th/id/R.13f35afb73b386293bdfc53dd9bdd4e4?rik=mA0PH9i3%2fijWgA&riu=http%3a%2f%2fnoithatsct.com%2fwp-content%2fuploads%2f2020%2f07%2fDen-LED-ong-bo-COB-gan-noi-tran-anh01.jpg&ehk=ImuutcZwkUiFgxBlOH8XgOQfT4jzQZjvFanOS9ZQSfs%3d&risl=&pid=ImgRaw&r=0"}} 
                                 style={styles.images}
                                 />
                              </View>
                              <View style = {{flex:1.8}}>
                                 <Text style={{fontWeight:"bold",color:"#425C59",fontSize:16}}>
                                    ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC 
                                 </Text>
                                 <Text style={{fontWeight:"bold",color:"#FF792E",fontSize:15}}>
                                    220.000 VND
                                 </Text>
                              </View>
                        </View>
                        <View style={styles.amount}>
                              <Text style={{color:"#425C59", marginLeft:"14%",marginRight:"8%",marginTop:4,fontWeight:"bold"}}>
                                 Số lượng
                              </Text>

                              <View style={{flex:7,flexDirection:"row"}}>
                                 <View style={[styles.btnAmount,styles.btnSub]}>
                                       <Icon
                                       name="minus"
                                       color="white"
                                       size={18}
                                       style={{}}
                                       />
                                 </View>
                                 <View style={styles.inputView}>
                                    <Text style={{color:"#000000"}}>15</Text>
                                 </View>
                                 <View style={styles.btnAmount}>
                                    <Icon
                                       name="plus"
                                       color="white"
                                       size={18}
                                       style={{}}
                                       />
                                 </View>
                              </View>
                        </View>

                        <TouchableHighlight onPress = {() => {
                           this.toggleModal(!this.state.modalVisible)}}  
                           underlayColor="white">
                           <View style = {styles.btnUp}>
                              <Text style = {styles.text}>ĐẶT HÀNG</Text>
                           </View>
                        </TouchableHighlight>
                  </View>
               </View>
            </Modal>
            
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <View style={styles.btn}>
               <Text style={{fontSize:24,color: 'white'}}>ĐẶT HÀNG</Text>
               </View>
            </TouchableHighlight>
         </View>
      )
   }
}
export default ModalBuyProduct

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
      paddingTop:"109%",
   },
   modalContainer:{
      width:"100%",
      backgroundColor:"#FFFFFF",
      alignItems: 'center',
      justifyContent:"center",
      borderRadius:4,
      paddingTop:10
   },
textUp:{
   color: '#425C59',
   fontWeight:"bold"
   },
   text: {
      color: 'white',
      fontWeight:"bold"
   },
   amount:{
      flexDirection:"row",
      padding:0,
      justifyContent:"center",
},
btnUp:{
   backgroundColor: '#FF792E',
   width:2000,
   justifyContent:"center",
   alignItems: 'center',
   height: 52,
   marginTop:12
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
btnAmount:{
   padding:2,
   paddingRight:6,
   paddingLeft:6,
   backgroundColor: "#425C59"
},
   btnText:{
      fontSize:14,
      color: "red"
   },
   inputView:{
      width:"50%",
      height:28,
      justifyContent:"center",
      alignItems:"center",
      marginLeft: 8,
      marginRight:8,
      borderWidth:1,
      borderColor: "#000000",
   },
   btnSub:{
      paddingLeft:6,
      paddingRight:6
   },
  btnText:{
    color:"white"
  },
  btn:{
    width: '100%',
    height: 50,
    // padding: 16,
    // paddingTop:0,
    backgroundColor: '#FF792E',
    justifyContent: "center",
    alignItems: 'center',
  },
  images:{
   height:116,
   width:116,
   resizeMode:"contain",
   marginLeft: "6%"
   // right:10
 },
})