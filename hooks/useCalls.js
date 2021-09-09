import { useCallback, useState } from 'react';
import getDataTrending from '../services/getDataTrending';
import getDataSearch from '../services/getDataSearch';
import getDataLives from '../services/getDataLikes';
import getDataUser from '../services/getDataUser';

export default function calls(evt) {
  if (evt === 'trending') {
    evt = getDataTrending;
  } else if (evt === 'likes') {
    evt = getDataLives;
  } else if (evt === 'users') {
    evt = getDataUser;
  } else {
    evt = getDataSearch;
  }

  const [fecthState, setFetchState] = useState({
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    data: null,
    error: null,
  });

  const fecthData = useCallback(async function ({ url, method, body }) {
    try {
      setFetchState({
        isLoading: true,
        isSuccess: false,
        isFailed: false,
        data: null,
        error: null,
      });
      const result = await evt({ url, method, body });
      setFetchState({
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        data: result,
        error: null,
      });
      return result;
    } catch (error) {
      setFetchState({
        isLoading: false,
        isSuccess: false,
        isFailed: true,
        data: null,
        error: null,
      });
    }
  }, []);
  return [fecthState, fecthData];
}
