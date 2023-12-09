import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import NfCManager, {NfcEvents} from 'react-native-nfc-manager';
// import AndroidPrompt from './AndroidPrompt';

export default function Game() {
  async function scanTag() {
    NfCManager.setEventListener(NfcEvents.DisccoverTag, tag => {
      console.warn('tag found', tag);
    });

    await NfCManager.registerTagEvent();
  }
  return (
    <View style={styles.wrapper}>
      <Text>NFC Game</Text>
      <Pressable style={styles.btn} onPress={scanTag}>
        <Text>Start</Text>
        {/* <AndroidPrompt ref={androidPromptRef} /> */}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    margin: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
});
