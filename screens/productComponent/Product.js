import * as React from 'react';
import { Image, ScrollView, SectionList, StatusBar, StyleSheet, Text, View } from "react-native";
import LineCart from '../component/activity/ProgressLine/LineCart.js';
import HeaderComponent from '../component/headerComponent.js';
import ModalFilter from '../modal/modalFilter.js';
import ModalUp from "../modal/modalUp.js";

const DATA = [
    {
      title: "Thành list",
      data: [
      {
        id: 1,
        deleteProduct: "Bỏ khỏi giỏ hàng",
        name:"ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC",
        cost:"266.000",
        code:"DDL-10SS-T120",
        barrel:"50",
        ones:"2.200",
        amount: 5,
        uri: "https://i.imgur.com/rmoEi0P.jpg"
        
      },
      {
          id: 2,
          deleteProduct: "Bỏ khỏi giỏ hàng",
          name:"ĐÈN ÂM TRẦN DIAMOND 10W MẶT CONG, ĐƠN SẮC",
          cost:"268.000",
          code:"DDL-10SS-T120-DM-CV/CB",
          barrel:"50",
          amount: 55,
          ones:"2.700",
          uri: "https://i.imgur.com/XW6rGiK.jpg"
    
        },
        {
          id: 3,
          deleteProduct: "Bỏ khỏi giỏ hàng",
          name:"ĐÈN ÂM TRẦN DIAMOND 10W MẶT PHẲNG, ĐƠN SẮC",
          cost:"268.000",
          code:"DDL-10SS-T120-PV/PB",
          barrel:"50",
          amount: 214,
          ones:"2.700",
          uri: "https://i.imgur.com/XW6rGiK.jpg"
          
        },
        {
          id: 4,
          deleteProduct: "Bỏ khỏi giỏ hàng",
          name:"ĐÈN ÂM TRẦN DIAMOND 15W ĐỔI MÀU",
          cost:"372.000",
          code:"DDL-15SS-T140-DM",
          barrel:"50",
          amount: 72,
          ones:"2.900",
          uri: "https://i.imgur.com/rmoEi0P.jpg"
    
        },
        {
          id: 5,
          deleteProduct: "Bỏ khỏi giỏ hàng",
          name:"ĐÈN ÂM TRẦN RUBY 06W ĐỔI MÀU",
          cost:"208.000",
          code:"DL-6SS-T100-DM",
          barrel:"50",
          amount: 100,
          ones:"2.200",
          uri: "https://i.imgur.com/rmoEi0P.jpg"
    
        },
        {
          id: 6,
          deleteProduct: "Bỏ khỏi giỏ hàng",
          name:"ĐÈN ÂM TRẦN RUBY 08W ĐỔI MÀU",
          cost:"225.000",
          code:"DL-8SS-T120-DM",
          barrel:"50",
          amount: 210,
          ones:"2.200",
          uri: "https://i.imgur.com/rmoEi0P.jpg"
    
        },
        {
          id: 7,
          deleteProduct: "Bỏ khỏi giỏ hàng",
          name:"ĐÈN ÂM TRẦN RUBY 12W ĐỔI MÀU",
          cost:"288.000",
          code:"DL-12SS-T140-DM",
          barrel:"50",
          amount: 100,
          ones:"2.200",
          uri: "https://i.imgur.com/rmoEi0P.jpg"
    
        },
  
  ]
    },
    
  ];
const DATA_Horizon = [
    {
      title: "Thành list",
      data: [
      {
        id: 1,
        uri: "https://i.imgur.com/kum3g7t.png"
      },
      
      {
          id: 2,
          uri: "https://i.imgur.com/6m6dAOa.png"
      },

      {
        id: 3,
        uri: "https://i.imgur.com/KTAqOg1.png"
      },
      {
        id: 4,
        uri: "https://i.imgur.com/xgkW9Rd.png"
      },

      {
        id: 5,
        uri: "https://i.imgur.com/fNFPALr.png"
      },
      
      {
        id: 6,
        uri: "https://i.imgur.com/aLVZHpZ.png"
      },

      {
        id: 7,
        uri: "https://i.imgur.com/Pb6CtZh.png"
      },
      {
        id: 8,
        uri: "https://i.imgur.com/9rRTkPZ.png"
      },

      {
        id: 9,
        uri: "https://i.imgur.com/o07xR8q.png"
      },
      
      {
        id: 10,
        uri: "https://i.imgur.com/oK7OPYJ.png"
      },

      {
        id: 11,
        uri: "https://i.imgur.com/6I1bL3i.png"
      },
      {
        id: 12,
        uri: "https://i.imgur.com/fF9EAll.png"
      },

      {
        id: 13,
        uri: "https://i.imgur.com/MU4i2X2.png"
      },
      
      {
        id: 14,
        uri: "https://i.imgur.com/W757A2w.png"
      },

      {
        id: 15,
        uri: "https://i.imgur.com/IhgoGB1.png"
      },
      {
        id: 16,
        uri: "https://i.imgur.com/lDxy6sy.png"
      },
  
  ]
    },
    
  ];

