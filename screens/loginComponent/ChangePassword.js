import React, { useContext, useState } from 'react';
import {
  Alert, Image,
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

const ChangePassword = ({navigation}) => {
  const {user} = useContext(UserContext);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  async function handleChangePassword() {
    if (currentPassword !== '' && newPassword !== '' && confirmPassword !== '') {
      if (newPassword === confirmPassword) {
        const response = await fetch(
          'https://kingled-kttt.herokuapp.com/api/auth/changePassword',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: user.userLogged.username,
              currentpassword: currentPassword,
              newpassword: newPassword,
            }),
          }
        );
        const json = await response.json();
        if (json.success) {
          Alert.alert('Đổi mật khẩu thành công');
        } else {
          Alert.alert('Mật khẩu cũ không đúng');
        }
      } else {
        Alert.alert('Mật khẩu mới và xác nhận mật khẩu không khớp');
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
              <Text style={styles.textPhone}>Mật khẩu hiện tại</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  placeholder="Nhập mật khẩu hiện tại của bạn"
                  placeholderTextColor="#D7D7D7"
                  value={currentPassword}
                  onChangeText={text => setCurrentPassword(text)}
                  secureTextEntry={!currentPasswordVisible}
                />
                <Icon
                  name={currentPasswordVisible ? 'md-eye' : 'md-eye-off'}
                  color="#425C59"
                  size={25}
                  style={{right: 14}}
                  onPress={() => setCurrentPasswordVisible(!currentPasswordVisible)}
                />
              </View>
            </View>
            <View style={[styles.phone, styles.elevation]}>
              <Text style={styles.textPhone}>Nhập mật khẩu mới</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  placeholder="Nhập mật khẩu mới"
                  placeholderTextColor="#D7D7D7"
                  value={newPassword}
                  onChangeText={text => setNewPassword(text)}
                  secureTextEntry={!newPasswordVisible}
                />
                <Icon
                  name={newPasswordVisible ? 'md-eye' : 'md-eye-off'}
                  color="#425C59"
                  size={25}
                  style={{right: 14}}
                  onPress={() => setNewPasswordVisible(!newPasswordVisible)}
                />
              </View>
            </View>
            <View style={[styles.phone, styles.elevation]}>
              <Text style={styles.textPhone}>Nhập lại mật khẩu mới</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  placeholder="Nhập lại mật khẩu mới"
                  placeholderTextColor="#D7D7D7"
                  value={confirmPassword}
                  onChangeText={text => setConfirmPassword(text)}
                  secureTextEntry={!confirmPasswordVisible}
                />

                <Icon
                  name={confirmPasswordVisible ? 'md-eye' : 'md-eye-off'}
                  color="#425C59"
                  size={25}
                  style={{right: 14}}
                  onPress={() => {
                    setConfirmPasswordVisible(!confirmPasswordVisible);
                  }}
                />
              </View>
            </View>
            <Pressable style={styles.loginBtn} onPress={() => handleChangePassword()}>
              <Text style={styles.loginBtnText}>Đổi mật khẩu</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ChangePassword;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#425C59',
    height: 700,
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
    height: '80%',
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
    //borderColor: "#425C59",
    //borderWidth: 0.5,
  },
  textPhone: {
    color: 'black',
    fontSize: 20,
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
    color: '#425C59',
  },
  textRegister: {
    color: '#425C59',
  },
  elevation: {
    // elevation: 10,
    shadowColor: '#656565',
  },
});
