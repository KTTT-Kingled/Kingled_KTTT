import * as React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Circle2 from '../activity/ProgressLine/Circle2';
import HeaderComponent from '../headerComponent.js';
import Circle3Gr from './ProgressLine/Circle3Gr';
import Circle4Gr from './ProgressLine/Circle4Gr';
import CircleBackground from './ProgressLine/CircleBackground.js';
import Line from './ProgressLine/Line.js';
import LineGray from './ProgressLine/LineGray';
import SectionListAddress from './SectionList/SectionListAddress.js';

const AddressCart = ({ navigation }) => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    return (
        <ScrollView>
            <HeaderComponent/>
            <View style={styles.titleTab}>
                <Icon
                    name="create-outline"
                    color="#f0ad00"
                    size={22}
                    style={{left: 0}}
                />
                    <Text style={{color: '#363636', fontSize: 16, marginLeft: 10}}>
                    Thông tin nhận hàng
                    </Text>
            </View>
            <View style={styles.progress}>
                <View style={styles.colProgress}>
                    <CircleBackground />
                    <Text style={{color:'#4cb71a', fontSize: 12,textAlign:'center',}}>Giỏ hàng</Text>
                </View>
                <Line />
                <View style={styles.colProgress}>
                    <Circle2 />
                    <Text style={{color:'#4cb71a', fontSize: 12,textAlign:'center',}}>Địa chỉ</Text>
                </View>
                <LineGray />
                <View style={styles.colProgress}>
                    <Circle3Gr />
                    <Text style={{color:'#ddd', textAlign:'center', fontSize: 12,}}>Thanh toán</Text>
                </View>
                <LineGray />
                <View style={styles.colProgress}>
                    <Circle4Gr />
                    <Text style={{color:'#ddd', fontSize: 12,textAlign:'center',}}>Xác nhận</Text>
                </View>
            </View>
            <View style={styles.container}>
            <View style={styles.containerList}>

                <View style={{width:"100%",marginBottom:12, padding: 18}}>
                    <View style={styles.nameAndInput}>
                        <View style={styles.nameView}>
                            <Text style={styles.nameText}>Họ tên</Text>
                        </View>
                        <TextInput
                            style={styles.inputInfor}
                            placeholder="Điền họ và tên..."
                            placeholderTextColor="#dedede"
                            // keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.nameAndInput}>
                        <View style={styles.nameView}>
                            <Text style={styles.nameText}>Email</Text>
                        </View>
                        <TextInput
                            style={styles.inputInfor}
                            placeholder="Điền email..."
                            placeholderTextColor="#dedede"
                            // keyboardType="numeric"
                        />
                    </View>
                        <View style={styles.nameAndInput}>
                            <View style={styles.nameView}>
                                <Text style={styles.nameText}>Điện thoại</Text>
                            </View>
                            <TextInput
                                style={styles.inputInfor}
                                placeholder="Điền số điện thoại..."
                                placeholderTextColor="#dedede"
                                keyboardType="numeric"
                            />
                        </View>
                    <View style={styles.nameAndInput}>
                        <View style={styles.nameView}>
                            <Text style={styles.nameText}>Ngày nhận</Text>
                        </View>
                        <TextInput
                            style={styles.inputInfor}
                            placeholder="Ghi rõ ngày nhận hàng..."
                            placeholderTextColor="#dedede"
                            // keyboardType="numeric"
                            />
                    </View>
                    <View style={styles.nameAndInput}>
                        <View style={styles.nameView}>
                            <Text style={styles.nameText}>Quận huyện</Text>
                        </View>
                        <TextInput
                            style={styles.inputInfor}
                            placeholder="Quận huyện nhận hàng..."
                            placeholderTextColor="#dedede"
                            // keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.nameAndInput}>
                        <View style={styles.nameView}>
                            <Text style={styles.nameText}>Địa chỉ</Text>
                        </View>
                        <TextInput
                            style={styles.inputInfor}
                            placeholder="Địa chỉ nhận hàng..."
                            placeholderTextColor="#dedede"
                            // keyboardType="numeric"
                        />
                    </View>
                        <View style={{flexDirection:"row", justifyContent: 'center', alignItems:'center'}}>
                            <View style={{flex:1}}>
                                <Text style={styles.nameText}>Ghi chú</Text>
                            </View>
                            <TextInput
                                multiline
                                numberOfLines={8}
                                onChangeText={onChangeNumber}
                                value={number}
                                style={styles.inputInfor}
                                placeholder="Ghi chú..."
                                placeholderTextColor="#dedede"
                                // keyboardType="numeric"
                                />
                        </View>
                </View>

                <View style={styles.myCart}>
                    <Icon
                        name="basket-outline"
                        color="#f0ad00"
                        size={22}
                        style={{left: 0}}
                    />
                    <Text style={{color: '#363636', fontSize: 16, marginLeft: 10}}>
                    Giỏ hàng của tôi
                    </Text>
                </View>
                <SectionListAddress/>
            </View>
            <View style={styles.payment}>
                <View style={styles.total}>
                    <View style={styles.rowTotalText}>
                    <Text style={styles.totalText1}>Tổng tiền</Text>
                    <Text style={styles.totalText2}>4.078.000 VNĐ</Text>
                    </View>
                </View>
                <View style={styles.paymentBTN}>
                    <View onStartShouldSetResponder={() => (
                    'OnPress', navigation.navigate('AbateCart')
                    )}><Text style={styles.paymentText}>Tiến hành thanh toán</Text></View>
                </View>
            </View>
        </View>
        </ScrollView>
    
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor:"#fff",
        paddingBottom:50,
        paddingTop: 10,
        //width: "100%",
    },
    progress:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        //width: 65,
        backgroundColor: 'white',
        padding: 30,
        marginBottom: 4,
        borderRadius: 4,
    },
    containerList:{
        width:"100%",
        //padding:16,
    },
    totalAmountFlex:{
        flex:1,
    },

    nameAndInput:{
        width:"100%",
        justifyContent:"center",
        flexDirection:"row",
        marginBottom: 12
    },
    nameView:{
        color:"#313131",
        flex:1,
        justifyContent:"center"
    },
    nameText:{
        color:"#417a76",
        fontSize:14,
        marginTop: -4,
        fontWeight: 'bold',
    },
    inputInfor:{
        //borderColor:"black",
        borderBottomWidth: 0.2,
        flex:2.3,
        height:40,
        borderRadius: 4,
        //paddingLeft:10,
        color:"#313131",
        fontSize: 15,

    },
    colProgress:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //marginRight: -10,
        //marginLeft: -10,
    },
    titleTab:{
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: 0.2,
        borderBottomColor: '#b0b0b0',
        borderRadius: 4,
        marginBottom: 3,
        flex: 1,
        flexDirection: 'row',
    },
    payment:{
        flex: 1,
        flexDirection: 'row',
        height: 70,
        marginBottom: 14,
    },
    paymentBTN:{
        flex: 4,
        justifyContent: 'flex-end',
        backgroundColor: '#417a76',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.5,
        borderColor: '#417a76',
    },
    paymentText:{
        // alignItems: 'center',
        // justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    total:{
        flex: 6,
        backgroundColor: '#fff',
        borderTopWidth: 0.5,
        borderColor: '#417a76',
        padding: 10,
        justifyContent: 'center',
    },
    totalText1:{
        fontSize: 12,
        color: '#363636',
        marginRight: 5,
    },
    totalText2:{
        fontSize: 17,
        color: '#e7a703',
        fontWeight: 'bold',
    },
    rowTotalText:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    },
    myCart:{
        color:"#FF792E",
        marginBottom:12,
        fontSize:18,
        //backgroundColor: 'black',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 7,
        borderTopColor: "#f3f3f3",
        borderBottomWidth: 3,
        borderBottomColor: "#f3f3f3",
        borderRadius: 4,
    },
});
export default AddressCart;