import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';

const StyledText = styled.Text`
  font-size: 15px;
  color: ${colors.gray};
  text-align: left;
  font-weight: bold;
`;

import {TextProps} from './types';

const RegularText: FunctionComponent<TextProps> = props => {
  return (
    <>
      <StyledText style={props.testStyle}>{props.children}</StyledText>
    </>
  );
};

export default RegularText;
