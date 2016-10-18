var axios = require('axios');
import API_KEY from './.API_KEY';

const NYT_URL = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key='

// converts results from NYT api into object shape accepted by this app
const convertNYT = (result) => {
  const pic = result.multimedia[0] ? result.multimedia[0].url : '../stock_image.png';
  return {
    title: result.title,
    text: result.abstract,
    byline: result.byline,
    date: result.updated_date,
    url: result.short_url,
    pic: pic
  }
};

export function getNYT() {
  return axios.get(NYT_URL + API_KEY)
  .then(res => res.data.results)
  .then(results => results.map(convertNYT));
}

