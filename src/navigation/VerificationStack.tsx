import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { theme } from '../../theme';
import Header from '../components/Header';
import HeaderLoginReg from '../components/HeaderLoginReg';
import HeaderProfileEmail from '../components/HeaderprofileEmail';
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';
import verificationPhoneScreen from '../screens/verificationPnoneScreen';
import verificationScreen from '../screens/verificationScreen';
import { useTypedSelector } from '../store/store';
import { VerificationStackStackParamList as VerificationStackParamList} from './types';
const VerificationStackSkeleton = createStackNavigator<VerificationStackParamList>();
const VerificationStack = () => {
  // const {token} = useTypedSelector(s => s.auth);
  // const nav = useNavigation();
  // useEffect(() => {
  //   nav.navigate('VerifySMS');
  // });
  const verification = useTypedSelector(state => state.auth.verification);
  return (
    <VerificationStackSkeleton.Navigator initialRouteName={verification=="email"?"verificationScreen":"verificationPhoneScreen"}>
      <VerificationStackSkeleton.Screen
        options={{
          headerTitle: () => <HeaderProfileEmail />,
          headerStyle: { backgroundColor: theme.colors.default.secondaryBackground,}
        }}
        name="verificationScreen"
        component={verificationScreen}
      />
      <VerificationStackSkeleton.Screen
        options={{
          headerTitle: () => <HeaderProfileEmail />,
          headerStyle: { backgroundColor: theme.colors.default.secondaryBackground,}
        }}
        name="verificationPhoneScreen"
        component={verificationPhoneScreen}
      />
      
    </VerificationStackSkeleton.Navigator>
  );
};

export default VerificationStack;
