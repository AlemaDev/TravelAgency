import React from "react";
import {useDispatch} from "react-redux";//esto lo voy a dejar aca para cuando habilite las opciones de borrar y editar

import {deleteProduct} from '../../../actions/products';
import './products.css';

const Products = ({product, setCurrentId}) => {
  const dispatch = useDispatch();
  return(
      <div className="product-wrapper">
          {product.selectedFile ? <img className="product-image" src={`data:image/png;base64${product.selectedFile}`}/>: ''}
          <div className="product-details">
            <h3 className="product-title">{product.title}</h3>
            <p>{product.description}</p>
          </div>
          <div className="product-data">
            <p>${product.price}</p>
            <p>{product.tags}</p>
            <button onClick={() => dispatch(deleteProduct(product._id))}>Delete</button>
          </div>
      </div>
  )
};

export default Products;