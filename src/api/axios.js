import axios from "axios";

class RequestInterface {
  async doGetRequest(url) {
    const API_KEY = process.env.VUE_APP_API_KEY;
    return axios.get(`${url}?key=${API_KEY}`);
  }
}

export const requestInterface = new RequestInterface();
