import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import * as Application from 'expo-application';


export default function App() {
  const [clicked, setClicked] = useState(false);

  const getAppVersion =  () => {
    return Application.applicationName === 'Expo Go' ? require('./app.json').expo.version : Application.nativeApplicationVersion
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
        {!clicked && (
          <Pressable testID="click-me-button" onPress={() => setClicked(true)}>
            <Text style={styles.text}>Click me</Text>
          </Pressable>
        )}
        {clicked && <Text>Hi!</Text>}
      <Text>App version {getAppVersion()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
