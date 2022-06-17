import React from "react";
import {useDispatch} from "react-redux";//esto lo voy a dejar aca para cuando habilite las opciones de borrar y editar

import {deleteProduct} from '../../../actions/products';
import {updateProduct} from '../../../actions/products';

const Products = ({product, setCurrentId}) => {
  const dispatch = useDispatch();
  return(
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mx-2">
    <a href="#">
    {product.selectedFile ? <img className="rounded-t-lg h-60 w-100" src={`data:image/png;base64${product.selectedFile}`}/>: ''}
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{product.description}</p>
        <div className="flex justify-between">
          <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Conocer mas
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          <p>${product.price}</p>
        </div>
    </div>
</div>
  )
};

export default Products;