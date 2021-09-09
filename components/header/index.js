import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { View, Image } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <>
      <Appbar.Header style={styles.getHeader}>
        <Appbar.Content
          title={
            <View style={styles.getViewImage}>
              <Image
                style={styles.getImage}
                source={require('../../assets/images/header.png')}
              />
            </View>
          }
        ></Appbar.Content>
      </Appbar.Header>
    </>
  );
};

export default Header;
