import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom'

import {getProducts} from '../../actions/products';
import Products from './Products/Products';
import './content.css';

const Content = ({currentId, setCurrentId}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const location = useLocation().pathname;

  useEffect(() => {
    const type = location.replace('/','');
    if(type) {
      dispatch(getProducts(type));
    }
  }, [location, dispatch]);


  return (
        <div className="flex flex-grow flex-wrap my-6 mx-4 justify-center ">
              {products.map((product) => (
                <div key={product._id}>
                  <Products product={product} setCurrentId={setCurrentId}/>
                </div>
              ))}
        </div>
      );
};

export default Content;
