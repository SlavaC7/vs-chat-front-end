  import {navigationRef} from './navigation_ref';
import React, { useContext, useEffect } from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import verificationStack from './VerificationStack';
import {useTypedSelector} from '../store/store';
import {useDispatch} from 'react-redux';
import { logOutAction } from '../store/auth';
import { WSContext } from '../contexts';
import { clearFieldsAction, getRelatedUsersAction } from '../store/chat/action';
import HeaderProfileEmail from '../components/HeaderprofileEmail';
import { theme } from '../../theme';
import verificationScreen from '../screens/verificationScreen';
import VerificationStack from './VerificationStack';
const Navigation = () => {
  // const dispatch = useDispatch();
  // dispatch(logOut.request({}));
  const {token} = useTypedSelector(state => state.auth);
  const verification = useTypedSelector(state => state.auth.verification);
  // dispatch(refreshTokenAction.request({}));
  // useEffect(() => {
  //   dispatch(token ? middle.request({isEnter: true}) : logOut.request({}));
  // }, []);
  const dispatch = useDispatch();
  //  dispatch(logOutAction.request({}));
  useEffect(() => {
  dispatch(getRelatedUsersAction.request({}));
  
  return () => {
  
  }
}, [token])

useEffect(() => {
  console.log(verification+" aplicatoin")

}, [verification])

  return (
      <NavigationContainer ref={navigationRef}>
        {token ? (
          verification!=null?(
          <VerificationStack/>
          ):(
            <HomeStack/>
          )) : (
          <AuthStack />
        )}
      </NavigationContainer>
  );
};

export default Navigation;
