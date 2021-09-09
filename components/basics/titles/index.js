import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function title(evt) {
  return (
    <>
      <View style={styles.getContainerTitle}>
        <Text style={styles.getContainerTitle}>{evt.titles}</Text>
      </View>
    </>
  );
}
