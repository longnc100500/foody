import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const data = {


}

class UserProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.layer}></View>
                <View style={styles.header}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>Order</Text>
                </View>




                <View style={styles.userInf}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: '600' }}>Subtotal</Text>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: '#FF9500' }}>{data.userPoint}$</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: '600' }}>Tax & fees</Text>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: '#FF9500' }}>{data.userPoint}$</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: '600' }}>Delivery</Text>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: '#FF9500' }}>Free</Text>
                        </View>
                        <Text style={{ color: '#DAD9E2' }}></Text>
                    </View>
                    <View style={{ backgroundColor: '#DAD9E2', width: '100%', height: 1, marginBottom: 10, }}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: '600' }}>Total</Text>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: '#FF9500' }}>{data.userPoint}$</Text>
                    </View>
                </View>
                <View style={styles.controlView}>
                    <ScrollView >
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 20, fontWeight: '600' }}>Point</Text>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: '#FF9500' }}>{data.userPoint}</Text>
                        </TouchableOpacity>

                        <View style={{ backgroundColor: '#DAD9E2', width: '100%', height: 1, marginVertical: 10, }}></View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 20, fontWeight: '600' }}>Point</Text>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: '#FF9500' }}>{data.userPoint}</Text>
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#DAD9E2', width: '100%', height: 1, marginVertical: 10, }}></View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 20, fontWeight: '600' }}>Point</Text>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: '#FF9500' }}>{data.userPoint}</Text>
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#DAD9E2', width: '100%', height: 1, marginVertical: 10, }}></View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 20, fontWeight: '600' }}>Point</Text>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: '#FF9500' }}>{data.userPoint}</Text>
                        </TouchableOpacity>
                    </ScrollView>

                </View>
                <TouchableOpacity style={styles.checkoutBtn}>
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>Checkout</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
export default UserProfile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    layer: {
        backgroundColor: '#f52d56',
        width: screenWidth,
        height: 150,
        position: 'absolute',
        top: 0,
        //bottom: screenHeight * 0.75,
    },
    header: {
        marginTop: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    userInf: {
        flexDirection: 'column',
        marginTop: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowOffset: {
            width: 0, height: 0
        },
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.5,

    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        resizeMode: 'center',
    },
    controlView: {
        flexDirection: 'column',

        marginTop: 20,
        padding: 10,
        height: screenHeight * 0.4,
        //borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowOffset: {
            width: 0, height: 0
        },
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },
    checkoutBtn: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 60,
        backgroundColor: '#f52d56',
        borderRadius: 5,
        shadowOffset: {
            width: 0, height: 0
        },
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.5,
        //borderWidth: 2,

    }



});