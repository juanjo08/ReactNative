import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Context from '../../../context/LikeContext';
export default function myLikes() {
  const context = useContext(Context);
  console.log('datos: ', context[0].store.todos[1].id);
  return (
    <>
      <View>
        <Text>{('mis ids del contexto: ', context.store.ids)}</Text>
      </View>
    </>
  );
}
