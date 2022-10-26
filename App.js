import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cars from './components/Cars'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Module 3!</Text>
      <Text>Class of October 2022</Text>
      <Cars comText="Value1"></Cars>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color:'#BE8D34',
    fontSize: 24
  }
});
