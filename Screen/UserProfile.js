import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const data = {
    userName: 'Long Nguyen',
    email: 'canlong102@gmail.com',
    userPoint: 100,

}
class UserProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.layer}></View>
                <View style={styles.header}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>Profile</Text>
                    <TouchableOpacity ><Text style={{ color: 'white', fontSize: 18 }}>Edit</Text></TouchableOpacity>
                </View>

                <View style={styles.userInf}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../Pics/home1.jpg')}
                            style={styles.avatar}
                        />
                        <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 25, }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.userName}</Text>
                            <Text style={{ color: '#DAD9E2', marginTop: 5 }}>{data.email}</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#DAD9E2', width: '100%', height: 1, marginVertical: 10, }}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: '600' }}>Point</Text>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: '#FF9500' }}>{data.userPoint}</Text>
                    </View>
                </View>
                <View style={styles.controlView}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: '600' }}>Edit profile</Text>
                        <SimpleLineIcons name={'pencil'} size={30} />
                    </TouchableOpacity>

                    <View style={{ backgroundColor: '#DAD9E2', width: '100%', height: 1, marginVertical: 10, }}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: '600' }}>Setting</Text>
                        <Feather name={'settings'} size={30} style={{}} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: '#DAD9E2', width: '100%', height: 1, marginVertical: 10, }}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: '600' }}>About this app</Text>
                        <MaterialCommunityIcons name={'information-outline'} size={30} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: '#DAD9E2', width: '100%', height: 1, marginVertical: 10, }}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: '600' }}>Sign out</Text>
                        <MaterialCommunityIcons name={'logout'} size={30} />
                    </TouchableOpacity>
                </View>

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
        backgroundColor: 'white',
        borderRadius: 5,
        shadowOffset: {
            width: 0, height: 0
        },
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.5,
    }



});