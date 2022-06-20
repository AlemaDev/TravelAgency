import { FETCH, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/apiRequest';

export const getProducts = (product) => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts(product);
        dispatch({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const findProducts = (product) => async (dispatch) => {
    try {
        const { data } = await api.fetchSearchedProducts(product);
        dispatch({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createProduct = (product) => async (dispatch) => {
    try {
        const { data } = await api.createProduct(product);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = (id, product) => async (dispatch) => {
    try {
        const { data } = await api.updateProduct(id, product);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await api.deleteProduct(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}
