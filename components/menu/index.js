import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Routes from '../../hooks/useRoutes';
import Container from '../container/index';

const SearchRoute = () => <Container name='search'> </Container>;
const TrendingRoute = () => <Container name='trending'> </Container>;
const LikeRoute = () => <Container name='like'> </Container>;
const UserRoute = () => <Container name='user'> </Container>;

const Menu = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(Routes);

  const renderScene = BottomNavigation.SceneMap({
    search: SearchRoute,
    trending: TrendingRoute,
    like: LikeRoute,
    user: UserRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Menu;
