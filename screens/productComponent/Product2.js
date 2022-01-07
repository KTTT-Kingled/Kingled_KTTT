
import React from 'react';
import { Alert, FlatList, Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Horizon } from '../FlatList/flatlistHorizon.js';
export default class Product extends React.Component {
   constructor() {
      super();
      this.state = {
         data: [
            {
            name: 'ÈN ỐNG BƠ CHIỂU RỌI EMERALD 07W',
            cost:'220.000 VND',
            codeProduct: 'Mã SP: ',
            code: 'OBR-7SS-D95',
            specification:'Quy cách: ',
            amount: '50',
            inBarrel: ' chiếc/ thùng',
            cumulative: 'Tích lũy: ',
            amount2:'4.300 ',
            perOne: ' /chiếc',
            uri: 'https://th.bing.com/th/id/OIP.wwgBKFjFFOqWR67AwTNazAHaHa?pid=ImgDet&w=1024&h=1024&rs=1',

          },

            {
            name: 'ỐNG BƠ TÁN QUANG AGATE 12W ĐỔI MÀU',
            cost:'220.000 VND',
            codeProduct: 'Mã SP: ',
            code: 'OBK-12SS-D11',
            specification:'Quy cách: ',
            amount: '54',
            inBarrel: ' chiếc/ thùng',
            cumulative: 'Tích lũy: ',
            amount2:'150 ',
            perOne: ' /chiếc',
            uri: 'https://th.bing.com/th/id/OIP.xFI3yYg9a46tO2ih3U5EZAAAAA?pid=ImgDet&w=212&h=268&c=7&dpr=1.25',


          },

            {
            name: 'ĐÈN ỐNG BƠ CHIẾU RỌI 12W (VỎ ĐEN)',
            cost:'220.000 VND',
            codeProduct: 'Mã SP: ',
            code: 'EC-DL-7SS-T118-CV/CB',
            specification:'Quy cách: ',
            amount: '60',
            inBarrel: ' chiếc/ thùng',
            cumulative: 'Tích lũy: ',
            amount2:'800 ',
            perOne: ' /chiếc',
            uri: 'https://th.bing.com/th/id/R.8513a068f60a7f4efe826ce3bd78ff5a?rik=zLe02DZrmUbEhQ&riu=http%3a%2f%2ffc09.deviantart.net%2ffs71%2ff%2f2013%2f131%2f7%2f0%2f70870577d3998b25e06daa3ef10d0616-d64v8ht.png&ehk=nFDzgxcjWFbe2kNf1QQPmRU7a7m6d%2b2ElJH%2f7uur%2fSo%3d&risl=&pid=ImgRaw&r=0',

          },

            {
            name: 'ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC',
            cost:'220.000 VND',
            codeProduct: 'Mã SP: ',
            code: 'DDL-10SS-T120',
            specification:'Quy cách: ',
            amount: '20',
            inBarrel: ' chiếc/ thùng',
            cumulative: 'Tích lũy: ',
            amount2:'200 ',
            perOne: ' /chiếc',
            uri: 'https://th.bing.com/th/id/R.1c1516880228c18876f24b8dcc913804?rik=dB2iZP00%2bjCwlA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fone-piece-png-png-768x1039-one-piece-anime-transparent-background-768.png&ehk=iakOq1Kf270KDnrCcNW4l2hTJIrgVIplHwK3kfX0VYw%3d&risl=&pid=ImgRaw&r=0',

          },



         ],
         stickyHeaderIndices: [],
      };
   }

