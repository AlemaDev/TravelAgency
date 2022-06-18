import React from 'react'
import './searchbar.css';

const SearchBar = ({search, setSearch}) => {

    return (
        <form className='search-bar' onSubmit={(e) => e.preventDefault()}>
            <input
                autoFocus
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
