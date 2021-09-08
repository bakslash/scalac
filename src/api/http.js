import Axios from "axios";

function returnAxiosInstance() {
  return Axios.create();
}

export function get(url){
  const axios = returnAxiosInstance();
  return axios.get(url);
}