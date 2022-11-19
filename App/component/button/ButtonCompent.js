import * as React from "react";
import { View, Text, StyleSheet,TouchableOpacity, PermissionsAndroid } from "react-native";

const onPress=()=>{
    console.log('tes klik button')
}

export const ButtonLogin =(props)=>{
    return(
        <TouchableOpacity
            onPress={props.onPress}
            style={style.PrimaryBtnstyle}>
            <Text style={style.textbtn}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const style=StyleSheet.create({
    PrimaryBtnstyle:{
        backgroundColor:'#006175',
        padding:10,
        border:1,
        borderRadius:10,
        marginLeft:12,
        marginRight:12
    },
    textbtn:{
        color:'white',
        textAlign:'center',
        alignItems:'center'
    }
})