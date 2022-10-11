import axios from 'axios';
import * as url from '../constants/constant'

export const getData = () => {
  return axios.get(url.URL)
};

export const deleteApi = (productId) => {
  return axios.delete(`http://localhost:3000/products/${productId}`)
};

export const commentApi = (productId) => {
  return axios.get(`http://localhost:3000/products/${productId}/comments`)
};
