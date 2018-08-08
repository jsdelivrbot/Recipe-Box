import axios from "axios";

// Create a base URL to ensure DRY code

const instance = axios.create({
  baseURL: "https://recipe-box-15453.firebaseio.com/"
});

export default instance;
