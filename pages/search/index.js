import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import { Searchbar } from 'react-native-paper';
import useCallSearch from '../../hooks/useCalls';
import apiKey from '../../services/apiKey';
import Spinner from '../../components/basics/spinner/index';
import HeaderTitle from '../../components/basics/header/index';
import Cards from '../../components/basics/cards/index';
import Titles from '../../components/basics/titles/index';
import Likes from '../../components/basics/like/index';
import Links from '../../components/basics/links/index';

export default function Search() {
  const [state, setdata] = useCallSearch('search');
  const [searchQuery, setSearchQuery] = React.useState('');
  const api = apiKey();
  const onChangeSearch = (query) => {
    setSearchQuery(query);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api.key}&q=${searchQuery}&limit=10&offset=0&rating=g&lang=en`;
    setdata({ url: url });
  };

  useEffect(
    function () {
      setdata({
        url: null,
        //method: 'GET',
        //body: '',
      });
    },
    [setdata]
  );

  if (state.isLoading) {
    //console.log('cargando..');
  }
  if (state.isFailed) {
    //console.log('algo ha fallado....');
  }
  if (state.isSuccess) {
    // console.log('entramos....', state.data.data);
    return (
      <>
        <View style={styles.container}>
          <Searchbar
            style={styles.search}
            placeholder='Search a gif here...'
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.container}>
          <HeaderTitle
            icon='search'
            title='Resultados de la búsqueda'
          ></HeaderTitle>
          <ScrollView>
            {state.isLoading ? (
              <Spinner></Spinner>
            ) : (
              state.data.data.map((element) => (
                <View key={element.id}>
                  <Cards urls={element.images.downsized_medium.url}></Cards>
                  <Titles titles={element.title}></Titles>
                  <View style={styles.containerButtons}>
                    <View style={styles.containerButtonsLike}>
                      <Likes like={element.id}></Likes>
                    </View>
                    <View style={styles.containerButtonsLink}>
                      <Links links={element.bitly_url}></Links>
                    </View>
                  </View>
                </View>
              ))
            )}
          </ScrollView>
        </View>
      </>
    );
  } else {
    return (
      <View style={styles.containerSearch}>
        <Searchbar
          style={styles.search}
          placeholder='Search a gif here...'
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
    );
  }
}
