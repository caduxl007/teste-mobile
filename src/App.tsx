import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, View } from 'react-native';
import { SignRoutes } from './routes';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#72afb5" />
      <View style={{ flex: 1 }}>
        <SignRoutes />
      </View>
    </>
  );
};

export default App;
