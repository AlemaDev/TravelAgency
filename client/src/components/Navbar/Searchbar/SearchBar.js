import React, {useState} from 'react'
import './searchbar.css';
import { findProducts } from '../../../actions/products';

const SearchBar = () => {
const [search, setSearch] = useState('');
const [productData, setProductData] = useState({ type: '', title: '', description: '', tags: '', selectedFile: '' , price: 0 });

const handleSearch = (e) => {
    setProductData({title: search, description: search})
    if(search) {
        findProducts(productData);
    }
    e.preventDefault();
}

    return (
        <form className='search-bar' onSubmit={handleSearch}>
            <input
                id='SearchBar'
                type='text'
                role='searchbox'
                placeholder='Search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                type='submit'
            >
            Buscar
            </button>
        </form>
    );
};

export default SearchBar;
