/* eslint-disable react/no-unstable-nested-components */
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FunctionComponent} from 'react';
import Welcome from '../screens/welcome';
import Home from '../screens/home';
import {colors} from '../components/colors';
import Greeting from '../components/Header/greeting';
import Profile from '../components/Header/profile';
import CardDetail from '../screens/cardDetail';

// export type RootStackParamnList = {
//   Welcome: undefined;
//   Home: undefined;
//   CardDetail: undefined;
// };

export const navigationRef = createNavigationContainerRef();

const Stack = createNativeStackNavigator();
const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.graylight,
          },
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => (
              <Profile
                onPress={() => {}}
                img={require('../assets/avi/avatar.png')}
                imgContainerStyle={{backgroundColor: colors.tertiary}}
              />
            ),
            headerTitle: props => (
              <Greeting
                mainText={'Hey Coby!'}
                subText={'Welcome Back'}
                {...props}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CardDetail"
          component={CardDetail}
          options={{
            headerRight: () => (
              <Profile
                onPress={() => {}}
                img={require('../assets/avi/avatar.png')}
                imgContainerStyle={{backgroundColor: colors.tertiary}}
              />
            ),
            headerTitleAlign: 'center',
            headerTitle: 'Card Detail',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
