import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, View, } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CustomButton } from '../../components/Button';
import { CustomTextInput } from '../../components/CustomTextInput';
import Field from '../../components/Field';
import LinkText from '../../components/LinkText';
import Row from '../../components/RowView/Row';
import { Container } from '../../components/Safe';
import { signinAction } from '../../store/auth';
import { CreateAccount1, DecriptionText, Fields, MainText } from './styles';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  let [form, setForm] = useState({
    login: '',//default login
    password: '',//default password
  });
  type slug = keyof typeof form

  let [isValid, setValid] = useState({
    login: true,
    password: true,
  });
  const [isClickLogin, setClickLogin] = useState(false);
  const checkValue = (text: string) => text.length > 0;
  const checkValid = (isCheckIn: boolean) => {
    let isValid = true;
    for (const key in form) {
      //@ts-ignore
      const is = checkValue(form[key]);
      isValid = isValid && is;
      isCheckIn && setValid(p => ({ ...p, [key]: is }));
    }
    return isValid;
  };
  useEffect(() => {
    checkValid(isClickLogin);
  }, [form]);
  const onPressSignIn = () => {
    if (isClickLogin) setClickLogin(true);
    if (checkValid(true)) {
      dispatch(signinAction.request(form));
    }
  };
  const inputHander = (v: string, slug: slug) => {
    setForm(p => ({
      ...p,
      [slug]: v,
    }));
    setValid(p => ({
      ...p,
      [slug]: checkValue(v),
    }));
  };
  const getInvalideText = (slug: slug) =>
    !isValid[slug] ? 'This value is required.' : null;
  const onCreateAccount = () => {
    navigation.navigate("Reg")
  }
  
  const image = require('../../assets/image/BGAuth.jpg');
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Container containerStyle={styles.fon} >
          <View style={styles.textBlock}>       
            <MainText>Авторизация</MainText>
            <DecriptionText>Добро пожаловать! Авторизуйтесь для дальнейшего пользования</DecriptionText>
          </View>
          <Fields>
            <Field text="Логин" invalideText={getInvalideText('login')}>
              <CustomTextInput
                // type={'email-address'}
                value={form.login}
                placeholder="Логин"
                onChangeText={v => inputHander(v, 'login')}
                isValid={isValid['login']}
                textInputStyle={styles.input}
              />
            </Field>
            <Field
              text="Пароль"
              invalideText={getInvalideText('password')}>
              <CustomTextInput
                value={form.password}
                secureTextEntry={true}
                placeholder="Введите пароль"
                onChangeText={v => inputHander(v, 'password')}
                isValid={isValid['password']}
                textInputStyle={styles.input}
              />
            </Field>
          </Fields>
          <View style={styles.textBlock}>
            <CustomButton title="Войти" onPress={onPressSignIn} template="AuthButton" style={styles.marginButton} />
            <Row>
              <CreateAccount1>Ещё не зарегестрированы? </CreateAccount1>
              <LinkText onClick={onCreateAccount}>Создайте аккаунт!</LinkText>
            </Row>
          </View>
          
        </Container>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  fon:{
    flex:1,
    justify:'space-around',
    alignItems:'center',
    justifyContent:"space-around",
    padding:25,
  },
  input:{
    borderRadius:20,
    opacity:.7,
    backgroundColor:'#fff',
  },
  image: {
   flex:1,
  },
  textBlock:{
    width:'100%',
    padding:10,
    justifyContent:'center',
    alignItems:'center'
  }, 
  marginButton:{
    margin:10,
  }
  });

export default Login;
