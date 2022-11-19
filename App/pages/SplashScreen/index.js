import * as React from 'react';
import { LogoBumn,LogoKemenkes, LogoKominfo, LogoText, LogoKpcpen } from '../../assets/image';
import { StyleSheet, View, Text, Image } from 'react-native';

export default SplashScreen = ({navigation}) => {

    React.useEffect(() => {
        setTimeout(() => {
            navigation.replace('LoginScreen')
        }, 3000)
    },[navigation]);
    
    return(
        <View style={style.Container}>
            <View style={style.LogoContainer}>
                <Image source={LogoText} style={style.LogoMain}/>
            </View>

            <Text style={style.FootherText}>Bekerjasama Dengan</Text>
            <View style={style.FootherLogo}>
                <Image source={LogoBumn} style={style.LogoImage}/>
                <Image source={LogoKemenkes} style={style.LogoImage}/>
                <Image source={LogoKominfo} style={style.LogoImage}/>
                <Image source={LogoKpcpen} style={style.LogoImage}/>
            </View>
        </View>
    );
}

// style
const style = StyleSheet.create({
    Container:{
        padding:20,
        flex:1
    },
    LogoContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    LogoMain:{
        width:300,
        height:70,
        resizeMode:'stretch'
    },
    FootherText:{
        fontWeight:'bold',
        marginBottom:-30,
        resizeMode:'center'
    },
    FootherLogo:{
        alignItems:'center',
        flexDirection:'row'
    },
    LogoImage:{
        width:80,
        height:250,
        resizeMode:'contain',
        marginLeft:10
    }
})