import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { Text } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import { CustomButton } from '../../components/Button';
import { CustomTextInput } from '../../components/CustomTextInput';
import Field from '../../components/Field';
import LinkText from '../../components/LinkText';
import Row from '../../components/RowView/Row';
import { Container } from '../../components/Safe';
import { registerAction, signinAction } from '../../store/auth';
import { CreateAccount1, DecriptionText, Fields, MainText } from './styles';

const Register = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [markText, setMarkText] = useState("");

  let [form, setForm] = useState({
    login: '',//default login
    password: '',//default password
    userName: '',//default username
  });
  type slug = keyof typeof form

  let [isValid, setValid] = useState({
    login: true,
    password: true,
    userName: true,
  });
  const [isClickLogin, setClickLogin] = useState(false);

  const checkValue = (text: string) => text.length > 0;

  useEffect(() => {
  }, [form.login])

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

  const onPressRegister = () => {
    if(/^(([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6})|((\+38)?0[0-9]{9})|([a-zA-Z][a-zA-Z0-9]{2,10})$/.test(form.login)){
      if (isClickLogin) setClickLogin(true);
      if (checkValid(true)) {
        dispatch(registerAction.request(form));
      }
    }else{
      setMarkText("Проверьте пожалуйста поле логина");
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
  const onAuthAccount = () => {
    navigation.navigate("Auth")
  }
  const getInvalideText = (slug: slug) =>
    !isValid[slug] ? 'This value is required.' : null;
    const image = require('../../assets/image/BGAuth.jpg');
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Container containerStyle={{ padding: 25 }}>
        <View style={styles.textBlock}> 
          <MainText>Регестрация</MainText>

          <DecriptionText>Создай свой личный акканут</DecriptionText>
        </View>

        <Fields>
          <Field text="Логин" invalideText={getInvalideText('login')}>
            <CustomTextInput
              // type={'email-address'}
              value={form.login}
              placeholder="Логин, Email или Телефон"
              onChangeText={v => inputHander(v, 'login')}
              isValid={isValid['login']}
              textInputStyle={styles.input}
            />
            <DecriptionText>{markText}</DecriptionText>
          </Field>

          <Field
            text="Никнейм"
            invalideText={getInvalideText('userName')}>
            <CustomTextInput
              value={form.userName}
              placeholder="Введите Никнейм"
              onChangeText={v => inputHander(v, 'userName')}
              isValid={isValid['userName']}
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
          <CustomButton title="Зарегестрироваться" onPress={onPressRegister} template="AuthButton" style={styles.marginButton} />
          <Row style={{ marginTop: 10 }}>
            <CreateAccount1>Уже зарегестрированы? </CreateAccount1>

            <LinkText onClick={onAuthAccount}>Войдите!</LinkText>
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
export default Register;