import * as React from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import{
    ICQr
} from '../assets/images'

import {
    SecondaryButton,
    InfoButton
} from './button/ButtonComponet'


export const MainCard=(props)=>{
    return(
        <View style={style.container}>
            <View style={style.innerContainer}>
                <View style={style.leftCard}>
                    <Text style={style.TextHeader}>Entering a public space?</Text>
                    <Text style={style.TextBody}>stay alert to stay safe</Text>
                </View>
                <View style={style.rightCard}>
                    <Image source={ICQr} style={style.imageQr}/>
                </View>
                
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:2, padding:15}}>
                    <SecondaryButton title="Check-In Preference"/>
                </View>
                <View style={{flex:1, padding:15}}>
                    <InfoButton title="Check-In"/>
                </View>
            </View>
        </View>
    )
}

export const BoxCard=(props)=>{
    return (
        <View style={{width:85, alignContent:'center'}}>
            <TouchableOpacity style={[style.imgButton, props.style]}>
                <Image 
                    source={props.source} 
                    style={style.imgBtnStyle}
                />
            </TouchableOpacity>
            <Text style={{textAlign:'center'}}>{props.title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#D9D9D9',
        minHeight:170,
        marginTop:15,
        borderRadius:15
    },
    innerContainer:{
        backgroundColor:'#239BD8',
        minHeight:100,
        borderTopRightRadius:15,
        borderTopStartRadius:15,
        flexDirection:'row'
    },
    leftCard:{
        flex:2,
        paddingLeft:25,
        paddingTop:15
    },
    rightCard:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    imageQr:{
        width:80,
        height:80,
        aspectRatio:1
    },
    TextHeader:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
    TextBody:{
        color:'white',
        fontSize:14,
    },
    imgButton:{
        width:60,
        height:60,
        //borderWidth:1,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'

    },
    imgBtnStyle:{
        width:45,
        height:45,
        aspectRatio:1,
        borderRadius:15,
    }
})