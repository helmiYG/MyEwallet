import React from 'react';
import {render} from '@testing-library/react-native';
import {describe, expect, it} from '@jest/globals';
import CardItem from '../../../components/Cards/CardItem';
import {colors} from '../../../components/colors';
import {NavigationContainer} from '@react-navigation/native';

describe('Carditem test', () => {
  it('Carditem component should render correctly', () => {
    const data = {
      id: 1,
      accountNo: '232323232323',
      balance: 23000,
      logo: require('../../../assets/cards/mc.png'),
    };
    const {getByText, getByTestId} = render(
      <NavigationContainer>
        <CardItem {...data} />
      </NavigationContainer>,
    );

    const elementAccountNo = getByText(data.accountNo.slice(6, 10), {
      exact: false,
    });
    const elementBalance = getByText(data.balance.toString(), {
      exact: false,
    });
    expect(elementAccountNo).toBeTruthy();
    expect(elementBalance).toBeTruthy();

    const expectedStyle = {fontSize: 19, color: colors.graylight};
    expect(elementBalance.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining(expectedStyle)]),
    );

    const elementLogo = getByTestId('logo');
    expect(elementLogo.props.source).toBe(
      require('../../../assets/cards/mc.png'),
    );
  });
});
