import React from 'react';
import { View, AppRegistry } from 'react-native';

import Header from './src/components/header';
import AlbumsList from './src/components/albumslist';

const App = () => (
  <View>
    <Header headerText='Album' />
    <AlbumsList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
