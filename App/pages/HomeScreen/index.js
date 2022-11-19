import  * as React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { LogoUser,LogoNotif,Flip,IChandqr,scan,Vaksin,StaticCovid,Telemedis,Travel,Hospital,cari_hospital,Ehac,TesCovid } from '../../assets/image';


export default HomeScreen = () => {
    return(
        <SafeAreaView style={style.maincontent}>

            <View style={style.header}>
                <View  style={{flex:2, marginBottom:10}}>
                    <Image source={LogoUser} style={style.stylelogouser}/>
                </View>

                <View  style={{flex:1,flexDirection:"row",}}>
                    <Text style={{fontWeight:"bold"}}>Hi,</Text>
                </View>

                <View  style={{flex:10}}>
                    <Text style={style.headertext}>Muhammad Liwaul Hamdi</Text>
                </View>

                <View style={{flex:1}}>
                    <Image source={LogoNotif} />
                </View>
            </View>

        <View style={style.header2}>
            <View style={{flex:1, flexDirection:"row"}} >
                <Text style={{flex:1,fontSize:24, fontWeight:"bold", color:'#FBEEE6'}}>
                    Entering A Public space?
                </Text>
                <Image source={IChandqr} style={{resizeMode:"contain",width:90,height:90,marginRight:-18,marginTop:-14}}/>
            </View>

            <View style={{flex:1,}} >
                <Text style={{fontSize:14, color:'#FBEEE6',marginTop:-20}}>
                    Stay Alert To Stay safe
                </Text>
            </View>
        </View>
        <View style={style.header3}>
            <View style={{flexDirection:"row",flex:1.5}}>
                <Image source={Flip} style={{marginTop:10}} />
                <Text style={{fontSize:18, fontWeight:"bold",padding:10}}>
                    Check-in Preference
                </Text>
            </View>

            <View style={{flex:0.6,backgroundColor:'#D6EAF8',borderRadius:25,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Image source={scan} style={{width:25,height:25,resizeMode:"contain"}} />
                <Text style={{color:'#7FB3D5'}}>Check-In</Text>
            </View>
        </View>
        <View style={{flex:1.5,marginTop:20,marginBottom:-10,flexDirection:"row",justifyContent:'center'}}>
            <View style={{padding:10}} >
                <Image source={Vaksin} style={{borderRadius:10 , width:100,height:100}}/>
            </View>
            <View style={{padding:10}}>
                <Image source={TesCovid} style={{borderRadius:10 , width:100,height:100}}/>
            </View>
            <View style={{padding:10}}>
                <Image source={Ehac} style={{borderRadius:10 , width:100,height:100}}/>
            </View>
        </View>

        <View style={{flex:1.5,flexDirection:"row",justifyContent:'center', alignContent:"center"}}>
            <View style={{padding:10}} >
                <Image source={Travel} style={{padding:10,borderRadius:5 , width:100,height:100}}/>
            </View>
            <View style={{padding:10}}>
                <Image source={Telemedis} style={{padding:10,borderRadius:5 , width:100,height:100}}/>
            </View>
            <View style={{padding:10}}>
                <Image source={Hospital} style={{padding:10,borderRadius:5 , width:100,height:100}}/>
            </View>
        </View>

        <View style={{flex:1.5,flexDirection:"row",marginLeft:20}}>
            <View style={{padding:10}} >
                <Image source={StaticCovid} style={{padding:10,borderRadius:5 , width:100,height:100}}/>
            </View>
            <View style={{padding:10}}>
                <Image source={cari_hospital} style={{padding:10,borderRadius:5 , width:100,height:100}}/>
            </View>
            {/* <View style={{padding:10}}>
                <Image source={Vaksin} style={{padding:10,borderRadius:5 , width:100,height:100}}/>
            </View> */}
        </View>
        </SafeAreaView>
    );
} 

const style = StyleSheet.create({
    maincontent:{
        flex:2, 
        backgroundColor:'white',
        borderRadius:20,
        // margin:0,
        padding:10
    },
    header:{
        flexDirection:'row',
        textAlign:"center",
        padding:20,
        marginTop:30
    },
    headertext:{
        fontWeight:"bold",
        textDecorationLine:"underline",
        // marginBottom:30
    },
    header2:{
        flex:1,
        backgroundColor:'#239BD8',
        padding:20,
        marginBottom:-70,
        borderRadius:20,
        // borderBottomEndRadius:0,
        // borderBottomLeftRadius:0
        // marginBottom:
    },
    header3:{
        flex:0.5,
        marginBottom:-10,
        flexDirection:"row",
        backgroundColor:'#EBF5FB',
        padding:20,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        borderColor:'#239BD8'
    }
    
})