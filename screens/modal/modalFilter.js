import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet}

from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";
import CheckBoxs from './FilterCheck/FilterCheck.js';

class ModalFilter extends Component {
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
                        <View style={{width: "100%",marginBottom:18}}>
                           <Text style = {styles.textTieude}>CÔNG SUẤT</Text>
                           <View style = {styles.containerCheck}>
                                 <CheckBoxs nameCheckBox = "10W"/>
                                 <CheckBoxs nameCheckBox = "15W"/>
                           </View>
                           <Text style = {styles.textTieude}>CHIP LED</Text>
                           <View style = {styles.containerCheck}>
                                 <CheckBoxs nameCheckBox = "SDM SAMSUNG"/>
                           </View>
                           <Text style = {styles.textTieude}>ÁNH SÁNG</Text>
                           <View>
                                 <View style = {styles.containerCheck}>
                                    <CheckBoxs nameCheckBox = "Đổi màu          "/>
                                    <CheckBoxs nameCheckBox = "Trắng (6000K)"/>
                                 </View>
                                 <View style = {styles.containerCheck}>
                                    <CheckBoxs nameCheckBox = "Trắng (6500K)"/>
                                    <CheckBoxs nameCheckBox = "Vàng (3000K)"/>
                                 </View>
                                 <View style = {styles.containerCheck}>
                                    <CheckBoxs nameCheckBox = "Trung tính (4000K)"/>
                                 </View>
                           </View>
                           <Text style = {styles.textTieude}>THƯƠNG HIỆU</Text>
                           <View style = {styles.containerCheck}>
                                 <CheckBoxs nameCheckBox = "Kingco"/>
                                 <CheckBoxs nameCheckBox = "King LED"/>
                                 <CheckBoxs nameCheckBox = "Opple"/>
                           </View>
                        </View>
                        <TouchableHighlight onPress = {() => {
                            this.toggleModal(!this.state.modalVisible)}}  
                            underlayColor="white"
                            >
                            
                            <View style = {styles.btnUp}>
                                <Text style = {styles.text}>ÁP DỤNG</Text>
                            </View>
                        </TouchableHighlight>
                  </View>
               </View>
            </Modal>
            
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
                          <View style={styles.filter}>
                              <Text style={{color:"#425C59",marginRight: 10}}>Bộ lọc</Text>
                              <Icon
                                name="filter"
                                color="#425C59"
                                size={16}
                              />
                          </View>
            </TouchableHighlight>
         </View>
      )
   }
}
export default ModalFilter

const styles = StyleSheet.create ({
   container: {
    //   alignItems: 'center',
      backgroundColor: 'transparent',
    
    //   padding: 100
   },
   modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
      paddingTop:"30%",
   },
   modalContainer:{
      borderWidth: 1,
      borderColor:"#425C59",
      width:"80%",
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
       marginTop:0,
       borderRadius:20
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
  filter:{
    height:36,
    width:90,
    borderWidth:2,
    borderColor:"#425C59",
    position:"absolute",
    right:"0%",
    borderRadius:4,
    alignItems:"center",
    justifyContent:"center",
    flexDirection: "row"
   },
   textTieude:{
      color: "#425C59",
      // marginLeft: "5%",
      fontSize: 16,
      // marginTop: "6%",
      fontWeight:"500",
      // marginBottom: "2%"
  } ,
  containerCheck:{
   flexDirection: "row",
   // marginLeft: "3%"
},
})