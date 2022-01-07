import React, { Component } from 'react';
import { Image, SectionList, StatusBar, StyleSheet, Text, View } from 'react-native';

const DATA = [
  {
    title: 'Thành list',
    data: [
    {
      id: 1,
      deleteProduct: 'Bỏ khỏi giỏ hàng',
      name:'ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC',
      cost:'220.000',
      code:'DDL-10SS-T120',
      barrel:'50',
      ones:'2.200',
      amount: 5,
      uri: 'https://th.bing.com/th/id/R.13f35afb73b386293bdfc53dd9bdd4e4?rik=mA0PH9i3%2fijWgA&riu=http%3a%2f%2fnoithatsct.com%2fwp-content%2fuploads%2f2020%2f07%2fDen-LED-ong-bo-COB-gan-noi-tran-anh01.jpg&ehk=ImuutcZwkUiFgxBlOH8XgOQfT4jzQZjvFanOS9ZQSfs%3d&risl=&pid=ImgRaw&r=0',

    },
    {
        id: 2,
        deleteProduct: 'Bỏ khỏi giỏ hàng',
        name:'ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC',
        cost:'220.000',
        code:'DDL-10SS-T120',
        barrel:'50',
        amount: 55,
        ones:'2.200',
        uri: 'https://th.bing.com/th/id/R.13f35afb73b386293bdfc53dd9bdd4e4?rik=mA0PH9i3%2fijWgA&riu=http%3a%2f%2fnoithatsct.com%2fwp-content%2fuploads%2f2020%2f07%2fDen-LED-ong-bo-COB-gan-noi-tran-anh01.jpg&ehk=ImuutcZwkUiFgxBlOH8XgOQfT4jzQZjvFanOS9ZQSfs%3d&risl=&pid=ImgRaw&r=0',

      },
      {
        id: 3,
        deleteProduct: 'Bỏ khỏi giỏ hàng',
        name:'ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC',
        cost:'220.000',
        code:'DDL-10SS-T120',
        barrel:'50',
        amount: 214,
        ones:'2.200',
        uri: 'https://th.bing.com/th/id/R.13f35afb73b386293bdfc53dd9bdd4e4?rik=mA0PH9i3%2fijWgA&riu=http%3a%2f%2fnoithatsct.com%2fwp-content%2fuploads%2f2020%2f07%2fDen-LED-ong-bo-COB-gan-noi-tran-anh01.jpg&ehk=ImuutcZwkUiFgxBlOH8XgOQfT4jzQZjvFanOS9ZQSfs%3d&risl=&pid=ImgRaw&r=0',

      },
      {
        id: 4,
        deleteProduct: 'Bỏ khỏi giỏ hàng',
        name:'ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC',
        cost:'220.000',
        code:'DDL-10SS-T120',
        barrel:'50',
        amount: 16,
        ones:'2.200',
        uri: 'https://th.bing.com/th/id/R.13f35afb73b386293bdfc53dd9bdd4e4?rik=mA0PH9i3%2fijWgA&riu=http%3a%2f%2fnoithatsct.com%2fwp-content%2fuploads%2f2020%2f07%2fDen-LED-ong-bo-COB-gan-noi-tran-anh01.jpg&ehk=ImuutcZwkUiFgxBlOH8XgOQfT4jzQZjvFanOS9ZQSfs%3d&risl=&pid=ImgRaw&r=0',

      },

],
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
        <View style={styles.amount}>
            <View style={{flex:4,justifyContent:'center'}}>
                <Text style={styles.deleteProduct}>{title.deleteProduct}</Text>
            </View>
            <View style={{flex:7,flexDirection:'row'}}>
                <View style={[styles.btnAmount,styles.btnSub]}>
                    <Text style={styles.btnText}>-</Text>
                </View>
                <View style={styles.inputView}>
                    <Text style={{color:'#000000'}}>{title.amount}</Text>
                </View>
                <View style={styles.btnAmount}>
                    <Text style={styles.btnText}>+</Text>
                </View>
            </View>
        </View>

  </View>
);

class SectionListCart extends Component {
  render() {
    return (
      <View style={{marginTop:12,marginBottom:12}}>
          <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
        //   renderSectionHeader={({ section: { title } }) => (
        //     <Text style={styles.header}>{title}</Text>
        //   )
        //     }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    // backgroundColor: "#f9c2ff",
    marginVertical: 8,
    borderColor:'#425C59',
    borderWidth:1,
    paddingTop:10,
    paddingBottom:10,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    color: 'black',
  },
  title: {
    fontSize: 24,
  },
  images:{
    height:100,
    width:100,
    resizeMode:'contain',
    marginLeft: '7%',
    // right:10
  },
  imageContainer:{
    flex: 4,
    alignContent:'center',
    justifyContent:'center',
  },
  inforContainer:{
    flex: 7,
    height:'100%',
  },
  itemInformation:{
      flexDirection:'row',
  },
  name:{
    fontSize: 15,
    color: '#425C59',
    fontWeight:'bold',
  },
  cost:{
    fontSize: 15,
    color: '#FF792E',
    fontWeight:'bold',
  },
  amount:{
      flexDirection:'row',
      padding:4,
  },
  deleteProduct:{
    fontSize:15,
    fontWeight:'bold',
    color: '#FF4646',
  },
  btnAmount:{
      padding:2,
      paddingRight:8,
      paddingLeft:8,
      borderWidth:1,
      borderColor: '#000000',
  },
  codeText:{
      color:'#818181',
  },
  btnSub:{
      paddingLeft:10,
      paddingRight:10,
  },
  btnText:{
      fontSize:14,
      color: '#000000',
  },
  inputView:{
      width:'60%',
      height:28,
      justifyContent:'center',
      alignItems:'center',
      marginLeft: 8,
      marginRight:8,
      borderWidth:1,
      borderColor: '#000000',
  },
});

export default SectionListCart;
