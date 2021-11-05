import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.7;

export default class Slider extends Component {
  state = {
    active: 0,
  };

  change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({active: slide});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={styles.scrolls}>
          {this.props.images.map((image, index) => (
            <Image key={index} source={{uri: image}} style={styles.imagebox} />
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {this.props.images.map((i, k) => (
            <Text
              key={k}
              style={
                k === this.state.active
                  ? styles.pagingActiceText
                  : styles.pagingText
              }>
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  scrolls: {
    width,
    height,
  },
  imagebox: {
    width,
    height,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {
    color: '#b3b3b3',
    fontSize: width / 30,
    margin: 3,
  },
  pagingActiceText: {
    color: 'white',
    fontSize: width / 30,
    margin: 3,
  },
});
