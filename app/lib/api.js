import axios from 'axios';

//const feedUri = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FTechnology.xml';
const feedUri = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.npr.org%2Frss%2Frss.php%3Fid%3D1019'
export const fetchData = () => {
  return axios.get(feedUri).then(({ data }) => data);
};
