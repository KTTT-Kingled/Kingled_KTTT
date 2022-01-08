import React, { useState } from 'react';

export const SearchContext = React.createContext();

export const SearchProvider = ({children}) => {
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);

  const setSearchValue = (value, result) => {
    setSearch(value);
    setIsSearching(true);
    setResults(result);
    console.log(value,result,isSearching);
};

const clearSearch = () => {
    setSearch('');
    setIsSearching(false);
    setResults([]);
    console.log(search,results,isSearching);
  };

  return (
    <SearchContext.Provider value={{search, isSearching, results, setSearchValue, clearSearch}}>
      {children}
    </SearchContext.Provider>
  );
};