   renderItem = ({ item }) => {return (
          <View style={styles.item}>
                <View style={styles.image}>
                    <Image source={{uri: item.uri}} style={styles.images}/>
                </View>
                <View style={styles.info}>
                    <View style={styles.textInfo}>
                        <Text style={styles.name} >
                            {item.name}
                        </Text>
                        <Text style={styles.cost} >
                            {item.cost}
                        </Text>
                        <View style={{flexDirection:'row'}}>
                              <Text style={styles.text} >
                                  {item.codeProduct}
                              </Text>
                              <Text style={styles.text} >
                                  {item.code}
                              </Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                              <Text style={styles.text} >
                                  {item.specification}
                              </Text>
                              <Text style={styles.text} >
                                  {item.amount}
                              </Text>
                              <Text style={styles.text} >
                                  {item.inBarrel}
                              </Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                              <Text style={styles.text} >
                                  {item.cumulative}
                              </Text>
                              <Text style={styles.text} >
                                  {item.amount2}
                              </Text>
                              <Text style={styles.text} >
                                  {item.perOne}
                              </Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.viewDetail} >
                            <Text style={styles.textStyle}>Xem chi tiết</Text>
                        </View>
                        <View style={styles.buyProduct}>
                            <Text style={styles.textStyle}>Mua hàng</Text>
                        </View>
                    </View>
                </View>
            </View>);};
    state = {
      modalVisible: false,
    };
    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }
   render() {
    const { modalVisible } = this.state;
      return (

        <ScrollView style={{marginBottom:60}}>

              <View>
                  {/* model */}
                  <Modal
                      animationType="fade"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        this.setModalVisible(!modalVisible);
                      }}
                    >
                        <View style={styles.centeredView}>
                          <View style={styles.modalView}>
                                <View style={styles.modelContainer}>
                                  <Pressable
                                      style={[]}
                                      onPress={() => this.setModalVisible(!modalVisible)}
                                    >
                                      <View style={styles.btnDelete}>
                                        <Text style={{color:'#425C59'}}>X</Text>
                                      </View>
                                    </Pressable>
                                    <Text style={{color: '#000000'}}>Bạn cần nâng cấp tài khoản để có</Text>
                                    <Text style={{color: '#000000'}}> thể đặt hàng</Text>
                                    <Pressable
                                      style={[styles.button, styles.buttonClose]}
                                      onPress={() => this.setModalVisible(!modalVisible)}
                                    >
                                      <Text style={styles.textStyle}>NÂNG CẤP NGAY</Text>
                                    </Pressable>
                                </View>
                          </View>
                        </View>
                  </Modal>
                  {/* endmodal */}
                  <View style={styles.container}>
                      <View style={{width:'100%',height:120}}>
                          <Horizon />
                      </View>
                      <View style={{width:'100%',height:50}} >
                          <View style={styles.filter}>
                              <Text style={{color:'#425C59',marginRight: 10}}>Bộ lọc</Text>
                              <Icon
                                name="filter"
                                color="#425C59"
                                size={16}
                              />
                          </View>
                      </View>

                      <FlatList
                      data={this.state.data}
                      renderItem={this.renderItem}
                      keyExtractor={item => item.name}
                      stickyHeaderIndices={this.state.stickyHeaderIndices} />
                  </View>
              </View>
        </ScrollView>

        );
   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 10,
      backgroundColor:'#F5F5F5',
   },
   image:{
     flex: 6,
    //  backgroundColor:"black",
     height:'100%',
     padding:10,
     justifyContent:'center',
     alignItems: 'center',
   },
   images:{
     height:100,
     width:'100%',
     resizeMode:'contain',
   },
   info:{
    flex: 12,
    height:'100%',
   },
   buttonContainer:{
    flexDirection:'row',
    height:40,
   },
   textInfo:{
    marginBottom:2,
   },
   name:{
    color:'#425C59',
    fontSize: 16,
   },
   cost:{
    color:'#FF792E',
   },
   text:{
     color:'#818181',
   },

   viewDetail:{
     flex:1,
     backgroundColor:'#FF792E',
     borderRadius: 4,
     justifyContent:'center',alignItems:'center',

   },
   buyProduct:{
    flex: 1,
    // height:5
    backgroundColor:'#FF792E',
    marginLeft:10,
     justifyContent:'center',alignItems:'center',
     borderRadius: 4,
   },
   btnText:{
     color:'white',
   },
   filter:{
     height:36,
     width:90,
     borderWidth:2,
     borderColor:'#425C59',
     position:'absolute',
     right:'10%',
     borderRadius:4,
     alignItems:'center',
     justifyContent:'center',
     flexDirection: 'row',
    },
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 4,
      paddingRight:8,
      margin: 2,
      marginBottom:20,
      borderColor: '#2a4944',
      borderWidth: 1,
      height: 174,
   },



   centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDelete:{
    width:25,
    height:23,
    borderColor:'#425C59',
    borderWidth:1,
    left: '48%',
    borderRadius: 6,
    justifyContent:'center',
    alignItems: 'center',
    marginBottom:20,
  },
  modelContainer:{
    backgroundColor:'white',
    width: '90%',
    height: '24%',
    top:'30%',
    borderRadius:6,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth:1,
    padding: 20,
    paddingTop:4,
  },
  modalView: {
    marginTop: 0,

    backgroundColor: 'rgba(0,0,0,0.5)',
    // opacity:0.1,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: '100%',
    height: '100%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#425C59',
    width:'60%',
    top: '14%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
