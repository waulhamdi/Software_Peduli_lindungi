import * as React from 'react';
import { LogoTop,LogoBumn,LogoKemenkes, LogoKominfo, LogoKpcpen } from '../../assets/image';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { ButtonLogin } from '../../component';



export default LoginScreen = ({navigation}) => {
    const [email, onSetEmail] = React.useState(null);
    const [password, onSetPassword] = React.useState(null);

    const onSubmitLogin =()=>{
        navigation.replace('HomeScreen')
        console.log('for submit')
    }

    return(
        <View style={style.maincontainer}>
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
                <ButtonLogin title="Login" onPress={onSubmitLogin}/>
            </View>
            <Text style={style.FootherText}>Bekerjasama Dengan</Text>
            <View style={style.FootherLogo}>
                <Image source={LogoBumn} style={style.LogoImage}/>
                <Image source={LogoKemenkes} style={style.LogoImage}/>
                <Image source={LogoKominfo} style={{width:100, height:65, resizeMode:'contain'}}/>
                <Image source={LogoKpcpen} style={style.LogoImage}/>
            </View>
        </View>
    );
}

// ***** CSS *****
const style = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:"#D1F2EB"
    },
    Container:{
        flex:1,
        padding:25,
        // alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#D1F2EB'
    },
    logocontainer:{
        alignItems:'center',
    },
    LogoTopStyle:{
        width:180,
        height:180,
        resizeMode: 'contain'
    },
    InputStyle:{
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor:'#006175',
        borderRadius:5,
        padding: 10,
    },
    FootherText:{
        fontWeight:'bold',
        marginBottom:-80,
        textAlign:'left',
        marginLeft:15 
    },
    FootherLogo:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    LogoImage:{
        width:80,
        height:250,
        resizeMode:'contain',
        // marginLeft:10
        // margin:'auto'
        // alignItems:'center'
    }
})