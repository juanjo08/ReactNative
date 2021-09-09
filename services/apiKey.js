export default function apiKey() {
  const key = 'lsBw0xZ5u8154gIP312vtduOtal1N63J';
  const search = null;
  const urlTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=25&rating=g`;
  return {
    key: key,
    trending: urlTrending,
  };
}
