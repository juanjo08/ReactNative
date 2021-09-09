import React, { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Main from './components/main';
import AppContext from './context/LikeContext';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#454545',
    accent: '#999999',
  },
};

export default function App() {
  const [store, setStore] = useState({
    todos: [{ id: 0 }],
  });
  const [actions, setActions] = useState({
    sendIds: (ids) => {
      store.todos.find((element) => {
        if (element.id !== ids.id) {
          setStore(store.todos.push(ids));
        } else {
          console.log('eliminamos el id..');
        }
      });
      console.log('store: ', store);
      //setStore({ ...store, todos: store.todos.concat(ids) });
    },
    //deleteIds: (ids) => setStore({ ...store, todos: store.todos.concat(ids) }),
  });

  return (
    <>
      <AppContext.Provider value={{ store, actions }}>
        <PaperProvider theme={theme}>
          <Main></Main>
        </PaperProvider>
      </AppContext.Provider>
    </>
  );
}
