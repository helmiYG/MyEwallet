import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {describe, expect, it} from '@jest/globals';
import RegularText from '../../../components/Texts/regularText';

describe('Component RegularText test', () => {
  it('renders RegularText with Text word as children', () => {
    const children = 'Text';
    const {getByText} = render(<RegularText>{children}</RegularText>);
    // Assert that the title is rendered correctly
    const regularText = getByText(children);
    expect(regularText).toBeDefined();
  });
});
