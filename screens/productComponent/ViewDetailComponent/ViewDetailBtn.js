import * as React from 'react';
import ViewDetailStack from '../../Stack/ViewDetailStack.js'
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar,Image,TextInput } from "react-native";

const ViewDetailBtn = () => {
  return (
    <View style={styles.btnProduct} onStartShouldSetResponder={
        () => ('OnPress', navigation.navigate('Detail'))
        }>
          <Text style={styles.btnText}>Xem chi tiết</Text>
      </View>
  );
};

const styles = StyleSheet.create({
    btnProduct:{
        backgroundColor:"#FF792E",
        padding:0,
        width:"44%",
        borderRadius:4,
        paddingBottom:6,
        paddingTop:6,
        paddingLeft:10,
        paddingRight:10,
        marginRight: 8
      },
      btnText:{
        color:"white"
    }

})
export default ViewDetailBtn;