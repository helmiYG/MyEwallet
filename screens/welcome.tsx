/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent} from 'react';
// import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import {StatusBar} from 'react-native';
import BigText from '../components/Texts/bigText';
import SmallText from '../components/Texts/smallText';
// import RegularButton from '../components/Buttons/RegularButton';

// custom components

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;

// image
// import background from './../assets/bgs/background_v1.png';
const background = require('../assets/bgs/background_v1.png');

const Welcome: FunctionComponent = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText
            testStyle={{
              width: '70%',
              marginBottom: 25,
            }}>
            Best Way to track your money
          </BigText>
          <SmallText
            testStyle={{
              maxWidth: '70%',
              marginBottom: 25,
            }}>
            Best Payment method, connect your money to your friends
          </SmallText>
          {/* <RegularButton onPress={() => {}}>Get Started</RegularButton> */}
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
