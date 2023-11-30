/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RootStack from './navigators/rootStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {createGlobalStyle} from 'styled-components';

// export const GlobalStyle = createGlobalStyle`
//     @font-face {
//         font-family: 'Lato';
//         font-style: normal;
//         font-weight: 400;
//         src: url("./assets/fonts/Lato-Bold.ttf") format('ttf')
//     }`;

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RootStack />
    </GestureHandlerRootView>
    // <GlobalStyle>
    // </GlobalStyle>
  );
}

export default App;
