import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://recipe-box-15453.firebaseio.com/'
});

export default instance;