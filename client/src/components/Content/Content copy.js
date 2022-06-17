import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom'

import { alojamientos, vuelos, paquetes, ofertas, actividades, autos, asistencias, traslados } from '../../constants/itemsTypes';
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
        <div className="content-wrapper flex-grow">
              {products.map((product) => (
                <div className="product" key={product._id}>
                  <Products product={product} setCurrentId={setCurrentId}/>
                </div>
              ))}
        </div>
      );
};

export default Content;
