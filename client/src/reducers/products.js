import { FETCH, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
 
 const products = (products = [], action) => {
    switch (action.type) {
        case FETCH:
            return action.payload;
        case CREATE:
            return [...products, action.payload];
        case UPDATE:
            return products.map((product) => product._id === action.payload._id ? action.payload : product)
        case DELETE:
            return products.filter((product) => product._id !== action.payload);  
        default:
            return products;
    }
}

export default products;