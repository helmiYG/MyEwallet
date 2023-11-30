import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import BigText from '../components/Texts/bigText';
import BalanceCard from '../components/Cards/BalanceCard';
import {colors} from '../components/colors';

const CardDetailContainer = styled.View`
  align-items: center;
  /* justify-content: center; */
  flex: 1;
`;

interface Props {
  navigation: any;
  route: any;
}

const CardDetail: FunctionComponent<Props> = ({route}) => {
  const {alias} = route.params;

  return (
    <CardDetailContainer>
      <BigText
        testStyle={{
          marginTop: 50,
          textAlign: 'center',
          marginBottom: 50,
          color: colors.graydark,
        }}>
        {alias}
      </BigText>
      <BalanceCard {...route.params} />
    </CardDetailContainer>
  );
};

export default CardDetail;
