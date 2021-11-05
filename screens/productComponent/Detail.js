
import React from 'react';
import { View, StyleSheet, Text ,ScrollView,Button,Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Ionicons from "react-native-vector-icons/FontAwesome5";
import ModalBuyProduct from '../modal/modalBuyProduct.js'
import HeaderComponent from '../component/headerComponent.js'


const DetailProduct =  ({navigation}) => {
    return (
        <ScrollView>
          <HeaderComponent/>
      <View style={styles.container}>
          <View style={styles.imgProduct}>
                <Image source={{uri: 'https://i.ytimg.com/vi/51523kt-x-A/maxresdefault.jpg'}} style={{width: "100%", height: "100%"}} />
          </View>
          <Text style={{fontSize:18,color:"#425C59"}}>ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC</Text>
          <Text style={{fontSize:22,color:"#FF792E"}}>220.00VND</Text>
          <View style={styles.seen}>
              <Ionicons
                name="chevron-right"
                color="#FF792E"
                size={14}
                style={{marginRight:0,top:2}}
              />
              <Text style={styles.seenAll}>
                Xem tất cả
              </Text>
          </View>
          <View style={styles.containerImg}>
              <View style={styles.img}>
                    <Image source={{uri: 'https://th.bing.com/th/id/R.3c99f118e6f0ce6d2fb1dedd3d09436a?rik=m439jeY7yAZwDg&riu=http%3a%2f%2fg02.a.alicdn.com%2fkf%2fHTB17mPtJFXXXXbDXpXXq6xXFXXXj%2fPOSSBAY-DIY-Decoration-12V-Auto-Car-Interior-LED-EL-Wire-Rope-Tube-Neon-Light-Line-10.jpg&ehk=P1kk5g4mrQNWth2dHPwLDK0P2yhcARh83tBVRPHi7AU%3d&risl=&pid=ImgRaw&r=0'}} 
                    style={{width: "100%", height: "100%"}} />
              </View>
              <View style={styles.img,styles.imgMargin}>
                    <Image source={{uri: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/308/159/products/led-sd-d08a5e31-8e77-408a-88e3-092befdb094e.jpg?v=1533229343560'}} 
                    style={{width: "100%", height: "100%"}} />
              </View>
              <View style={styles.img}>
                    <Image source={{uri: 'https://cf.shopee.vn/file/82d5eefa8cced9e0673926939c363b7a'}} 
                    style={{width: "100%", height: "100%"}} />
              </View>
          </View>
          <Text style={{color: '#FF792E',padding:8,paddingLeft:0,fontSize:16}}>
            Thông số kĩ thuật
          </Text>
          <Grid style={{height:400}}>
            <Col size={35}>
                    <Row style={styles.cell}>
                      <Text style={styles.textRow}>Mã Sản Phẩm</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text style={styles.textRow}>Công Suất</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text style={styles.textRow}>Nguồn Điện</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text style={styles.textRow}>Ánh Sáng</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text style={styles.textRow}>Nhiệt Độ Màu</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text style={styles.textRow}>Kích Thước</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text style={styles.textRow}>Lô Khoét</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text style={styles.textRow}>Chip LED</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text style={styles.textRow}>Độ Hoàn Màu</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text style={styles.textRow}>Góc Chiếu</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text style={styles.textRow}>Chất Liệu</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text style={styles.textRow}>Xuất Xứ</Text>
                    </Row>
                    <Row style={styles.cell, styles.borderBottom}>
                      <Text style={styles.textRow }>Tuổi Thọ</Text>
                    </Row>
            </Col>
            <Col size={80}>
                  <Row style={styles.cell, styles.borderRight}>
                      <Text style={styles.textRow}>DDL-10SS-T120</Text>
                    </Row>
                    <Row style={styles.cell, styles.borderRight}>
                      <Text style={styles.textRow}>10w</Text>
                    </Row>
                    <Row style={styles.cell, styles.borderRight}>
                      <Text style={styles.textRow}>220V/50Hz</Text>
                    </Row>
                    <Row style={styles.cell, styles.borderRight}>
                      <Text style={styles.textRow}>Trắng,Trung tính,Vàng</Text>
                    </Row>
                    <Row style={styles.cell, styles.borderRight}>
                      <Text style={styles.textRow}>4000K, 6500K, 3000K</Text>
                    </Row>
                    <Row style={styles.cell, styles.borderRight}>
                      <Text style={styles.textRow}>120*36mm</Text>
                    </Row>
                    <Row style={styles.cell, styles.borderRight}>
                      <Text style={styles.textRow}>90 mm</Text>
                    </Row>
                    <Row style={styles.cell, styles.borderRight}>
                      <Text style={styles.textRow}>SAMSUNG 2835</Text>
                    </Row>
                    <Row style={styles.cell, styles.borderRight}>
                      <Text style={styles.textRow}>CRI 90</Text>
                    </Row>
                    <Row style={styles.cell, styles.borderRight}>
                      <Text style={styles.textRow}>120 độ</Text>
                    </Row>
                    <Row style={styles.cell, styles.borderRight}>
                      <Text style={styles.textRow}>Nhôm đúc</Text>
                    </Row>
                    <Row style={styles.cell, styles.borderRight}>
                      <Text style={styles.textRow}>Việt Nam</Text>
                    </Row>
                    <Row style={styles.cell , styles.borderRight , styles.borderBottom2}>
                      <Text style={styles.textRow}>50.000 giờ</Text>
                    </Row>
            </Col>
          </Grid>
          <Text style={{color: '#FF792E',padding:8,paddingLeft:0,fontSize:16}}>
            Mô tả sản phẩm
          </Text>
          <Text style={{color: 'black',fontSize:18}}>
              1. MẶT ĐÈN KIM LOẠI SIÊU BỀN
          </Text>
          <Text style={{color:"black", textAlign:"justify"}}>
            Mặt đèn màu trắng được thiết kế siêu mòng  chỉ 1mm làm bằng chất liệu kim loại siêu bền.
            Khi lắm lên trần nhà sẽ tạo cảm giác liền lạc và sang trọng hơn
          </Text>
          
        <ModalBuyProduct/>
    </View>
    </ScrollView>
    );
};

export default DetailProduct;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 16,
        paddingBottom:200,
        backgroundColor: '#fff',
      },
      cell: {
        borderWidth: 1,
        borderColor: '#425C59',
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0,
        borderRightWidth: 0 
      },
      textRow:{
        color: '#425C59'
      },
      borderBottom:{
        borderWidth: 1,
        borderColor: '#425C59',
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0 ,
        borderBottomWidth: 1 
      },
      borderRight:{
        borderWidth: 1,
        borderColor: '#425C59',
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1 ,
        borderBottomWidth: 0 
      },
      borderBottom2:{
        borderWidth: 1,
        borderColor: '#425C59',
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1
      },
      containerImg:{
        width: "100%",
        height: 110,
        // backgroundColor:"red",
        borderColor: '#425C59',
        borderBottomWidth: 1 ,
        flexDirection: 'row',
        paddingBottom:12,
        paddingRight:0,
      },
      imgMargin:{
        marginLeft: 10,
        marginRight: 10 ,
        flex:1,
        height: "100%",
        borderWidth: 1,
        borderColor: '#425C59',
      },
      img:{
        flex:1,
        height: "100%",
        borderWidth: 1,
        borderColor: '#425C59',
      },
      seen:{
        flexDirection: 'row-reverse',
        alignItems: 'center',
      },
      seenAll:{
        color:"#FF792E",
        marginTop: 8,
        marginBottom:8,
        fontSize: 18,
        marginRight:4
      },
      imgProduct:{
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: 'center',
        marginBottom:14
      },
      btn:{
        width: '100%',
        height: 50,
        // padding: 16,
        // paddingTop:0,
        backgroundColor: '#FF792E',
        justifyContent: "center",
        alignItems: 'center',
      }
})

