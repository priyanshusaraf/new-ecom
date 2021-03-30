import axios from "axios";

export const BASE_URL = "https://damp-oasis-54508.herokuapp.com";

const instance = axios.create({
  baseURL: BASE_URL + "/v1",
});

export default instance;
