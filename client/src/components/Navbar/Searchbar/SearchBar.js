import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './searchbar.css';
import { findProducts } from '../../../actions/products';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
    e.preventDefault();
    // const search = e.target.value;
    if(search) {
        history.push(`/search/${search}`);
        dispatch(findProducts(search));
    }
    console.log(search);
    }

    return (
        <form className='search-bar' onSubmit={handleSearch} >
            <input
                id='SearchBar'
                type='text'
                role='searchbox'
                placeholder='Search...'
                defaultValue={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                type='submit'
                value='Submit'
            >
            Buscar
            </button>
        </form>
    );
};

export default SearchBar;
