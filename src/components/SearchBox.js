import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <input type='search' placeholder='search robots' onChange={searchChange} />
  );
};
export default SearchBox;
