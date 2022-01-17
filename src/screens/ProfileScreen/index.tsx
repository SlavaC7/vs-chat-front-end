import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Text,  TouchableOpacity,  View } from 'react-native';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Container } from '../../components/Safe';
import { useTypedSelector } from '../../store/store';
import { CustomButton } from '../../components/Button';
import { logOutAction } from '../../store/auth';
import { getMyProfileAction, sendAboutAction, sendColorAction, sendImageAction, sendNameAction } from '../../store/profile/action';
import ProfileItem from '../../components/ProfileItem';
import { styles } from './styles';
import HeaderProfile from './header';
import ChangeRBSheet from './ChangeRBSheet';
import RBSComponents from './RBSComponents';

import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { strings } from '../../../string';
import { theme } from '../../../theme';



const MyProfileScrean = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => { dispatch(getMyProfileAction.request({})) }, []);

  const profile = useTypedSelector(s => s.profile.myProfile);

  useEffect(() => {
    setAbout(profile?.about);

    setName(profile?.userName!!);

    setProfileFoto(profile?.image);

    setColorLine(profile?.color);

    setEmail(profile?.email);

    setOnline(profile?.online);

    setPhone(profile?.phone);
  }, [profile])

  const [name, setName] = useState(profile?.userName ?? "");

  const [about, setAbout] = useState(profile?.about);

  const [email, setEmail] = useState(profile?.email);

  const [phone, setPhone] = useState(profile?.phone);

  const [online, setOnline] = useState(profile?.online);

  const [textName, onChangeTextName] = useState("");

  const [open, setOpen] = useState(false);

  const [text, onChangeText] = useState("");

  const [items, setItems] = useState([
    {value: '#ff0000', containerStyle:{backgroundColor: "#ff0000"}},
    {value: '#32CD32', containerStyle:{backgroundColor: "#32CD32"}},
    {value: '#00CED1', containerStyle:{backgroundColor: "#00CED1"}},
    {value: '#FFFF00', containerStyle:{backgroundColor: "#FFFF00"}},
  ]);
  
  const [colorLine, setColorLine] = useState(profile?.color);

  const [profileFoto, setProfileFoto] = useState(profile?.image)

  const onPressChangeAbout = () =>{
    dispatch(sendAboutAction.request({about:text}));
    console.log(text+" отправило");
    setAbout(text);
    console.log(text+" Записало в стейт");
    onChangeText("");

    onCloseRBSProfileItemChangeAbout();
  }

  const SendName = () =>{
    dispatch(sendNameAction.request({userName:textName}));

    setName(textName);

    onChangeText("");

    onCloseRBSProfileItemChangeName();
  }

  const onChangeColorLine=()=>{
    dispatch(sendColorAction.request({color:colorLine ?? ""}));
  }

  const onPressRegister=()=>{
    dispatch(logOutAction.request({}));
    console.log(13)
  }

  const GoToEmail = () => {
    navigation.navigate("MyProfileEmail");
  }

  const GoToPhone = () => {
    navigation.navigate("MyProfilePhone");
  }

  useEffect(() => {
    if (about?.length == 0) {
      setAbout("Ленивый пользователь ничего не ввел");
    }
  }, [about]);

  const refRBSheet = useRef<RBSheet>();

  const onOpenRBS = () => {
    refRBSheet.current?.open();
  }

  const onCloseRBS = () => {
    refRBSheet.current?.close();
  }

  const refRBSProfileItemChangeAbout = useRef<RBSheet>();

  const onOpenRBSProfileItemChangeAbout = () => {
    refRBSProfileItemChangeAbout.current?.open();
  }

  const onCloseRBSProfileItemChangeAbout = () => {
    refRBSProfileItemChangeAbout.current?.close();
  }

  const refRBSProfileItemChangeName = useRef<RBSheet>();

  const onOpenRBSProfileItemChangeName = () => {
    refRBSProfileItemChangeName.current?.open();
  }

  const onCloseRBSProfileItemChangeName = () => {
    refRBSProfileItemChangeName.current?.close();
  }


  const onTekePhotoCamera = () =>{
    ImagePicker.openCamera({
      width: 300,

      height: 300,

      cropping: true,
    }).then(imageProfileCamera => {
      console.log(imageProfileCamera);

      setProfileFoto(imageProfileCamera.path);

      dispatch(sendImageAction.request({image:imageProfileCamera.path, name:"profile", mime:imageProfileCamera.mime}));
    });
  }
  const onTekePhotoGalary = () =>{
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(imageProfileGalary => {
      console.log(imageProfileGalary);

      setProfileFoto(imageProfileGalary.path);

      dispatch(sendImageAction.request({image:imageProfileGalary.path, name:"profile", mime:imageProfileGalary.mime}));
    });
  }
  return (
    <Container scrollable  containerStyle={styles.styleContainer}>
      

      <View style={styles.publicInfo}>
      <HeaderProfile image={profileFoto} constName={name} online={online!!} />
        <View style={styles.publicInfoV}>
          <ProfileItem 
          titleText={strings.screens.profile.profileItemText.about.titleText}
          textI={about} 
          description={strings.screens.profile.profileItemText.about.description}
          onPress={onOpenRBSProfileItemChangeAbout} />

          <ChangeRBSheet 
          refRBS={refRBSProfileItemChangeAbout}
          onChange={onChangeText}
          onPressButtonSave={onPressChangeAbout}
          onPressButtonClose={onCloseRBSProfileItemChangeAbout}
          text={text}
          placeholderInput={strings.screens.profile.RBS.ChangeRBSheet.aboutPlaceholderInput}
          textButtonSave={strings.screens.profile.RBS.ChangeRBSheet.textButtonSave}
          textButtonClose={strings.screens.profile.RBS.ChangeRBSheet.textButtonClose}
          />

          <ProfileItem 
          titleText={strings.screens.profile.profileItemText.name.titleText} 
          textI={name} 
          description={strings.screens.profile.profileItemText.name.description} 
          onPress={onOpenRBSProfileItemChangeName} />

          <ChangeRBSheet 
          refRBS={refRBSProfileItemChangeName}
          onChange={onChangeTextName}
          onPressButtonSave={SendName}
          onPressButtonClose={onCloseRBSProfileItemChangeName}
          text={textName}
          placeholderInput={strings.screens.profile.RBS.ChangeRBSheet.namePlaceholderInput}
          textButtonSave={strings.screens.profile.RBS.ChangeRBSheet.textButtonSave}
          textButtonClose={strings.screens.profile.RBS.ChangeRBSheet.textButtonClose}
          />

          <ProfileItem 
          titleText={strings.screens.profile.profileItemText.email.titleText} 
          textI={email || "NONE"}  
          description={strings.screens.profile.profileItemText.email.description} 
          onPress={GoToEmail} />

          <ProfileItem 
          titleText={strings.screens.profile.profileItemText.phone.titleText} 
          textI={phone || "NONE"}  
          description={strings.screens.profile.profileItemText.phone.description} 
          onPress={GoToPhone} />

          <ProfileItem 
          titleText={strings.screens.profile.profileItemText.photo.titleText} 
          textI={strings.screens.profile.profileItemText.photo.textI}
          description={strings.screens.profile.profileItemText.photo.description} 
          onPress={onOpenRBS} />

          <RBSheet
          //@ts-ignore
                  ref={refRBSheet}
                  closeOnDragDown={true}
                  closeOnPressMask={false}
                  customStyles={{
                    wrapper: {
                      backgroundColor: "transparent"
                    },
                    draggableIcon: {
                      backgroundColor: "#000"
                    },
                    container: {
                      backgroundColor: theme.colors.default.secondaryBackground,
                      borderRadius:15,
                    },
                  }}
                >
                  <RBSComponents 
                  onPressUpploadPhotoInGalary={onTekePhotoGalary} 
                  onPressUpploadPhotoInCamera={onTekePhotoCamera} 
                  onPressCancel={onCloseRBS} 
                  textPhotoInGalary={strings.screens.profile.RBS.RBSComponents.upploadPhoto} 
                  textPhotoInCamera={strings.screens.profile.RBS.RBSComponents.makePhoto} 
                  textCancel={strings.screens.profile.RBS.RBSComponents.close}  />
          </RBSheet>
        </View>

        

        <View style={styles.changeLine}>
          <View style={styles.ButtonChangeColorLine}>
            <TouchableOpacity style={styles.textChangeColorLine} onPress={onChangeColorLine} >
              <Text style={styles.ButtonText}>Сохранить</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.MyMass}>
            <View>
              <Text style={{color:colorLine}}>You</Text>
            </View>

            <View style={[styles.MyMassText, {borderRightColor:colorLine}]}>
              <DropDownPicker
                placeholder={strings.screens.profile.DropDownPickerPplaceholder}
                open={open}
                value={colorLine!!}
                items={items}
                setOpen={setOpen}
                setValue={setColorLine}
                setItems={setItems}
                dropDownContainerStyle={{width:200}}
                style={[styles.Picker, {backgroundColor:colorLine}]}
                listMode="SCROLLVIEW"
                scrollViewProps={{
                  nestedScrollEnabled: true,
                }}
              />
            </View>
          </View>
          
        </View>

        <View>
          <CustomButton title="Выйти" onPress={onPressRegister} template="ProfileButton" style={styles.logOutButton} textStyle={styles.logOutButt}/>
        </View>
      </View>
    </Container>
  );
};
export default MyProfileScrean;

