import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text,   TouchableOpacity,   View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Container } from '../../components/Safe';
import { useTypedSelector } from '../../store/store';
import { styles } from './styles';
import HeaderProfile from './header';

import { strings } from '../../../string';
import ProfileOtherItem from '../../components/ProfileOtherItem';
import { getOtherProfileAction } from '../../store/profile';



const ProfileOtherScreens  = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const Route = useRoute();

  // @ts-ignore
  const {user} = Route.params;

  useEffect(() => { dispatch(getOtherProfileAction.request({id: user})) }, []);

  const otherProfile = useTypedSelector(s=>s.profile.otherProfile);

  const onGoToChat = () => {

    navigation.reset({routes: [{name: 'chatList'},{name: 'chat', params: {_id: user, title: otherProfile?.userName, image: otherProfile?.image}}],});
  }

  return (
    <Container scrollable  containerStyle={styles.styleContainer}>
      

      <View style={styles.publicInfo}>
      <HeaderProfile image={otherProfile?.image} constName={otherProfile?.userName!!} online={otherProfile?.online!!} />
        <View style={styles.publicInfoV}>
          <ProfileOtherItem 
          titleText={strings.screens.otherProfile.profileItemText.about}
          textI={otherProfile?.about} 
           />

          <ProfileOtherItem 
          titleText={strings.screens.otherProfile.profileItemText.name}
          textI={otherProfile?.userName} 
           />

          {otherProfile?.email != "none" &&
            <ProfileOtherItem 
            titleText={strings.screens.otherProfile.profileItemText.email}
            textI={otherProfile?.email} 
            />
            }

          {otherProfile?.phone != "none" &&
            <ProfileOtherItem 
          titleText={strings.screens.otherProfile.profileItemText.phone}
          textI={otherProfile?.phone} 
           />
           }

          <TouchableOpacity style={styles.button} onPress={onGoToChat}>
              <Text style={styles.buttonText}>{strings.screens.otherProfile.profileItemText.send}</Text>
          </TouchableOpacity> 

          {/* <ChangeRBSheet 
          refRBS={refRBSProfileItemChangeAbout}
          onChange={onChangeText}
          onPressButtonSave={onPressChangeAbout}
          onPressButtonClose={onCloseRBSProfileItemChangeAbout}
          text={text}
          placeholderInput={strings.screens.profile.RBS.ChangeRBSheet.aboutPlaceholderInput}
          textButtonSave={strings.screens.profile.RBS.ChangeRBSheet.textButtonSave}
          textButtonClose={strings.screens.profile.RBS.ChangeRBSheet.textButtonClose}
          /> */}
        </View>
      </View>
    </Container>
  );
};
export default ProfileOtherScreens;

