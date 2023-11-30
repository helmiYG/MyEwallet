import React, {FunctionComponent, useMemo} from 'react';
import {SendMoneyPropsSections} from './types';
import styled from 'styled-components/native';
import {colors} from '../colors';
import RegularText from '../Texts/regularText';
import SmallText from '../Texts/smallText';
import {Alert} from 'react-native';
import SendMoneyItem from './sendMoneyItem';
import BottomSheet from '@gorhom/bottom-sheet';

const SendMoneySectionBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 25px;
`;

const SendMoneyList = styled.FlatList`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding-left: 25px;
  padding-right: 25px;
`;

const TextButton = styled.TouchableOpacity``;
const SendMoneySection: FunctionComponent<SendMoneyPropsSections> = props => {
  const sheetRef = React.useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['30%', '50%'], []);

  const renderContent = () => {
    return (
      <SendMoneySectionBackground>
        <SendMoneyRow>
          <RegularText testStyle={{fontSize: 19, color: colors.secondary}}>
            Send Money To
          </RegularText>
          <TextButton onPress={() => Alert.alert('Add')}>
            <SmallText testStyle={{fontWeight: 'bold', color: colors.tertiary}}>
              +Add
            </SmallText>
          </TextButton>
        </SendMoneyRow>
        <SendMoneyList
          data={props.data}
          keyExtractor={({id}: any) => id.toString()}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'flex-start',
          }}
          renderItem={({item}: any) => <SendMoneyItem {...item} />}
          numColumns={4}
        />
      </SendMoneySectionBackground>
    );
  };
  return (
    <BottomSheet ref={sheetRef} index={1} snapPoints={snapPoints}>
      {renderContent}
    </BottomSheet>
  );
};

export default SendMoneySection;
