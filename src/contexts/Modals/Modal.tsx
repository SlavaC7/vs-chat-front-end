import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import _ from 'lodash';
import Modal from 'react-native-modal';

import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TModalContent, TModalContext} from './types';
import {
  BoldText,
  FieldLabel,
  ModalContainer,
  ModalMainText,
  ModalSecoundText,
  OneLineContainer,
} from './styled';
import ModalHeader from '../../components/ModalHeader';
import ModalBody from '../../components/ModalBody';
import Field from '../../components/Field';
import {CustomTextInput} from '../../components/CustomTextInput';
import {CustomButton} from '../../components/Button';
import RightAlign from '../../components/RightAlign';
import LinkText from '../../components/LinkText';
import {useDispatch, useStore} from 'react-redux';
import {useTypedSelector} from '../../store/store';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ModalContext = createContext<TModalContext>({
  modals: [],
  isVisible: false,
  actions: {} as any,
});

export default ModalContext;

const ANIMATION_DURATION: number = 400;

export const ModalContextProvider: React.FC = ({children}) => {
  const [modals, setModals] = useState<TModalContext['modals']>([]);
  const [isVisible, toggleVisible] =
    useState<TModalContext['isVisible']>(false);
  const [closeEnabled, setCloseEnabled] = useState(true);

  const addAction = useCallback(
    modal => {
      setModals(p => [...p, modal]);
    },
    [setModals],
  );

  const show = () => {
    toggleVisible(true);
  };

  const hide = _.debounce(
    () => {
      toggleVisible(false);

      setTimeout(() => {
        setModals(p => {
          const copy = [...p];
          copy.shift();
          return copy;
        });
      }, ANIMATION_DURATION);
    },
    ANIMATION_DURATION,
    {
      trailing: false,
      leading: true,
    },
  );

  useEffect(() => {
    setCloseEnabled(true);
    reload();
    if (modals.length) show();
  }, [modals]);

  const [el, setEl] = useState(<View />);

  const reload = useCallback(() => {
    if (!!modals.length) {
      switch (modals[0].mode) {
        case 'Add_phone': {
          setEl(<AddPhone onClose={hide} model={modals[0]} />);
          break;
        }
      }
    }
  }, [modals]);

  return (
    <ModalContext.Provider
      value={{
        modals,
        isVisible,
        actions: {
          addAction,
        },
      }}>
      <Modal
        useNativeDriver
        useNativeDriverForBackdrop
        style={modalStyle}
        isVisible={isVisible}
        backdropOpacity={0.8}
        animationInTiming={ANIMATION_DURATION}
        animationOutTiming={ANIMATION_DURATION}
        backdropColor={'#000'}
        animationIn={'pulse'}
        animationOut={modals.length > 1 ? 'pulse' : 'zoomOut'}
        onBackdropPress={closeEnabled ? hide : undefined}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          {el}
        </KeyboardAvoidingView>
      </Modal>

      {children}
    </ModalContext.Provider>
  );
};

const AddPhone: React.FC<{
  model: TModalContent;
  onClose: () => void;
}> = ({model, onClose}) => {
  const dispatch = useDispatch();
  return (
    <ModalContainer>
      <ModalHeader onClose={onClose}>
        <ModalMainText>Create Contact Number</ModalMainText>
        <ModalSecoundText>
          Fill the form with the new phone number
        </ModalSecoundText>
      </ModalHeader>
      <ModalBody>
      <Field
        textColor="#0007"
        text="Type your 6-digit security code here"
        isRequired={true}
        invalideText={null}>
      </Field>

      <CustomButton template="second" onPress={()=>{}} title={""} />
    </ModalBody>
    </ModalContainer>
  );
};

const {modalStyle} = StyleSheet.create({
  modalStyle: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
});
