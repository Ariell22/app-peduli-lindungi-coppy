import * as React from 'react';
import { 
  ICBack,
  ICProfile,
 } from '../../assets/images'
import {
  BackButton,
  PrimaryButton,
  TextButton
} from '../../components'
import { 
  View,
  Image, 
  Text,
  StyleSheet,
  SafeAreaView
 } from 'react-native';

export default Acocount =({navigation})=> {
  
  const onClickBack=()=>{
    navigation.replace('HomeScreen')
  }
  const onClickLogout=()=>{
    navigation.replace('LoginScreen')
  }

    return (
      <SafeAreaView style={style.mainContainer}>
      <View style={style.container}>
          <View style={{flex:1}}>
            <BackButton 
            onPress={onClickBack}
            source={ICBack}
            />
          </View>
          <View style={{flex:5,marginTop:5}}>
              <Text style={{fontWeight:'bold'}}>
                  Account
              </Text>
          </View>
      </View>

        <View style={style.HeaderProfile}>
            <Image source={ICProfile} style={{resizeMode:'contain',width:40,height:40,marginTop:6}}/>
            <View style={{marginLeft:15,marginTop:5}}>
              <Text style={style.TextHeader}>Ariell Apriliano Dentto</Text>
              <Text style={style.TextSubHeader}>ariell.pvt@gmail.com</Text>
          </View>
        </View>
          <View style={style.HeaderBorder}>
          </View>


      <View>
         <Text style={style.TextTitle}>Vaccination</Text>
          <View style={{marginTop:5,padding:10}}>
            <TextButton title="Vaccine History And Ticket"/>
            <TextButton title="Vaccine Certificate"/>
          </View>
         <Text style={style.TextTitle}>Other Information</Text>
        <View style={{marginTop:5,padding:10}}>
            <TextButton title="Group Member Profile"/>
            <TextButton title="About Peduli Lindungi"/>
            <TextButton title="FAQ"/>
            <TextButton title="Rate Us"/>
          </View>

            <View style={{marginTop:20}}>
              <PrimaryButton
              title="Logout"
              onPress={onClickLogout}/>
            </View>

      </View>


      </SafeAreaView>
        
    );
}

const style = StyleSheet.create({
  container:{
    marginTop:50,
    marginLeft:15,
    flexDirection:'row'
  },  
  mainContainer:{
    flex:1, 
    backgroundColor:'white',
    padding:15
  },
  middleIC:{
    resizeMode:'contain',
    height:250,
    width:250,
  },
  TextTitle:{
    fontWeight:'500',
    marginLeft:17,
    marginTop:20
  },
  HeaderProfile:{
    flexDirection:'row',
    marginTop:20,
    marginLeft:10,

  },
  TextHeader:{
    fontWeight:'bold',
    fontSize:14
  },
  TextSubHeader:{
    color:'#9E9E9E',
    
  },
  HeaderBorder:{
   
    borderWidth:1,
    borderStartWidth:0,
    borderEndWidth:0,
    borderTopWidth:0,
    borderColor:'#D6D6D6',
    marginTop:10

  },
})