import * as React from 'react';
import {
  LogoText, 
  LogoBumn,
  LogoKemkes,
  LogoKominfo,
  LogoKpc
} from '../../assets/images';
import { 
  StyleSheet, 
  View, 
  Text,
  Image,
  Dimensions
 } from 'react-native';

export default SplashScreen =({navigation})=> {

  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen')
    }, 3000)
  }, [navigation]);

    return (
      <View style={style.container}>
        <View style={style.logoContainer}>
          <Image source={LogoText} style={style.logoMain}/>
        </View>
        
        <Text style={style.footherText}>Bekerjasama dengan</Text>
        <View style={style.footherLogo}>
          <Image source={LogoKpc} style={style.logoImage}/>
          <Image source={LogoKominfo} style={{width:75, height:45,resizeMode:'contain',marginTop:25}}/>
          <Image source={LogoKemkes} style={style.logoImage}/>
          <Image source={LogoBumn} style={style.logoImage}/>
        </View>
      </View>
    );
}

const Height = Dimensions.get("screen").height;
const Weidth = Dimensions.get("screen").width;

const style = StyleSheet.create({
  container:{
    padding:20,
    flex:1
  },
  logoContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoMain:{
    width:400,
    height:200,
    resizeMode:'center'
  },  
  logoImage:{
    width:75, 
    height:75, 
    resizeMode:'contain',
    marginLeft:7,
    marginTop:25,
  },
  footherText:{
    fontWeight:'bold',
    marginBottom:-30
  },
  footherLogo :{
    alignItems:'center',
    flexDirection:'row'
  }
})