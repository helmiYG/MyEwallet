import React, {FunctionComponent, ReactNode} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import SmallText from '../Texts/smallText';
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  padding: 20px;
  border-radius: 20px;
`;

interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = props => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <SmallText testStyle={props.textStyles}>{props.children}</SmallText>
    </ButtonView>
  );
};

export default RegularButton;
