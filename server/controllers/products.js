import express from 'express';
import mongoose from 'mongoose';

import ProductSchema from '../models/productSchema.js';

const router = express.Router();

export const getProducts = async (req, res) => { 
    try {
        const { product } = req.params;
        const products = await ProductSchema.find({type: `${product}`});
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// export const getProduct = async (req, res) => { 
//     const { id } = req.params;
//     try {
//         const product = await ProductSchema.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

export const findProducts = async (req, res) => { 
    const { product } = req.params;
    try {
        const productByName = await ProductSchema.find({ title: `${product}`});
        res.status(200).json( productByName );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    const { type, title, description, tags, selectedFile, price } = req.body;
    const newProduct = new ProductSchema({ type, title, description, tags, selectedFile, price })
    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    const { id: _id } = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("There's no product with that id");
    const updatedProduct = await ProductSchema.findByIdAndUpdate(_id, { ...product, _id }, {new: true});
    res.json(updatedProduct);
}

export const deleteProduct = async (req, res) => {
    const { id: _id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("There's no product with that id");
    await ProductSchema.findByIdAndRemove(_id);
    res.json({ message: "The product has been deleted" });
}