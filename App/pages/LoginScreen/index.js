import * as React from 'react';
import { LogoTop } from '../../assets/image';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { ButtonLogin } from '../../component';

export default LoginScreen = () => {
    const [email, onSetEmail] = React.useState(null);
    const [password, onSetPassword] = React.useState(null);

    return(
        <View style={style.Container}>
            <View style={style.logocontainer}>
                <Image source={LogoTop} style={style.LogoTopStyle} />
            </View>

            {/* Form Email */}
            <TextInput
                style={style.InputStyle}
                placeholder='Masukan E-mail'
                onChangeText={onSetEmail}
                value={email}
                // keyboardType='email-address'
            />

            <TextInput
                style={style.InputStyle}
                placeholder='Masukan Password'
                onChangeText={onSetPassword}
                secureTextEntry
                value={password}
                // keyboardType='invisible-password'
            />
            <ButtonLogin/>
        </View>
    );
}

const style = StyleSheet.create({
    Container:{
        flex:1,
        padding:25,
        // alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#D1F2EB'
    },
    LogoTopStyle:{
        width:180,
        height:180,
        resizeMode: 'contain'
    },
    InputStyle:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor:'#006175',
        borderRadius:5,
        padding: 10,
    },
    logocontainer:{
        alignItems:'center',
    }
})