import {StyleProp, TextStyle, ViewProps, ViewStyle} from 'react-native';

export interface IButtonProps {
  title: string;
  onPress?: () => void;
  height?: number;
  width?: number;
  template?: TButtonTemplateVariants;
  enableAutoSize?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  image?: any;
}

export type TButtonTemplate = {
  slug: TButtonTemplateVariants;
  backgroundColor: string;
  fontColor: string;
  borderColor: string;
  padding: number;
  width: string;
  fontSize: number;
  paddingHorizontal: number;
  borderRadius: number;
};

export type TButtonTemplates = {
  [mode in TButtonTemplateVariants]: TButtonTemplate;
};

export type TButtonTemplateVariants =
  | 'default'
  | 'AuthButton'
  | 'LogoutButton'
  | 'ProfileButton'
  | 'NormalButton'
