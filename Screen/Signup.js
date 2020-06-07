import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet,
    ImageBackground

} from 'react-native';
class Signup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../Pics/login2.jpg')} style={styles.background}>
                    <View style={styles.topView}>
                        <Text style={styles.welcome}>Sign up</Text>


                        <TextInput style={styles.firstName} placeholderTextColor='lightgray' placeholder='First name' keyboardType='email-address' />
                        <TextInput style={styles.lastName} placeholderTextColor='lightgray' placeholder='Last name' />
                        <TextInput style={styles.accInf} placeholderTextColor='lightgray' placeholder='Email' keyboardType='email-address' />
                        <TextInput style={styles.passW} placeholderTextColor='lightgray' secureTextEntry={true} placeholder='Password' />
                        <TextInput style={styles.confirmPassW} placeholderTextColor='lightgray' secureTextEntry={true} placeholder='Confirm password' />
                    </View>
                    <View style={styles.bottomView}>
                        <TouchableOpacity style={styles.signupBtn} activeOpacity={0.7} >
                            <Text style={styles.btnText}>Sign up</Text>

                        </TouchableOpacity>
                    </View>
                </ImageBackground>

            </View>
        )
    }
}
export default Signup;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'rgba(255, 249, 192, 0.7)',
        backgroundColor: 'black',
    },
    background: {
        flex: 1,
        //opacity: 0.7,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    topView: {
        flex: 3,
        paddingBottom: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 80,
        // borderWidth: 1,
        // borderColor: 'white',
    },
    bottomView: {
        flex: 2,
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'white',
    },
    welcome: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'
    },
    loginTo: {
        color: 'white',
        fontWeight: '500',
        fontSize: 20,

    },

    firstName: {
        position: 'absolute',
        bottom: 340,
        left: 30,
        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#cfd1d0',
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
    },
    lastName: {
        position: 'absolute',
        bottom: 260,
        left: 30,
        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#cfd1d0',
        color: 'white',
        fontWeight: '300',
        fontSize: 18,
    },
    accInf: {
        position: 'absolute',
        bottom: 180,
        left: 30,
        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#cfd1d0',
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
    },
    passW: {
        marginTop: 10,
        position: 'absolute',
        bottom: 100,

        left: 30,
        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#cfd1d0',
        color: 'white',
        fontWeight: '400',
        fontSize: 18,

    },
    confirmPassW: {
        marginTop: 10,
        position: 'absolute',
        bottom: 20,
        left: 30,
        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#cfd1d0',
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
    },
    signupBtn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: '#eb4a2a',
        //opacity: 1,
    },
    loginBtn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: '#3458eb',


    },
    btnText: {
        fontWeight: '600',
        fontSize: 19,
        color: 'white'
    }
});