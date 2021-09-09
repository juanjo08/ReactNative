export default async function getDataTrending({ url, method, body }) {
  const response = await fetch(
    url //{method,headers,body,}
  );

  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`);
  }

  const json = await response.json();
  return json;
}
