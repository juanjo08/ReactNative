import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

export default function spinner() {
  return (
    <>
      <Image
        style={styles.spinner}
        source={require('../../../assets/images/spinner.gif')}
      />
    </>
  );
}
