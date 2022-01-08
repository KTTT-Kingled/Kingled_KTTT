import React, { useContext, useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { OrderContext } from '../../contexts/orderContext';
import { SearchContext } from '../../contexts/searchContext';
// headerComponent

function onSearch(search, setSearchValue) {
  if (search.length > 0) {
    fetch(
      `https://kingled-kttt.herokuapp.com/api/products/search?code=&category=&name=${search}`
    )
      .then(res => res.json())
      .then(res => {
        if (res[0].results > 0) {
          Alert.alert('Thông báo', 'Tìm thấy ' + res[0].results + ' sản phẩm');
          setSearchValue(search, res);
        } else {
          Alert.alert('Thông báo', 'Không tìm thấy sản phẩm nào');
        }
      });
  } else {
    Alert.alert('Thông báo', 'Vui lòng nhập tên sản phẩm');
  }
}

const HeaderComponent = () => {
  const {isEmpty, total, search} = useContext(OrderContext);
  const {setSearchValue} = useContext(SearchContext);
  const [searchValue, setSearch] = useState('');
  // const navigation = useNavigation();

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
              <Icon name="notifications" color="white" size={22} />
            </View>
            <Pressable
              onPress={() => {
                Alert.alert('Total price: ' + total);
              }}>
              <View style={styles.icons}>
                {isEmpty ? (
                  <Icon
                    name="cart"
                    color="white"
                    size={25}
                    style={{left: 4, top: 0}}
                  />
                ) : (
                  <>
                    <Icon
                      name="cart"
                      color="white"
                      size={25}
                      style={{left: 4, top: 19}}
                    />
                    <FontAwesome
                      name="circle"
                      color="red"
                      size={18}
                      style={{left: 18, top: -12}}
                    />
                  </>
                )}
              </View>
            </Pressable>
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
              value={searchValue}
              placeholder="Bạn muốn tìm gì?"
              placeholderTextColor="#BCBCBC"
              onChangeText={text => setSearch(text)}
              // when user press enter
              onSubmitEditing={() => {
                onSearch(searchValue, setSearchValue);
                setSearch('');
                // navigation.navigate(
                //   'Sản phẩm',
                //   {screen: 'Product'}
                // );
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  session1: {
    width: '100%',
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
    marginTop: 0,
  },
  sectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    //borderColor: '#000',
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
    width: 285,
    color: '#425C59',
  },
});
