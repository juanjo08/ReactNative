import React from 'react';
import { View, Text, Linking, Alert } from 'react-native';
import styles from './styles';

export default function link(evt) {
  const handleUrlPress = (url) => {
    const supported = Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <>
      <View style={styles.getlink}>
        <Text style={styles.getlink} onPress={() => handleUrlPress(evt.links)}>
          {evt.links}
        </Text>
      </View>
    </>
  );
}
