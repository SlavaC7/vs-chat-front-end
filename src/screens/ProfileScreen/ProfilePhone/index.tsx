import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Container } from '../../../components/Safe';
import { useTypedSelector } from '../../../store/store';
import { CustomButton } from '../../../components/Button';
import { clearResulrAction, getMyProfileAction,sendEmailAction, sendPhoneAction, sendVerifyCodeAction, sendVerifyPhoneCodeAction } from '../../../store/profile/action';

import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  
} from 'react-native-confirmation-code-field';
import { CustomTextInput } from '../../../components/CustomTextInput';
import { styles } from './styles';
import { strings } from '../../../../string';

const CELL_COUNT = 5;

const MyProfilePhone = () => {

  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => { dispatch(getMyProfileAction.request({})) }, []);

  const code = useTypedSelector(s=>s.profile.code); 
  
  const profile = useTypedSelector(s => s.profile.myProfile);

  const [form, setForm]=useState({phone:profile?.phone,enterPhone:false});

  const [value, setValue] = useState('');

  const [textCheckVerifycation, setTextCheckVerifycation] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => { setForm(prev=>({...prev,enterPhone:false})) }, [form.phone]);

  const onChengePhone = () =>{
    dispatch(sendPhoneAction.request({phone:form.phone}));

    setForm(prev=>({...prev,enterPhone:true}))
  }
  const result = useTypedSelector(s=>s.profile.result)

  useEffect(() => {
    dispatch(clearResulrAction.request({}));
    console.log(result+"=========res")
  },[])

  const [resultIsOpen,setResultIsOpen] = useState(false)

useEffect(()=>{
  if(resultIsOpen){
    if(result=="Confirmed"){
      setTextCheckVerifycation("Проверено!");

        dispatch(getMyProfileAction.request({}));

        navigation.navigate("MyProfileScrean");
    }else{
      setTextCheckVerifycation("Ошибка, введите еще раз!");
    }
  }else {
    setResultIsOpen(true);
  }
  },[result])

  const ChekVerificatoin = ()=>{
    dispatch(sendVerifyPhoneCodeAction.request({code:value}));
  }

  return (
    <Container containerStyle={styles.containerStyle}>
      <Text style={styles.title}>{strings.screens.verificationPhone.enterPhone}</Text> 

      <View style={styles.inputPhone}>
        <View style={{width:'70%'}}> 
          <CustomTextInput
                  value={form.phone}
                  placeholder={strings.screens.verificationPhone.placeholderInputPhone}
                  onChangeText={(InputEmail)=>setForm(prev=>({...prev,phone:InputEmail}))}
                  textInputStyle={styles.input1}
                />
        </View>

        <View style={styles.sendButtonView}>
          <TouchableOpacity style={styles.sendButton} onPress={onChengePhone} >
            <Text style={styles.sendButtonText}>Сохранить</Text>
            </TouchableOpacity>
        </View>
      </View>

      <SafeAreaView style={[styles.root,{display:form.enterPhone?'flex':'none'}]}>
      <Text style={styles.title}>{strings.screens.verificationPhone.verication}</Text>

      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text  , because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Text style={styles.title}>{textCheckVerifycation}</Text>
    <CustomButton title="Сохранить" onPress={ChekVerificatoin} template="NormalButton" style={styles.verificationButton} textStyle={styles.verificationButtonText}/>
    </SafeAreaView>
          
      </Container>
  );
};
export default MyProfilePhone;
