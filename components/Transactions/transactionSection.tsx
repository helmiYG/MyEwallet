import React, {FunctionComponent} from 'react';
import {TransactionSectionProps} from './types';
import styled from 'styled-components/native';
import RegularText from '../Texts/regularText';
import {colors} from '../colors';
import SmallText from '../Texts/smallText';
import TransactionItem from './transactionItem';

const TransactionSectionBackground = styled.View`
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  flex: 2;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TransactionList = styled.FlatList`
  width: 100%;
`;

const TransactionSection: FunctionComponent<
  TransactionSectionProps
> = props => {
  return (
    <TransactionSectionBackground>
      <TransactionRow style={{marginBottom: 25}}>
        <RegularText testStyle={{fontSize: 19, color: colors.secondary}}>
          Transaction
        </RegularText>
        <SmallText testStyle={{color: colors.secondary}}>Recent</SmallText>
      </TransactionRow>

      <TransactionList
        keyExtractor={({id}: any) => id.toString()}
        showsVerticalScrollIndicator={false}
        data={props.data}
        renderItem={({item}: any) => <TransactionItem {...item} />}
      />
    </TransactionSectionBackground>
  );
};

export default TransactionSection;
