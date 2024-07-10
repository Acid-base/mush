import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MushroomList from './components/mushroom-list';
import MushroomDetail from './components/mushroom-detail';

const Stack = createNativeStackNavigator();

const App = () => {
  // ... (You might want to remove the following two lines if you don't need the scrolling feature)
  const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MushroomList" component={MushroomList} />
        <Stack.Screen name="MushroomDetail" component={MushroomDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  section: {
    padding: 24,
    marginBottom: 16,
  },
  textLg: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  appTitleText: {
    color: '#007AFF',
  },
  textXL: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  hero: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heroTitle: {
    marginLeft: 20,
  },
  heroTitleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  whatsNextButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    marginLeft: 20,
    alignItems: 'center',
  },
});

export default App;
