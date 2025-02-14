import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  SplashScreen,
  LoginScreen,
  HomeScreen,
  Register,
  Notification,
  Account
} from './App/pages'

const Stack = createNativeStackNavigator();

const  App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Account">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="Notification" component={Notification} options={{headerShown: false}}/>
        <Stack.Screen name="Account" component={Account} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;