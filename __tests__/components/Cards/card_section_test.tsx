import React from 'react';
import {render} from '@testing-library/react-native';
import {describe, expect, it} from '@jest/globals';
import CardSection from '../../../components/Cards/CardSection';
import {NavigationContainer} from '@react-navigation/native';

describe('Card Section Component Test', () => {
  it('Card Section should loaded successfully', () => {
    const data = [
      {
        id: 1,
        accountNo: '232323232323',
        balance: 23000,
        logo: require('../../../assets/cards/mc.png'),
      },
      {
        id: 2,
        accountNo: '232323232324',
        balance: 22000,
        logo: require('../../../assets/cards/mc.png'),
      },
    ];
    const {getAllByText, getAllByTestId, toJSON} = render(
      <NavigationContainer>
        <CardSection data={data} />
      </NavigationContainer>,
    );

    expect(toJSON()).toMatchSnapshot();

    const firstElementAccountNo = getAllByText(data[0].accountNo.slice(6, 10), {
      exact: false,
    });

    expect(firstElementAccountNo).toBeTruthy();
    const elementLogo = getAllByTestId('logo');
    expect(elementLogo[0].props.source).toBe(
      require('../../../assets/cards/mc.png'),
    );

    expect(getAllByTestId('cardItem')).toHaveLength(2);
  });
});
