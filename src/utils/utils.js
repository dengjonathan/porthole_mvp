var axios = require('axios');

const NYT_URL = 'http://api.nytimes.com/svc/topstories/v2/world.json?api-key=29e640f958d54b019d58392b1e8bb3a0'

export function getNYT() {
  axios.get(NYT_URL)
  .then((res) => {
    console.log(res.data.results);
  });
}
