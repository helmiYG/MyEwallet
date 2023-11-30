import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import {StatusBar} from 'react-native';
import CardSection from '../components/Cards/CardSection';
import TransactionSection from '../components/Transactions/transactionSection';
import SendMoneySection from '../components/SendMoney/sendMoneySection';

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;
const Home: FunctionComponent = () => {
  const cardData = [
    {
      id: 1,
      accountNo: '12222039376256',
      balance: 20000,
      alias: 'Work Debit',
      logo: require('../assets/cards/mc.png'),
    },
    {
      id: 2,
      accountNo: '12222039376256',
      balance: 20000,
      alias: 'Work Debit',
      logo: require('../assets/cards/visa_white.png'),
    },
    {
      id: 3,
      accountNo: '12222039376256',
      balance: 20000,
      alias: 'Work Debit',
      logo: require('../assets/cards/visa_white.png'),
    },
  ];

  const transactionData = [
    {
      id: 1,
      title: 'title 1',
      subtitle: 'subtitl 1',
      amount: '100000',
      date: '02/03/2020',
      art: {
        icon: 'string',
        background: colors.gray,
      },
    },
    {
      id: 2,
      title: 'title 2',
      subtitle: 'subtitl 2',
      amount: '200000',
      date: '02/03/2020',
      art: {
        icon: 'string',
        background: colors.primary,
      },
    },
    {
      id: 3,
      title: 'title 3',
      subtitle: 'subtitl 3',
      amount: '300000',
      date: '03/03/2020',
      art: {
        icon: 'string',
        background: colors.secondary,
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: '90000',
      name: 'Coke',
      background: colors.tertiary,
      img: require('../assets/portraits/1.jpg'),
    },
    {
      id: 2,
      amount: '9001.0',
      name: 'Scoott',
      background: colors.accent,
      img: require('../assets/portraits/2.jpg'),
    },
    {
      id: 3,
      amount: '21300.9',
      name: 'Coke',
      background: colors.primary,
      img: require('../assets/portraits/3.jpg'),
    },
  ];
  return (
    <HomeContainer>
      <StatusBar backgroundColor={colors.graydark} />
      <CardSection data={cardData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;
