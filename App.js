/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {WebView } from 'react-native-webview';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    
    <WebView
    source={{uri: 'http://200.211.73.16:8081/TerminalWeb/Login.aspx?ReturnUrl=%2fTerminalWeb%2f'}} //Endereço 
    
  />
  )
  webView.getSettings().setDisplayZoomControls(false);
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

});

export default App;
