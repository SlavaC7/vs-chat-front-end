import React from 'react';
import {HomeStackParamList} from './types';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import ChatList from "../screens/ChatListScreen";
import Chat from "../screens/ChatScreen";
import SeachScrean from '../screens/SeachScrean';


import {navigationRef} from './navigation_ref';
import  HeaderChat from '../components/HeaderChat';
import HeaderChatList from '../components/HeaderChatList';
import HeaderSeachScrean from '../components/HeaderSeachScrean';
import MyProfileScrean from '../screens/ProfileScreen';
import MyProfileEmail from '../screens/ProfileScreen/ProfileEmail';
import HeaderProfileEmail from '../components/HeaderprofileEmail';

import { theme } from "../../theme"
import MyProfilePhone from '../screens/ProfileScreen/ProfilePhone';
import HeaderProfilePhone from '../components/HeaderprofilePhone';
import ProfileOtherScreens from '../screens/ProfileGuestScreen';

const HomeStackSkeleton = createStackNavigator<HomeStackParamList>();
const HomeStack: React.FC<{}> = () => {
  // const dispatch = useDispatch();

  // let isHome = useTypedSelector(state => state.home.isDefaultHome);

  const close = () => {
    navigationRef.current?.goBack();
  };

  return (
    <HomeStackSkeleton.Navigator>
      <HomeStackSkeleton.Screen
      options={{
        headerTitle: () => <HeaderChatList />,
        headerStyle: { backgroundColor: theme.colors.default.secondaryBackground,}
      }}
        name="chatList"
        component={ChatList}
      />
      <HomeStackSkeleton.Screen
        options={{
          headerTitle: () => <HeaderChat />,
          headerStyle: { backgroundColor: theme.colors.default.secondaryBackground,}
        }}
        name="chat"
        component={Chat}
      />
      <HomeStackSkeleton.Screen
        options={{
          header: () => <></>,
        }}
        name="MyProfileScrean"
        component={MyProfileScrean}
      />
      <HomeStackSkeleton.Screen
        options={{
          headerTitle: () => <HeaderSeachScrean />,
          headerStyle: { backgroundColor: theme.colors.default.secondaryBackground,}
        }}
        name="seachScrean"
        component={SeachScrean}
      />
      <HomeStackSkeleton.Screen
        options={{
          headerTitle: () => <HeaderProfileEmail />,
          headerStyle: { backgroundColor: theme.colors.default.secondaryBackground,}
        }}
        name="MyProfileEmail"
        component={MyProfileEmail}
      />
      <HomeStackSkeleton.Screen
        options={{
          headerTitle: () => <HeaderProfilePhone />,
          headerStyle: { backgroundColor: theme.colors.default.secondaryBackground,}
        }}
        name="MyProfilePhone"
        component={MyProfilePhone}
      />
      <HomeStackSkeleton.Screen
        options={{
          header: () => <></>,
        }}
        name="ProfileOtherScreens"
        component={ProfileOtherScreens}
      />
    </HomeStackSkeleton.Navigator>
  );
};

export default HomeStack;