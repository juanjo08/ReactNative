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
      let exists;
      exists = store.todos.findIndex((element) => element.id === ids.id);
      if (exists !== -1) {
        store.todos.splice(exists, 1);
      } else {
        setStore(store.todos.push(ids));
      }
      console.log('store: ', store.todos);
    },
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
