import React, { useContext, useState } from 'react';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import Context from '../../../context/LikeContext';

export default function like(evt) {
  const [id, setId] = useState();
  const [color, setColor] = useState('#454545');
  const context = useContext(Context);

  const handleLikePress = (like) => {
    if (color === '#C70039') {
      setColor('#454545');
      context.actions.sendIds({ id: like });
    } else {
      setId(like);
      setColor('#C70039');
      context.actions.sendIds({ id: like });
    }
  };

  return (
    <>
      {id === '' ? (
        (color = '#C70039'(
          <Text style={styles.getLike}>
            <AntDesign
              name='heart'
              size={25}
              color={color}
              onPress={() => handleLikePress(evt.like)}
            />
          </Text>
        ))
      ) : (
        <Text style={styles.getLike}>
          <AntDesign
            name='heart'
            size={25}
            color={color}
            onPress={() => handleLikePress(evt.like)}
          />
        </Text>
      )}
    </>
  );
}
