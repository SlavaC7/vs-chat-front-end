import {StatusBarProps, ViewStyle} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ReactNode} from 'react';

export interface IHeaderProps {
  title?: string;
  enableBackButton?: boolean;
  enableMenuButton?: boolean;
  enableSearchButton?: boolean;
  enableEditButton?: boolean;
  navigation?: StackNavigationProp<any>;
  onPressEdit?: () => void;
  onPressBack?: () => void;
}

export type TContainerProps = {
  children: ReactNode;
  scrollable?: boolean;
  background?: string;
  backdropPress?: () => void;
  containerStyle?: ViewStyle;
  scrollviewStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  containerScrollviewStyle?: ViewStyle;
  topLine?: boolean;
  bottomPadding?: boolean;
};

export interface IDefaultTemplate {
  enableHeader?: boolean;
  headerProps?: IHeaderProps;
  statusBarProps?: StatusBarProps;
  containerProps?: TContainerProps;
}
