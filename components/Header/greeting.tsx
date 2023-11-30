/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent} from 'react';
import {TextStyle, StyleProp} from 'react-native';
import styled from 'styled-components/native';
import RegularText from '../Texts/regularText';
import SmallText from '../Texts/smallText';
import {colors} from '../colors';

interface GreetingProps {
  mainText: String;
  subText: String;
  mainTextSTyle?: StyleProp<TextStyle>;
  subTextSTyle?: StyleProp<TextStyle>;
}

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

const Greeting: FunctionComponent<GreetingProps> = props => {
  return (
    <StyledView>
      <RegularText
        testStyle={[
          {color: colors.secondary, fontSize: 22},
          props.mainTextSTyle,
        ]}>
        {props.mainText}
      </RegularText>
      <SmallText testStyle={[{color: colors.graydark}, props.subTextSTyle]}>
        {props.subText}
      </SmallText>
    </StyledView>
  );
};

export default Greeting;
