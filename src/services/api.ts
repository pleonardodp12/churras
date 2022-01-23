import axios from 'axios';

console.log('ver', process.env.REACT_APP_API_URL);

export default axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});
