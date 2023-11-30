import React, {FunctionComponent, useMemo} from 'react';
import {TransactionProps} from './types';
import styled from 'styled-components/native';
import TransactionApi from './transactionApi';
import {View} from 'react-native';
import RegularText from '../Texts/regularText';
import {colors} from '../colors';
import SmallText from '../Texts/smallText';
import {transformToIdr} from '../shared';

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;

const TransactionItem: FunctionComponent<TransactionProps> = props => {
  const amountInIdr = useMemo(
    () => transformToIdr(Number(props.amount)),
    [props.amount],
  );
  return (
    <TransactionRow>
      <LeftView>
        <TransactionApi
          background={props.art.background}
          icon={props.art.icon}
        />
        <View style={{marginLeft: 10}}>
          <RegularText
            testStyle={{
              color: colors.secondary,
              textAlign: 'left',
              marginBottom: 5,
            }}>
            {props.title}
          </RegularText>
          <SmallText
            testStyle={{
              color: colors.graydark,
              textAlign: 'left',
            }}>
            {props.subtitle}
          </SmallText>
        </View>
      </LeftView>
      <RightView>
        <RegularText
          testStyle={{
            color: colors.secondary,
            textAlign: 'right',
            marginBottom: 5,
          }}>
          {amountInIdr}
        </RegularText>
        <SmallText
          testStyle={{
            color: colors.graydark,
            textAlign: 'right',
          }}>
          {props.date}
        </SmallText>
      </RightView>
    </TransactionRow>
  );
};

export default TransactionItem;
