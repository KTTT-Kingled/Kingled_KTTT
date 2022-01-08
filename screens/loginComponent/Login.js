import React, { useContext, useState } from 'react';
import {
    Alert,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import logo from '../../assets/images/logo.png';
import { UserContext } from '../../contexts/userContext';

const Login = ({navigation}) => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(user, pass) {
    if (user !== '' && pass !== '') {
      console.log(user, pass);
      const response = await fetch(
        'https://kingled-kttt.herokuapp.com/api/auth/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: user,
            password: pass,
          }),
        }
      );

      const json = await response.json();

      if (json.success) {
          console.log(json.user, json.token);
          Alert.alert('Đăng nhập thành công');
        login(json.user, json.token);
      } else {
        Alert.alert('Tài khoản hoặc mật khẩu không đúng');
      }
    } else {
      Alert.alert('Vui lòng nhập đầy đủ thông tin');
    }
  }

  return (
    <ScrollView>
      {/* scrollView */}
      <View style={styles.container}>
        <View style={styles.Logo}>
          <Image
            source={logo}
            style={{width: '60%', height: '60%', resizeMode: 'contain'}}
          />
        </View>
        <View style={styles.loginscreen}>
          <View style={styles.login}>
            <View style={[styles.phone, styles.elevation]}>
              <Text style={styles.textPhone}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Nhập username, email hoặc số điện thoại"
                placeholderTextColor="#D7D7D7"
                value={username}
                onChangeText={text => setUsername(text)}
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
                  onChangeText={text => setPassword(text)}
                />

                <Icon
                  name="eye-off"
                  color="#425C59"
                  size={25}
                  style={{right: 14}}
                />
              </View>
            </View>
            <Pressable
              style={styles.loginBtn}
              onPress={() => handleLogin(username, password)}>
              <Text style={styles.loginBtnText}>Đăng nhập</Text>
            </Pressable>
            <View style={[styles.register]}>
              <Text style={styles.noAccText}>Chưa có tài khoản ? </Text>
              <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={styles.textRegister}>Đăng ký</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#425C59',
    height: 800,
  },
  Logo: {
    width: '100%',
    height: '22%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  },
  loginscreen: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '76%',
    borderTopLeftRadius: 90,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    width: '84%',
    height: '76%',
    //backgroundColor:"red",
    position: 'absolute',
    top: '10%',
    alignItems: 'center',
    // justifyContent:"center",
  },
  phone: {
    width: '100%',
    height: '20%',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingTop: 12,
    borderRadius: 10,
    elevation: 3,
    marginTop: 22,
    paddingBottom: 12,
    //borderColor: "#425C59",
    //borderWidth: 0.5,
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
    marginTop: 30,
    marginBottom: 6,
    // justifyContent:"center",
  },
  loginBtnText: {
    fontSize: 18,
    top: '20%',
    color: 'white',
  },
  register: {
    flexDirection: 'row',
  },
  noAccText: {
    color: '#000',
  },
  textRegister: {
    color: '#425C59',
  },
  elevation: {
    // elevation: 10,
    shadowColor: '#656565',
  },
});
