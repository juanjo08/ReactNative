import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

export default function header(data) {
  return (
    <>
      <View style={styles.getHeader}>
        <MaterialIcons
          style={styles.icons}
          name={data.icon}
          size={24}
          color='#2e78b7'
        />
        <Text style={styles.text}>{data.title} </Text>
      </View>
    </>
  );
}
