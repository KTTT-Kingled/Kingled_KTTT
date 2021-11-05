import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar,Image,TextInput } from "react-native";

const DATA = [
  {
    title: "Thành list",
    data: [
    {
      id: 1,
      name:"ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC",
      cost:"220.000",
      barrel:"50",
      total:"11.000.000",
      amount: 5,
      uri: "https://th.bing.com/th/id/R.13f35afb73b386293bdfc53dd9bdd4e4?rik=mA0PH9i3%2fijWgA&riu=http%3a%2f%2fnoithatsct.com%2fwp-content%2fuploads%2f2020%2f07%2fDen-LED-ong-bo-COB-gan-noi-tran-anh01.jpg&ehk=ImuutcZwkUiFgxBlOH8XgOQfT4jzQZjvFanOS9ZQSfs%3d&risl=&pid=ImgRaw&r=0"
      
    },
    {
        id: 2,
        name:"ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC",
        cost:"220.000",
        barrel:"50",
        amount: 55,
        total:"11.000.000",
        uri: "https://th.bing.com/th/id/R.13f35afb73b386293bdfc53dd9bdd4e4?rik=mA0PH9i3%2fijWgA&riu=http%3a%2f%2fnoithatsct.com%2fwp-content%2fuploads%2f2020%2f07%2fDen-LED-ong-bo-COB-gan-noi-tran-anh01.jpg&ehk=ImuutcZwkUiFgxBlOH8XgOQfT4jzQZjvFanOS9ZQSfs%3d&risl=&pid=ImgRaw&r=0"
  
      },
      {
        id: 3,
        name:"ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC",
        cost:"11.000.000",
        barrel:"50",
        total:"2.200",
        uri: "https://th.bing.com/th/id/R.13f35afb73b386293bdfc53dd9bdd4e4?rik=mA0PH9i3%2fijWgA&riu=http%3a%2f%2fnoithatsct.com%2fwp-content%2fuploads%2f2020%2f07%2fDen-LED-ong-bo-COB-gan-noi-tran-anh01.jpg&ehk=ImuutcZwkUiFgxBlOH8XgOQfT4jzQZjvFanOS9ZQSfs%3d&risl=&pid=ImgRaw&r=0"
        
      },
      {
        id: 4,
        name:"ĐÈN ÂM TRẦN DIAMOND 10W ĐƠN SẮC",
        cost:"220.000",
        barrel:"50",
        total:"11.000.000",
        uri: "https://th.bing.com/th/id/R.13f35afb73b386293bdfc53dd9bdd4e4?rik=mA0PH9i3%2fijWgA&riu=http%3a%2f%2fnoithatsct.com%2fwp-content%2fuploads%2f2020%2f07%2fDen-LED-ong-bo-COB-gan-noi-tran-anh01.jpg&ehk=ImuutcZwkUiFgxBlOH8XgOQfT4jzQZjvFanOS9ZQSfs%3d&risl=&pid=ImgRaw&r=0"
  
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
                <Text style={styles.codeText}>Đơn giá: {title.cost}VNĐ /thùng</Text>
                <Text style={styles.codeText}>Số lượng: {title.barrel} thùng</Text>
                <Text style={styles.codeText}>Tổng: {title.total} /VNĐ</Text>
            </View>
        </View>

  </View>
);

class SectionListAbate extends Component {
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
    marginHorizontal: 16
  },
  item: {
    // backgroundColor: "#f9c2ff",
    marginVertical: 8,
    borderColor:"#425C59",
    borderWidth:1,
    paddingTop:10,
    paddingBottom:10
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
    marginLeft: "7%"
    // right:10
  },
  imageContainer:{
    flex: 4,
    alignContent:"center",
    justifyContent:"center"
  },
  inforContainer:{
    flex: 7,
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


  codeText:{
      color:"#818181"
  },

  btnText:{
      fontSize:14,
      color: "#000000"
  },

});

export default SectionListAbate;