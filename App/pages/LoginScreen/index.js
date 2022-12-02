import * as React from 'react';
import { 
  LogoTop,
  LogoBumn,
  LogoKemkes,
  LogoKominfo,
  LogoKpc
 } from '../../assets/images'
import {
  PrimaryButton,
  CusColorButton
} from '../../components'
import { 
  View,
  Image, 
  Text,
  TextInput,
  StyleSheet
 } from 'react-native';

export default LoginScreen =({navigation})=> {
  const [email, onSetEmail] = React.useState(null);
  const [password, onSetPassword] = React.useState(null);
  
  const onSubmitLogin=()=>{
    navigation.replace('HomeScreen')
  }

  const onClickRegister=()=>{
    navigation.replace('Register')
  }


    return (
      <View style={style.mainContainer}>
        <View style={style.container}>
          <View style={style.logoContainer}>
            <Image source={LogoTop}  style={style.logoTopStyle} />
          </View>
          <TextInput
            placeholder='Masukan email'
            onChangeText={onSetEmail}
            style={style.inputSytle}
            value={email}
          />

          <TextInput
            placeholder='Masukan password'
            onChangeText={onSetPassword}
            style={style.inputSytle}
            secureTextEntry
            value={password}
          />
          <View style={{marginTop:10}}>
          <PrimaryButton
            title="Login"
            onPress={onSubmitLogin}/>

          <CusColorButton
            title="Register"
            onPress={onClickRegister}
            style={{backgroundColor:'#730075',marginTop:10}}
            />
          </View>
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

const style = StyleSheet.create({
  container:{
    flex: 1, 
    padding:25,
    justifyContent: 'center',
    backgroundColor:'white'
  },  
  logoTopStyle:{
    width:150,
    height:150,
    resizeMode:'contain'

  },
  logoContainer:{
    alignItems:'center'
  },  
  inputSytle:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor:'#006175',
      borderRadius:5,
      padding: 10,
  },
  footherText:{
    fontWeight:'bold',
    marginBottom:-30
  },
  footherLogo :{
    alignItems:'center',
    flexDirection:'row'
  },
  logoImage:{
    width:75, 
    height:75, 
    resizeMode:'contain',
    marginLeft:7,
    marginTop:25
  },
  mainContainer:{
    flex:1, 
    backgroundColor:'white',
    padding:15
  }
})