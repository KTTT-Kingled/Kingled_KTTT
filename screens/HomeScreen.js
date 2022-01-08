import React, { Component } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../screens/component/headerComponent.js';
import Slider from '../screens/component/Slider.js';

const images = [
  'https://images.kingled.vn/data/Product/498AB859-CAE9-4826-A60D-21B0FD09C9E7/hang-say-tich-luy-trung-qua-2-ti.png',
  'https://images.kingled.vn/data/Site/2A2B7E24-CC23-49E4-B646-E1B03ECF7922/Ads/349FCA69-CD80-47BA-8F61-596F775C741F/CTKM%20thang%201%20PC.jpg?w=1350',
  'https://kingled.vn/data/Product/64C7DE1D-416C-4DE2-9906-C9C1C75BC01E/am-tran-mat-kim-loai-sieu-ben-10w-15w.jpg',
  'https://www.thietbidiendgp.vn/media/article/bg-kingled-2021.jpg',
];

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* header */}
          <HeaderComponent/>
          {/* end header */}
          <View style={styles.session2}>
            <Slider images={images} />
          </View>
          <View style={styles.session3}>
            <View style={styles.frames}>
              <View style={styles.frame1}>
                <View style={styles.bar}>
                  <Icon name="gift-sharp" color="#ffba07" size={18} />
                  <Text style={styles.texticon}>Đổi quà</Text>
                </View>
                <Text style={styles.textdesc}>Xem các phần quà</Text>
              </View>
              <View style={styles.line}>
                <View style={styles.verticleLine} />
              </View>
              <View style={styles.frame1}>
                <View style={styles.bar}>
                  <Icon name="server" color="#ffba07" size={18} />
                  <Text style={styles.texticon}>0 xu</Text>
                </View>
                <Text style={styles.textdesc}>Tích luỹ xu ngay bây giờ</Text>
              </View>
              <View style={styles.line}>
                <View style={styles.verticleLine} />
              </View>
              <View style={styles.frame1}>
                <View style={styles.bar}>
                  <Icon name="qr-code" color="#ffba07" size={18} />
                  <Text style={styles.texticon}>Bảo hành</Text>
                </View>
                <Text style={styles.textdesc}>Kích hoạt bảo hành</Text>
              </View>
            </View>
            <View style={styles.bannerzone}>
              <Image
                source={require('../assets/images/banner-web-2.png')}
                style={styles.banner}
              />
            </View>
            <View style={styles.TextPRzone}>
              <View style={styles.Text1}>
                <Text style={styles.noibat}>Tin nổi bật</Text>
              </View>
              <View style={styles.Text2}>
                <View style={styles.rowtitle}>
                  <Text style={styles.tatca}>Xem thêm</Text>
                  <Icon name="chevron-forward" color="#707070" size={16} />
                </View>
              </View>
            </View>
            <View style={styles.bannerazone}>
              <View style={styles.left}>
                <View style={styles.anh}>
                  <Image
                    source={require('../assets/images/banner-web.png')}
                    style={styles.sizeImg}
                  />
                </View>
                <View style={styles.tieude}>
                  <Text style={styles.title}>
                    Tích Kingcoin liền tay, rinh ngay xế hộp
                  </Text>
                </View>
              </View>
              <View style={styles.right}>
                <View style={styles.anh}>
                  <Image
                    source={require('../assets/images/banner-web.png')}
                    style={styles.sizeImg}
                  />
                </View>
                <View style={styles.tieude}>
                  <Text style={styles.title}>
                    Tích Kingcoin liền tay, rinh ngay xế hộp
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.bannerazone}>
              <View style={styles.left}>
                <View style={styles.anh}>
                  <Image
                    source={require('../assets/images/banner-web.png')}
                    style={styles.sizeImg}
                  />
                </View>
                <View style={styles.tieude}>
                  <Text style={styles.title}>
                    Tích Kingcoin liền tay, rinh ngay xế hộp
                  </Text>
                </View>
              </View>
              <View style={styles.right}>
                <View style={styles.anh}>
                  <Image
                    source={require('../assets/images/banner-web.png')}
                    style={styles.sizeImg}
                  />
                </View>
                <View style={styles.tieude}>
                  <Text style={styles.title}>
                    Tích Kingcoin liền tay, rinh ngay xế hộp
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.bannerazone}>
              <View style={styles.left}>
                <View style={styles.anh}>
                  <Image
                    source={require('../assets/images/banner-web.png')}
                    style={styles.sizeImg}
                  />
                </View>
                <View style={styles.tieude}>
                  <Text style={styles.title}>
                    Tích Kingcoin liền tay, rinh ngay xế hộp
                  </Text>
                </View>
              </View>
              <View style={styles.right}>
                <View style={styles.anh}>
                  <Image
                    source={require('../assets/images/banner-web.png')}
                    style={styles.sizeImg}
                  />
                </View>
                <View style={styles.tieude}>
                  <Text style={styles.title}>
                    Tích Kingcoin liền tay, rinh ngay xế hộp
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.bannerazone}>
              <View style={styles.left}>
                <View style={styles.anh}>
                  <Image
                    source={require('../assets/images/banner-web.png')}
                    style={styles.sizeImg}
                  />
                </View>
                <View style={styles.tieude}>
                  <Text style={styles.title}>
                    Tích Kingcoin liền tay, rinh ngay xế hộp
                  </Text>
                </View>
              </View>
              <View style={styles.right}>
                <View style={styles.anh}>
                  <Image
                    source={require('../assets/images/banner-web.png')}
                    style={styles.sizeImg}
                  />
                </View>
                <View style={styles.tieude}>
                  <Text style={styles.title}>
                    Tích Kingcoin liền tay, rinh ngay xế hộp
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.bannerazone}>
              <View style={styles.left}>
                <View style={styles.anh}>
                  <Image
                    source={require('../assets/images/banner-web.png')}
                    style={styles.sizeImg}
                  />
                </View>
                <View style={styles.tieude}>
                  <Text style={styles.title}>
                    Tích Kingcoin liền tay, rinh ngay xế hộp
                  </Text>
                </View>
              </View>
              <View style={styles.right}>
                <View style={styles.anh}>
                  <Image
                    source={require('../assets/images/banner-web.png')}
                    style={styles.sizeImg}
                  />
                </View>
                <View style={styles.tieude}>
                  <Text style={styles.title}>
                    Tích Kingcoin liền tay, rinh ngay xế hộp
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.bannerazone}>
              <View style={[styles.left,styles.pb]}>
                <View style={styles.anh}>
                  <Image
                    source={require('../assets/images/banner-web.png')}
                    style={styles.sizeImg}
                  />
                </View>
                <View style={styles.tieude}>
                  <Text style={styles.title}>
                    Tích Kingcoin liền tay, rinh ngay xế hộp
                  </Text>
                </View>
              </View>
              <View style={[styles.right,styles.pb]}>
                <View style={styles.anh}>
                  <Image
                    source={require('../assets/images/banner-web.png')}
                    style={styles.sizeImg}
                  />
                </View>
                <View style={styles.tieude}>
                  <Text style={styles.title}>
                    Tích Kingcoin liền tay, rinh ngay xế hộp
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:60,
  },
  session1: {
    flex: 1 / 4,
    backgroundColor: '#425C59',
  },
  session2: {
    flex: 3 / 5,
    backgroundColor: '#425C59',
  },
  session3: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    paddingTop: 5,
    flexDirection: 'row',
  },
  searchbar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hang1: {
    flex: 1,
  },
  hang2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hang3: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logostyle: {
    height: 45,
    width: 93,
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
  InputText: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F8F8F8',
    paddingLeft: 5,
    paddingRight: 5,
  },
  inputzone: {
    flex: 1,
  },
  sectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    width: '70%',
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
  frames: {
    width: '91%',
    height: 76,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: 'white',
    marginTop: '-9.5%',
    elevation: 5,
    shadowColor: 'white',
    shadowOpacity: 0.5,
    flexDirection: 'row',
  },
  frame1: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  bar: {
    flexDirection: 'row',
  },
  texticon: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#425C59',
  },
  textdesc: {
    color: '#BCBCBC',
    fontSize: 9,
  },
  line: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticleLine: {
    height: '60%',
    width: 0.5,
    backgroundColor: '#425C59',
  },
  textsty: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbar: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  iconbar: {
    flex: 1,
  },
  bannerzone: {
    width: '100%',
    height: 180,
    backgroundColor: '#ffba07',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: '92%',
    resizeMode: 'contain',
    borderRadius: 5,
  },
  TextPRzone: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  Text1: {
    flex: 1,
  },
  Text2: {
    flex: 1,
    alignItems: 'flex-end',
  },
  noibat: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffba07',
  },
  tatca: {
    fontSize: 12,
    //fontWeight: 'bold',
    color: '#707070',
  },
  PRzone: {},
  NewsBanner: {
    flexDirection: 'row',
  },
  bannerA: {
    flex: 1,
    width: 150,
    height: 110,
    backgroundColor: 'black',
  },
  bannerB: {
    flex: 1,
    width: 150,
    height: 110,
    backgroundColor: 'black',
  },
  bannerazone: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    marginLeft: 5,
    marginTop: 5,
    height: 'auto',
    width: 100,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 5,
    //elevation: 4,
  },
  right: {
    flex: 1,
    marginLeft: 5,
    marginTop: 5,
    height: 'auto',
    width: 100,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 5,
    //elevation: 4,
  },
  anh: {},
  sizeImg: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  tieude: {
    padding: 7,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#425C59',
  },
  rowtitle:{
    flex: 1,
    flexDirection: 'row',
  },
});
