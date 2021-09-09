import React from 'react';
import Search from '../pages/search/index';
import Trending from '../pages/trending/index';
import Like from '../pages/like/index';
import User from '../pages/user/index';

export default (name) => {
  let data;
  if (name === 'search') {
    data = <Search></Search>;
  } else if (name === 'trending') {
    data = <Trending></Trending>;
  } else if (name === 'like') {
    data = <Like></Like>;
  } else {
    data = <User></User>;
  }
  return data;
};
