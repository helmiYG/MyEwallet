import React, {FunctionComponent} from 'react';
import {TransactionAviProps} from './types';
import styled from 'styled-components/native';
import RegularText from '../Texts/regularText';
// import Icon from 'react-native-vector-icons/FontAwesome';

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const TransactionApi: FunctionComponent<TransactionAviProps> = props => {
  return (
    <StyledView style={{backgroundColor: props.background}}>
      <RegularText>icon</RegularText>
    </StyledView>
  );
};

export default TransactionApi;