const Item = ({ title }) => (
    
    <View style={styles.item}>
          <View style={styles.itemInformation}>
              <View style={styles.imageContainer}>
                  <Image source={{uri: title.uri}} style={styles.images}/>
              </View>
              <View style={styles.inforContainer}>
                  <Text style={styles.name}>{title.name}</Text>
                  <Text style={styles.cost}>{title.cost} VNĐ</Text>
                  <Text style={styles.codeText}>Mã SP: {title.code}</Text>
                  <Text style={styles.codeText}>Quy cách: {title.barrel} chiếc/thùng</Text>
                  <Text style={styles.codeText}>Tích lũy: {title.ones} / chiếc</Text>
                  
              </View>
              
          </View>
  
    </View>
  );
const Item2 = ({ title }) => (
    
    <View style={styles.item2}>
          <View style={styles.itemInformation}>
              <View style={{}}>
                  <Image source={{uri: title.uri}} style={styles.images2}/>
              </View>
              
          </View>
  
    </View>
  );

const Product = ({ navigation }) => {
    return (
        <ScrollView>
          <HeaderComponent/>
        <View style={styles.container}>
            <View style={styles.containerList}>
                {/* flat */}
                <View style={{marginTop:12,marginBottom:12}}>
                    <SectionList
                        horizontal={true}
                        sections={DATA_Horizon}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => <View style={{
                            marginVertical: 0,borderRadius: 4,width:100,
                            height:100, marginRight:30
                        }}>
                            <View style={{}}>
                                <View 
                                    onStartShouldSetResponder={
                                        () => ('OnClick', navigation.navigate('Category'))
                                        }
                                >
                                <Item2 title={item}></Item2>
                                </View>
                            </View>
                    </View>}
                    />
                </View>
                {/* end flat */}          
                    <View style={{width:"100%",height:50,marginTop:12}} >
                      <ModalFilter/>
                    </View>
                <LineCart ></LineCart>
                {/* sectionList */}
                <View style={{marginTop:12,marginBottom:12}}>
                    <SectionList
                        sections={DATA}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => <View style={{backgroundColor: "white", 
                            marginVertical: 8,borderRadius: 4, elevation: 3,
                        }}>
                        <Item title={item}></Item>
                        <View style={{flexDirection:"row",marginLeft:"37%",paddingBottom:12}}>
                            <View style={styles.btnProduct} 
                                onStartShouldSetResponder={
                                    () => ('OnPress', navigation.navigate('Detail'))
                                    }
                            >
                            <Text style={styles.btnText}>Xem chi tiết</Text>
                        </View>
                      <ModalUp/>
                  </View>
                    </View>}
                    />
                </View>
                {/* end section list */}
            </View>
        </View> 
        </ScrollView>       
)
  };
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor:"#F8F8F8",
      paddingBottom:50
    },
    progress:{
        marginTop: 15,
        width:"100%"
    },
    circle:{
        width:22,
        height:22,
        backgroundColor:"#E9E9E9",
        borderRadius:100,
        marginTop:"-3.2%",
        marginLeft:"16%",
        borderColor:"#FF792E",
        borderWidth:2
    },
    circle2:{
        marginTop:"-6.2%",
        marginLeft:"38%",
    },
    circle3:{
        marginTop:"-6.2%",
        marginLeft:"60%",
    },
    circle4:{
        marginTop:"-6.2%",
        marginLeft:"82%",
    },
    circleColor:{
        backgroundColor:"#FF792E"
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
       containers: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
      },
      item: {
        // backgroundColor: "#f9c2ff",
        marginVertical: 8,
      },
      header: {
        fontSize: 32,
        backgroundColor: "#fff",
        color: "black"
      },
      title: {
        fontSize: 24
      },
      images:{
        height:100,
        width:100,
        resizeMode:"contain",
        marginLeft: "7%",
        borderRadius:8

        // right:10
      },
      images2:{
        height:100,
        width:100,
        resizeMode:"contain",
        borderRadius:8
      },
      imageContainer:{
        flex: 4,
        alignContent:"center",
        justifyContent:"center"
      },
      inforContainer:{
        flex: 7,
        marginLeft:4,
        height:"100%"
      },
      itemInformation:{
          flexDirection:"row"
      },
      name:{
        fontSize: 15,
        color: "#425C59",
        fontWeight:"bold"
      },
      cost:{
        fontSize: 15,
        color: "#FF792E",
        fontWeight:"bold"
      },
      amount:{
          flexDirection:"row",
          padding:4
      },
      deleteProduct:{
        fontSize:15,
        fontWeight:"bold",
        color: "#FF4646"
      },
    
      codeText:{
          color:"#818181"
      },
      btnProduct:{
          backgroundColor:"#FF792E",
          padding:0,
        //   width:"44%",
          borderRadius:4,
          paddingBottom:6,
          paddingTop:6,
          paddingLeft:10,
          paddingRight:10,
          marginRight: 8
        },
        btnBuy:{
            marginLeft:8,
            paddingLeft:16,
            paddingRight:16
        },
        btnText:{
            color:"white"
        },
        
  });
  
  export default Product;