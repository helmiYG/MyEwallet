import React, {FunctionComponent, useMemo} from 'react';
import styled from 'styled-components/native';
import {ScreenWidth, transformToIdr} from '../shared';
import {colors} from '../colors';
import {Alert} from 'react-native';
import Profile from '../Header/profile';
import {SendMoneyProps} from './types';
import SmallText from '../Texts/smallText';
import RegularText from '../Texts/regularText';

const SendMoneyItemContainer = styled.TouchableHighlight<{bgcolor: string}>`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0px 10px 10px 0px;
  background-color: ${props => props.bgcolor};
  padding: 10px;
`;

const SendMoneyItem: FunctionComponent<SendMoneyProps> = props => {
  const amountInIdr = useMemo(
    () => transformToIdr(Number(props.amount)),
    [props.amount],
  );
  return (
    <SendMoneyItemContainer
      bgcolor={props.background}
      onPress={() => Alert.alert('send money')}
      underlayColor={colors.secondary}>
      <>
        <Profile
          onPress={() => {}}
          img={props.img}
          imgContainerStyle={{marginBottom: 10}}
        />
        <RegularText
          testStyle={{
            fontWeight: 'bold',
            color: colors.secondary,
          }}>
          {props.name}
        </RegularText>
        <SmallText
          testStyle={{
            color: colors.secondary,
          }}>
          {amountInIdr}
        </SmallText>
      </>
    </SendMoneyItemContainer>
  );
};

export default SendMoneyItem;
