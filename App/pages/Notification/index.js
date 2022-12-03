import * as React from 'react';
import { 
  ICBack,
  ICEmpty
 } from '../../assets/images'
import {
  BackButton
} from '../../components'
import { 
  View,
  Image, 
  Text,
  StyleSheet,
  SafeAreaView
 } from 'react-native';

export default Notfication =({navigation})=> {
  
  const onClickBack=()=>{
    navigation.replace('HomeScreen')
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
                  Notification
              </Text>
          </View>
      </View>

      <View style={{alignItems:'center',marginTop:120}}>
      <Image source={ICEmpty} style={style.middleIC}/>
      
      <View style={{marginTop:13}}>
      <Text style={style.MidText}>Saat ini belum ada notifikasi</Text>
      <Text style={style.MidBotText}>Tetap terapkan perilaku Hidup Bersih dan Sehat,Jaga Jarak,dan #dirumah aja ya</Text>
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
  MidText:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'600',
    color:'#54B9ED'
  },
  MidBotText:{
    textAlign:'center',
    fontSize:12
  }
})