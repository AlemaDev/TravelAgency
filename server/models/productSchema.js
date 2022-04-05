import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    type: String,
    title: String,
    description: String,
    tags: [String],
    selectedFile: String,
    price: Number
});

const ProductSchema = mongoose.model('PostProduct', productSchema);

export default ProductSchema;