import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import {
  Alert, Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//   import "@reach/combobox/styles.css";
const Register = ({navigation}) => {

  // Address variables
  const [allCities, setAllCities] = useState([]);
  const [allDistricts, setAllDistricts] = useState([]);
  const [allWards, setAllWards] = useState([]);

  const [city, setCity] = useState({});
  const [isCityPicked, setCityPicked] = useState(false);

  const [district, setDistrict] = useState({});
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [isDistrictPicked, setDistrictPicked] = useState(false);

  const [ward, setWard] = useState({});
  const [filteredWards, setFilteredWards] = useState([]);

  // User variables
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    fetchCities();
    fetchDistricts();
    fetchWards();
  }, []);

  async function fetchCities() {
    const response = await fetch(
      'https://kingled-kttt.herokuapp.com/api/address/city'
    );
    const json = await response.json();
    setAllCities(json);
    console.log('Set Cities');
    setCity(json[0]);
    console.log('Set 1st City');
  }
  async function fetchDistricts() {
    const response = await fetch(
      'https://kingled-kttt.herokuapp.com/api/address/district?city='
    );
    const json = await response.json();
    setAllDistricts(json);
    console.log('Set Districts');
  }
  async function fetchWards() {
    const response = await fetch(
      'https://kingled-kttt.herokuapp.com/api/address/ward?district='
    );
    const json = await response.json();
    setAllWards(json);
    console.log('Set Wards');
  }

  async function register(user) {
    const response = await fetch(
      'https://kingled-kttt.herokuapp.com/api/auth/register',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.message === 'User created!') {
      Alert.alert('Thông báo', 'Đăng ký thành công');
      navigation.replace('Home');
    } else if (json.code === 11000) {
      Alert.alert('Thông báo', 'Tài khoản đã tồn tại');
    }
  }

  //function to change array object to array of label and value
  function ConvertToPicker(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push({
        label: array[i].name,
        value: array[i].code,
      });
    }
    return result;
  }

  function convertToArray(object) {
    let result = [];
    for (let i = 0; i < object.length; i++) {
      result.push(object[i].name);
    }
    return result;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.Logo}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{width: '60%', height: '60%', resizeMode: 'contain'}}
          />
        </View>
        <View style={styles.loginscreen}>
          <View style={styles.login}>
            <View style={[styles.phone, styles.elevation]}>
              <Text style={styles.textPhone}>Họ và tên</Text>
              <TextInput
                style={styles.input}
                placeholder="Nhập họ và tên của bạn"
                placeholderTextColor="#D7D7D7"
                value={fullname}
                onChangeText={
                  (text) => {
                    setFullname(text);
                  }
                }
              />
            </View>
            <View style={[styles.phone, styles.elevation]}>
              <Text style={styles.textPhone}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Nhập username của bạn"
                placeholderTextColor="#D7D7D7"
                value={username}
                onChangeText={
                  (text) => {
                    setUsername(text);
                  }
                }
              />
            </View>
            <View style={[styles.phone, styles.elevation]}>
              <Text style={styles.textPhone}>Số điện thoại</Text>
              <TextInput
                style={styles.input}
                placeholder="Nhập số điện thoại của bạn"
                keyboardType="numeric"
                placeholderTextColor="#D7D7D7"
                value={phone}
                onChangeText={
                  (text) => {
                    setPhone(text);
                  }
                }
              />
            </View>
            <View style={[styles.phone, styles.elevation]}>
              <Text style={styles.textPhone}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Nhập email của bạn"
                keyboardType="email-address"
                placeholderTextColor="#D7D7D7"
                value={email}
                onChangeText={
                  (text) => {
                    setEmail(text);
                  }
                }
              />
            </View>
            <View style={[styles.phone, styles.elevation]}>
              <Text style={styles.textPhone}>Mật khẩu</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  style={styles.input}
                  placeholder="Nhập mật khẩu"
                  placeholderTextColor="#D7D7D7"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={
                    (text) => {
                      setPassword(text);
                    }
                  }
                />

                <Icon
                  name="eye-off"
                  color="#425C59"
                  size={25}
                  style={{right: 14}}
                />
              </View>
            </View>

            <View style={[styles.phone, styles.elevation]}>
              <Text style={styles.textPhone}>Nhập lại mật khẩu</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  style={styles.input}
                  placeholder="Nhập lại mật khẩu"
                  placeholderTextColor="#D7D7D7"
                  secureTextEntry={true}
                  value={confirmPassword}
                  onChangeText={
                    (text) => {
                      setConfirmPassword(text);
                    }
                  }
                />

                <Icon
                  name="eye-off"
                  color="#425C59"
                  size={25}
                  style={{right: 14}}
                />
              </View>
            </View>
            {/* Pick City */}
            <View style={[styles.picker, styles.elevation]}>
              <SafeAreaView style={styles.container1}>
                <Picker
                  selectedValue={city.code}
                  onValueChange={(itemValue, itemIndex) => {
                    //get city by code
                    let selected = allCities.find(
                      res => res.code === itemValue
                    );
                    console.log(selected.code);
                    // get districts = all districts with parent_code = selected.code
                    let districts = allDistricts.filter(
                      res => res.parent_code === selected.code
                    );
                    setCity(selected);
                    console.log('Set City: ' + selected.name);
                    setFilteredDistricts(districts);
                    console.log('Set Districts: ' + districts);
                    setDistrict(districts[0]);
                    console.log('Set 1st District: ' + districts[0].name);
                    setCityPicked(true);
                    console.log('Set City Picked');
                  }}>
                  {allCities.map((item, index) => {
                    return (
                      <Picker.Item
                        style={styles.textPhone}
                        key={index}
                        label={item.name_with_type}
                        value={item.code}
                      />
                    );
                  })}
                </Picker>
              </SafeAreaView>
            </View>
            {/* Pick District */}
            <View style={[styles.picker, styles.elevation]}>
              <SafeAreaView style={styles.container1}>
                <Picker
                  selectedValue={district.code}
                  enabled={isCityPicked}
                  onValueChange={(itemValue, itemIndex) => {
                    //get city by code
                    let selected = filteredDistricts.find(
                      res => res.code === itemValue
                    );
                    console.log(selected.code);
                    // get wards = all wards with parent_code = selected.code
                    const wards = allWards.filter(
                      res => res.parent_code === selected.code
                    );
                    setDistrict(selected);
                    console.log('Set District: ' + selected.name);
                    setFilteredWards(wards);
                    if (wards) {
                      console.log('Set Wards: ' + wards);
                      setWard(wards[0]);
                      console.log('Set 1st Ward: ' + wards[0].name);
                      setDistrictPicked(true);
                      console.log('Set District Picked');
                    } else {
                      setWard({});
                    }
                  }}>
                  {filteredDistricts.map((item, index) => {
                    return (
                      <Picker.Item
                        style={styles.textPhone}
                        key={index}
                        label={item.name_with_type}
                        value={item.code}
                      />
                    );
                  })}
                </Picker>
              </SafeAreaView>
            </View>
            {/* Pick Ward */}
            <View style={[styles.picker, styles.elevation]}>
              <SafeAreaView style={styles.container1}>
                <Picker
                  enabled={isDistrictPicked}
                  selectedValue={ward.code}
                  onValueChange={(itemValue, itemIndex) => {
                    //get city by code
                    let selected = filteredWards.find(
                      res => res.code === itemValue
                    );
                    setWard(selected);
                  }}>
                  {filteredWards.map((item, index) => {
                    return (
                      <Picker.Item
                        style={styles.textPhone}
                        key={index}
                        label={item.name_with_type}
                        value={item.code}
                      />
                    );
                  })}
                </Picker>
              </SafeAreaView>
            </View>

            <View style={[styles.phone, styles.elevation]}>
              <Text style={styles.textPhone}>Địa chỉ nhà</Text>
              <TextInput
                style={styles.input}
                placeholder="Địa chỉ nhà"
                placeholderTextColor="#D7D7D7"
                value={address}
                onChangeText={
                  (text) => {
                    setAddress(text);
                  }
                }
              />
            </View>
            <Pressable
              onPress={() => {
                // check if username, phone, password, confirm password, address are not empty
                if (
                  username !== '' &&
                  phone !== '' &&
                  password !== '' &&
                  confirmPassword !== '' &&
                  address !== ''
                ) {
                  // check if password and confirm password are the same
                  if (password === confirmPassword) {
                    // check if phone is valid
                    if (phone.length === 10) {
                      var newUser = {
                        fullName: fullname,
                        username: username,
                        password: password,
                        address: {
                          city: city.name_with_type,
                          district: district.name_with_type,
                          ward: ward.name_with_type,
                          address: address + ', ' + ward.name_with_type + ', ' + district.name_with_type + ', ' + city.name_with_type,
                        },
                        isAdmin: false,
                        phone: phone,
                      };
                      console.log(newUser);
                      // call api to register
                      Alert.alert(
                        'Thông báo',
                        'Bạn có chắc chắn muốn đăng ký?',
                        [
                          {
                            text: 'Hủy',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {
                            text: 'Đồng ý',
                            onPress: () => {
                      register(newUser);
                    },

                          },
                        ],
                        {cancelable: false},
                      );
                    } else {
                      Alert.alert('Thông báo', 'Số điện thoại không hợp lệ');
                    }
                  } else {
                    Alert.alert('Thông báo', 'Mật khẩu không trùng khớp');
                  }
                } else {
                  Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin');
                }
              }}>
              <View style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>Đăng ký</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#425C59',
    height: 1414,
  },
  Logo: {
    width: '100%',
    height: '19%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  },
  loginscreen: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '81%',
    borderTopLeftRadius: 90,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    width: '84%',
    height: '70%',
    // backgroundColor:"red",
    position: 'absolute',
    top: '8%',
    alignItems: 'center',
    // justifyContent:"center",
  },
  phone: {
    width: '100%',
    height: '10%',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingTop: 12,
    borderRadius: 10,
    boxShadow: '22 22 10 22  #15ad9b',
    marginTop: 15,
    elevation: 3,
    //borderColor: "#425C59",
    //borderWidth: 0.5,
    paddingBottom: 12,
  },
  textPhone: {
    color: 'black',
    fontSize: 15,
  },
  input: {
    // backgroundColor:"black",
    color: 'black',
    width: '90%',
  },
  loginBtn: {
    backgroundColor: '#425C59',
    width: 200,
    height: 44,
    borderRadius: 38,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 6,
    // justifyContent:"center",
  },
  loginBtnText: {
    fontSize: 18,
    top: '20%',
    color: 'white',
  },
  text: {
    // marginVertical: 20,
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  touchableOpacity: {
    // backgroundColor: "orange",
    alignSelf: 'stretch',
    // paddingHorizontal: 20,
  },
  phone1: {
    width: '100%',
    height: '7%',
    backgroundColor: 'white',
    elevation: 3,
    paddingLeft: 5,
    paddingTop: 12,
    borderRadius: 10,
    boxShadow: '22 22 10 22  #15ad9b',
    marginTop: 14,
    //borderColor: "#425C59",
    //borderWidth: 0.5,
  },
  picker: {
    width: '100%',
    height: '6.5%',
    backgroundColor: 'white',
    elevation: 3,
    paddingLeft: 0,
    paddingTop: 0,
    borderRadius: 10,
    boxShadow: '22 22 10 22  #15ad9b',
    marginTop: 14,
    //borderColor: "#425C59",
    //borderWidth: 0.5,
  },
});
