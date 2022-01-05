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
        cost:"220.000",
        code:"DDL-10SS-T120",
        barrel:"50",
        ones:"2.200",
        amount: 5,
        uri: "https://product.hstatic.net/1000254381/product/led2_master.jpg"
        
      },
      {
          id: 2,
          deleteProduct: "Bỏ khỏi giỏ hàng",
          name:"ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC",
          cost:"220.000",
          code:"DDL-10SS-T120",
          barrel:"50",
          amount: 55,
          ones:"2.200",
          uri: "https://i.pinimg.com/originals/bf/8f/61/bf8f61fd78483a90eff9ef6a87e7bcf6.jpg"
    
        },
        {
          id: 3,
          deleteProduct: "Bỏ khỏi giỏ hàng",
          name:"ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC",
          cost:"220.000",
          code:"DDL-10SS-T120",
          barrel:"50",
          amount: 214,
          ones:"2.200",
          uri: "https://th.bing.com/th/id/R.3c99f118e6f0ce6d2fb1dedd3d09436a?rik=m439jeY7yAZwDg&riu=http%3a%2f%2fg02.a.alicdn.com%2fkf%2fHTB17mPtJFXXXXbDXpXXq6xXFXXXj%2fPOSSBAY-DIY-Decoration-12V-Auto-Car-Interior-LED-EL-Wire-Rope-Tube-Neon-Light-Line-10.jpg&ehk=P1kk5g4mrQNWth2dHPwLDK0P2yhcARh83tBVRPHi7AU%3d&risl=&pid=ImgRaw&r=0"
          
        },
        {
          id: 4,
          deleteProduct: "Bỏ khỏi giỏ hàng",
          name:"ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC",
          cost:"220.000",
          code:"DDL-10SS-T120",
          barrel:"50",
          amount: 16,
          ones:"2.200",
          uri: "https://th.bing.com/th/id/R.13f35afb73b386293bdfc53dd9bdd4e4?rik=mA0PH9i3%2fijWgA&riu=http%3a%2f%2fnoithatsct.com%2fwp-content%2fuploads%2f2020%2f07%2fDen-LED-ong-bo-COB-gan-noi-tran-anh01.jpg&ehk=ImuutcZwkUiFgxBlOH8XgOQfT4jzQZjvFanOS9ZQSfs%3d&risl=&pid=ImgRaw&r=0"
    
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
        uri: "https://i.imgur.com/6m6dAOa.png"
      },

      {
        id: 7,
        uri: "https://i.imgur.com/KTAqOg1.png"
      },
      {
        id: 8,
        uri: "https://i.imgur.com/xgkW9Rd.png"
      },

      {
        id: 9,
        uri: "https://i.imgur.com/kum3g7t.png"
      },
      
      {
        id: 10,
        uri: "https://i.imgur.com/6m6dAOa.png"
      },

      {
        id: 11,
        uri: "https://i.imgur.com/KTAqOg1.png"
      },
      {
        id: 12,
        uri: "https://i.imgur.com/xgkW9Rd.png"
      },

      {
        id: 13,
        uri: "https://i.imgur.com/kum3g7t.png"
      },
      
      {
        id: 14,
        uri: "https://i.imgur.com/6m6dAOa.png"
      },

      {
        id: 15,
        uri: "https://i.imgur.com/KTAqOg1.png"
      },
      {
        id: 16,
        uri: "https://i.imgur.com/xgkW9Rd.png"
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
                  <Text style={styles.codeText}>Quy cách: {title.barrel} chiêc/thùng</Text>
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