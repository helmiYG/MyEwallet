import React, {FunctionComponent, useMemo} from 'react';
import {CardProps} from './types';
import styled from 'styled-components/native';
import {ScreenWidth, transformToIdr} from '../shared';
import {colors} from '../colors';
import RegularText from '../Texts/regularText';
import SmallText from '../Texts/smallText';
import {View} from 'react-native';

const CardBackGround = styled.ImageBackground.attrs({
  // resizeMode: 'cover',
})`
  height: 25%;
  width: ${ScreenWidth * 0.8}px;
  background-color: ${colors.accent};
  border-radius: 25px;
  overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const BalanceCard: FunctionComponent<CardProps> = props => {
  const handlePress = () => {};
  const idrBalance = useMemo(
    () => transformToIdr(Number(props.balance)),
    [props.balance],
  );
  return (
    <CardBackGround
      source={require('../../assets/bgs/background_transparent.png')}>
      <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
        <TouchableView>
          <CardRow>
            <RegularText testStyle={{color: colors.white}}>
              ***** {props.accountNo.slice(6, 10)}
            </RegularText>
          </CardRow>
          <CardRow>
            <View style={{flex: 3}}>
              <SmallText testStyle={{color: colors.graylight, marginBottom: 5}}>
                Total Balance
              </SmallText>
              <RegularText testStyle={{fontSize: 19, color: colors.graylight}}>
                {idrBalance}
              </RegularText>
            </View>
            <Logo testID="logo" source={props.logo} />
          </CardRow>
        </TouchableView>
      </CardTouchable>
    </CardBackGround>
  );
};

export default BalanceCard;
