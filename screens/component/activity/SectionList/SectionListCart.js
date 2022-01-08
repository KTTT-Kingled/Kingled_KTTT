import React, { Component } from 'react';
import { Image, SectionList, StatusBar, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
                <Text style={styles.codeText}>Quy cách: {title.barrel} chiếc / thùng</Text>
                <Text style={styles.codeText}>Tích lũy: {title.ones} xu / chiếc</Text>
                <View style={styles.amount}>
                  <View style={styles.btnAmount}>
                    <Icon
                      name="remove-circle"
                      color="#363636"
                      size={24}
                      //style={{right: 0}}
                    />
                    <View style={styles.inputView}>
                      <Text style={{color:'#363636', fontSize: 12}}>{title.amount}</Text>
                    </View>
                      <Icon
                        name="add-circle"
                        color="#363636"
                        size={24}
                        //style={{right: 0}}
                      />
                  </View>
                  <Icon
                      name="trash"
                      color="#363636"
                      size={23}
                      style={{right: 10}}
                    />
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
    //backgroundColor: "#fff",
    marginVertical: 3,
    //borderColor:'#425C59',
    //borderWidth:1,
    paddingTop:10,
    paddingBottom:10,
    borderRadius: 4,
    borderBottomWidth: 0.2,
    borderBottomColor: "#c2c2c2",
    //elevation: 3,
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
    color: '#363636',
    fontWeight:'bold',
    textAlign: 'justify',
  },
  cost:{
    fontSize: 17,
    color: '#e7a703',
    fontWeight:'bold',
  },
  amount:{
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
  },
  deleteProduct:{
    fontSize:15,
    fontWeight:'bold',
    color: '#FF4646',
  },
  btnAmount:{
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop: 10,
  },
  codeText:{
    color:'#a1a1a1',
    fontSize: 12,
  },
  btnSub:{
      paddingLeft:10,
      paddingRight:10,
  },
  btnText:{
      fontSize:12,
      color: '#000000',
  },
  inputView:{
      width:'30%',
      height:23,
      justifyContent:'center',
      alignItems:'center',
      marginLeft: 3,
      marginRight:3,
      borderWidth:1,
      borderColor: '#363636',
      borderRadius: 50,
  },
});

export default SectionListCart;
