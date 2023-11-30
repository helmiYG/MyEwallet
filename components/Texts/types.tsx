import {ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';

export interface TextProps {
  testStyle?: StyleProp<TextStyle>;
  children: ReactNode;
}
