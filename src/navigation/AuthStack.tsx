import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Header from '../components/Header';
import HeaderLoginReg from '../components/HeaderLoginReg';
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';
import {AuthStackParamList} from './types';
const AuthStackSkeleton = createStackNavigator<AuthStackParamList>();
const AuthStack = () => {
  // const {token} = useTypedSelector(s => s.auth);
  // const nav = useNavigation();
  // useEffect(() => {
  //   nav.navigate('VerifySMS');
  // });
  return (
    <AuthStackSkeleton.Navigator initialRouteName="Auth">
      <AuthStackSkeleton.Screen
        name="Auth"
        component={Login}
        options={{
          header: () => <></>,
        }}
      />
      <AuthStackSkeleton.Screen
        name="Reg"
        component={Register}
        options={{
          header: () => <></>,
        }}
      />
      
    </AuthStackSkeleton.Navigator>
  );
};

export default AuthStack;
