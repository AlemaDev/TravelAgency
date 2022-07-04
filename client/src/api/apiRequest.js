//esto lo vamos a usar para hacer llamadas por la api
import axios from 'axios';

const url = 'http://localhost:5000/products';

export const fetchProducts = (product) => axios.get(`${url}/${product}`); //original

export const createProduct = (newProduct) => axios.post(`${url}/add`, newProduct);
export const updateProduct = (id, updatedProduct) => axios.patch(`${url}/${id}`, updatedProduct);
export const deleteProduct = (id) => axios.delete(`${url}/${id}`);
export const fetchSearchedProducts = (product) => axios.get(`${url}/search/${product}`);
