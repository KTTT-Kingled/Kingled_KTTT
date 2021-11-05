import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HeaderComponent extends Component {
  render() {
    return (
        <View style={styles.session1}>
        <View style={styles.header}>
          <View style={styles.hang1} />
          <View style={styles.hang2}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logostyle}
            />
          </View>
          <View style={styles.hang3}>
            <View style={styles.iconzone}>
              <View style={styles.icons}>
                <Icon name="notifications" color="white" size={26} />
              </View>
              <Icon name="cart" color="white" size={26} style={{left:10}}/>
            </View>
          </View>
        </View>
        <View style={styles.searchbar}>
          <View style={styles.sectionStyle}>
            <View style={styles.iconStyle}>
              <Icon name="search" color="#425C59" size={22} />
            </View>
            <View style={styles.IPText}>
              <TextInput
                style={styles.inputzone}
                placeholder="Bạn muốn tìm gì"
                placeholderTextColor="#BCBCBC"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    session1: {
        width:"100%",
        backgroundColor: '#425C59',
        paddingBottom: 4,
        height: 126,

      },
    header: {
        flex: 1,
        paddingTop: 5,
        flexDirection: 'row',
    },
    hang1: {
        flex: 1,
      },
    hang2: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',

      },
    logostyle: {
        height: 54,
        width: 110,
      },
    hang3: {
        flex: 1,
        alignItems: 'flex-end',
      },
    iconzone: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingRight: 20,
      },
      icons: {
        paddingRight: 10,
      },
      searchbar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0
      },
      sectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 44,
        width: '80%',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        margin: 10,
      },
      iconStyle: {
        margin: 5,
        marginLeft: 10,
        alignItems: 'center',
      },
      IPText: {
        justifyContent: 'center',
        height: 50,
      },
      inputzone: {
          width: 220,
      },
});
