import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ImageBackground
} from 'react-native';

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../Pics/login2.jpg')} style={styles.background}>
                    <View style={styles.topView}>
                        <Text style={styles.welcome}>Welcome</Text>
                        <Text style={styles.loginTo}>Sign in to continue</Text>
                        <TextInput style={styles.accInf} placeholderTextColor='lightgray' placeholder='Email or phone number' keyboardType='email-address' />
                        <TextInput style={styles.passW} placeholderTextColor='lightgray' secureTextEntry={true} placeholder='Password' />
                    </View>
                    <View style={styles.bottomView}>
                        <TouchableOpacity style={styles.loginBtn} activeOpacity={0.7} >
                            <Text style={styles.btnText}>Sign in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.signupBtn} activeOpacity={0.7} >
                            <Text style={styles.btnText}>Sign up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Text style={{ marginTop: 20, fontSize: 15, fontWeight: '400', color: 'white' }}>Forgot your password?</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

            </View>
        )
    }
};
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
        flex: 1,
        paddingBottom: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 80,
        // borderWidth: 1,
        // borderColor: 'white',
    },
    bottomView: {
        flex: 1,
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
    accInf: {
        position: 'absolute',
        bottom: 80,
        left: 30,
        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'white',
        color: 'white',
        fontWeight: '600',
    },
    passW: {
        marginTop: 10,
        position: 'absolute',
        bottom: 40,
        left: 30,
        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'white',
        color: 'white',
        fontWeight: '600',

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
export default Login;
