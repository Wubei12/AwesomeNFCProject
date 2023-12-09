import {
  View,
  // Text,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
  Text,
  // TextInput,
  // Pressable,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import NfCManager from 'react-native-nfc-manager';
import Game from '../components/Game';
import AndroidPrompt from '../components/AndroidPrompt';

const NFCScreen = () => {
  const [hasNfc, setHasNfc] = useState(null);
  const promptRef = useRef();

  useEffect(() => {
    async function checkNfc() {
      const supported = await NfCManager.isSupported();

      if (supported) {
        await NfCManager.start();
      }
      setHasNfc(supported);
    }
    checkNfc();
  }, []);

  if (hasNfc === null) {
    return null;
  } else if (!hasNfc) {
    return (
      <View style={styles.wrapper}>
        <Text>Your device doesn't support NFC</Text>
        <Pressable onPress={() => promptRef.current.setVisible(true)}>
          <Text>Test</Text>
        </Pressable>
        <AndroidPrompt ref={promptRef} />
      </View>
    );
  }
  return <Game />;
};

export default NFCScreen;

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BgImg: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  NFCPrsbl: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    borderColor: '#000',
    backgroundColor: 'rgba(0, 150,250, 0.6)',
    borderWidth: 1,
    padding: 4,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowOffset: 10,
    shadowColor: '#000',
  },
  NFCTxt: {width: '100%', fontSize: 34},
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
