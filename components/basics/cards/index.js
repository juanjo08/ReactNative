import React from 'react';
import { Card } from 'react-native-paper';
import { View } from 'react-native';
import styles from './styles';

export default function cards(evt) {
  return (
    <>
      <View style={styles.cardContent}>
        <Card>
          <Card.Cover source={{ uri: evt.urls }} />
        </Card>
      </View>
    </>
  );
}
