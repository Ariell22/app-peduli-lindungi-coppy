import * as React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import{
    ICExpandMore,
    ICScanQr,
    ICBack
} from '../../assets/images'


export const PrimaryButton=(props)=>{
    return(
        <TouchableOpacity 
            onPress={props.onPress} 
            style={style.primaryBtnStyle}>
            <Text style={style.texBtn}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export const SecondaryButton=(props)=>{
    return(
        <TouchableOpacity 
            onPress={props.onPress} 
            style={style.secondaryBtnStyle}>
                <Image source={ICExpandMore}/>
                <Text style={style.texBtnSecondary}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export const InfoButton=(props)=>{
    return(
        <TouchableOpacity 
            onPress={props.onPress} 
            style={style.infoBtnStyle}>
                <Image source={ICScanQr}/>
                <Text style={style.texBtnInfo}>{props.title}</Text>
        </TouchableOpacity>
    )
}


export const BackButton=(props)=>{
    return(
        <TouchableOpacity 
            onPress={props.onPress}
            style={style.BackButton}>
                <Image source={props.source} style={style.BackButton}/>
        </TouchableOpacity>
    )
}


export const CusColorButton=(props)=>{
    return(
        <TouchableOpacity 
            onPress={props.onPress} 
            style={[style.primaryBtnStyle,props.style]}>
            <Text style={style.texBtn}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    primaryBtnStyle:{
        backgroundColor:'#006175',
        padding:10,
        border:1,
        borderRadius:10,
        marginLeft: 12,
        marginRight: 12,
    },
    texBtn:{
        color:'white',
        textAlign:'center'
    },
    secondaryBtnStyle:{
        padding:10,
        border:1,
        borderRadius:10,
        marginLeft: 12,
        marginRight: 12,
        flexDirection:'row'
    },
    texBtnSecondary:{
        textAlign:'center',
        fontWeight:'bold',
        marginLeft:8
    },
    infoBtnStyle:{
        padding:10,
        border:1,
        borderRadius:10,
        marginLeft: 12,
        marginRight: 12,
        flexDirection:'row',
        backgroundColor:'#EAF5F9',
    },
    texBtnInfo:{
        textAlign:'center',
        fontWeight:'bold',
        marginLeft:8,
        color:'#259AD5'
    },
    BackButton:{
       width:30,
       height:30,
       resizeMode:'contain'
    }
})