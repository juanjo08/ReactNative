import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import useChangePages from '../../hooks/useChangePages';
export default function container(props) {
  const { name } = props;
  let data = useChangePages(name);

  return (
    <>
      <View style={styles.container}>{data}</View>
    </>
  );
}
