import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import useCallTrending from '../../hooks/useCalls';
import apiKey from '../../services/apiKey';
import Spinner from '../../components/basics/spinner/index';
import HeaderTitle from '../../components/basics/header/index';
import Cards from '../../components/basics/cards/index';
import Titles from '../../components/basics/titles/index';
import Likes from '../../components/basics/like/index';
import Links from '../../components/basics/links/index';

export default function Trending() {
  const [state, setdata] = useCallTrending('trending');
  const url = apiKey();

  useEffect(
    function () {
      setdata({
        url: url.trending,
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
    //console.log('entramos....', state);

    return (
      <>
        <View>
          <HeaderTitle
            icon='trending-up'
            title='Últimas Tendencias'
          ></HeaderTitle>
        </View>
        <View style={styles.container}>
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
    return null;
  }
}
