import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ContextProvider } from './src/context/Context';
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ContextProvider>
          <Navigation />
        </ContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

