import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderComponent from '../headerComponent.js';

const EmptyProduct = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <View style={{alignItems: 'center', marginTop: 36, marginBottom: 8}}>
        <Text style={{color: '#425C59', fontSize: 24}}>GIỎ HÀNG TRỐNG</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
  },
  progress: {
    marginTop: 15,
    marginBottom: 1,
    width: '100%',
  },
  circle: {
    width: 22,
    height: 22,
    backgroundColor: '#E9E9E9',
    borderRadius: 100,
    marginTop: '-3.2%',
    marginLeft: '16%',
    borderColor: '#FF792E',
    borderWidth: 2,
  },
  circle2: {
    marginTop: '-6.2%',
    marginLeft: '38%',
  },
  circle3: {
    marginTop: '-6.2%',
    marginLeft: '60%',
  },
  circle4: {
    marginTop: '-6.2%',
    marginLeft: '82%',
  },
  circleColor: {
    backgroundColor: '#FF792E',
  },
  btnNext: {
    backgroundColor: 'red',
  },
});
export default EmptyProduct;
