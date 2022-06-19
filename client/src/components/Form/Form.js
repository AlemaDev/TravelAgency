import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { Link } from 'react-router-dom';
import { alojamientos, vuelos, paquetes, ofertas, actividades, autos, asistencias, traslados } from '../../constants/itemsTypes';
import { createProduct, updateProduct } from '../../actions/products';

const Form = ({ currentId, setCurrentId }) => {
    const [productData, setProductData] = useState({ type: alojamientos, title: '', description: '', tags: '', selectedFile: '' , price: 0 });
    const product = useSelector((state) => currentId ? state.products.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(product) setProductData(product);
    }, [product]);

    const verifyIfEmpty = () => {
        return productData.type && productData.title && productData.description &&
        productData.selectedFile && productData.tags;
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if(verifyIfEmpty()) {
            if(currentId) {
                dispatch(updateProduct(currentId, productData));
            } else {
                dispatch(createProduct(productData));
            }
            alert("¡Nuevo producto agregado con exito!");
            handleClear(e);
        } else {
            alert("Es necesario llenar todos los campos");
        }        
    };

    const handleClear = (e) => {
        e.preventDefault(); 
        setCurrentId = null;
        setProductData({ type: alojamientos, title: '', description: '', tags: '', selectedFile: '' , price: 0 });
    };

    return (
    <div>
        <span><Link to={'/'}><img className="logo-image" src={require('../../images/arrow.png')} alt={"return to previous page"} /></Link></span>
            <div className='flex items-center justify-center min-h-screen bg'>
                <form className='px-20 py-6 mt-2 mb-6 text-left bg-white shadow-lg' autoComplete="off" noValidate>
                    <label>Tipo:</label><br/>
                    <select 
                            className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                            name="type"
                            value={productData.type}
                            onChange={(e) => setProductData({ ...productData, type: e.target.value })}
                    >
                        <option value={alojamientos} defaultValue>Alojamientos</option>
                        <option value={vuelos} >Vuelos</option>
                        <option value={paquetes} >Paquetes</option>
                        <option value={ofertas} >Ofertas</option>
                        <option value={actividades} >Actividades</option>
                        <option value={autos} >Autos</option>
                        <option value={asistencias} >Asistencias</option>
                        <option value={traslados} >Traslados</option>
                    </select>
                    <label>Titulo:</label><br/>
                    <input
                        className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                        name="title" 
                        type="text" 
                        label="Title" 
                        value={productData.title}
                        onChange={(e) => setProductData({ ...productData, title: e.target.value })}
                    /><br/>
                    <label>Descripcion:</label><br/>
                    <textarea
                        className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                        name="description" 
                        label="Description"
                        value={productData.description}
                        onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                    > </textarea><br/>
                    <label>Tags:</label><br/>
                    <input
                        className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                        name="tags"
                        type="text"
                        label="Tags"
                        value={productData.tags}
                        onChange={(e) => setProductData({ ...productData, tags: e.target.value })}
                    /><br/>
                    <label>Imagen:</label>
                    <span className='selectFile'>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({base64}) => setProductData({ ...productData, selectedFile: base64 })}
                            />
                    </span>
                    <label>Precio:</label>
                    <input
                        className='px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                        name="price"
                        type="number" 
                        label="Price"
                        value={productData.price}
                        onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                    />
                    <br/>
                    <br/>
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none' onClick={handleSubmit}>Submit</button>
                    <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2' onClick={handleClear}>Clear</button>
                </form>
            </div>
    </div>
    );
};

export default Form;

