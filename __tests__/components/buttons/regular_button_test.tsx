import React from 'react';
import {render} from '@testing-library/react-native';
import {describe, expect, it} from '@jest/globals';
import RegularButton from '../../../components/Buttons/regularButton';
import {colors} from '../../../components/colors';

describe('RegularButton testing', () => {
  it('renders RegularButton correctlty', () => {
    const {getByText} = render(
      <RegularButton onPress={() => {}} children="testing button" />,
    );

    expect(getByText('testing button')).toBeTruthy();
  });

  it('renders with default props', () => {
    const {getByText} = render(
      <RegularButton onPress={() => {}} children="testing button" />,
    );

    // Assert that the text is rendered with default color and fontWeight
    const textElement = getByText('testing button');
    expect(textElement.props.style).toEqual({
      color: colors.gray,
      fontSize: 13,
      textAlign: 'left',
    });
  });
});
