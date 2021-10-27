import React, { useState, useEffect } from 'react';
import AppContext from './appContext';
import axios from 'axios';

function Provider({ children }) {
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);


const contextValue = {
  posts,
  setPosts,
  loading,
  setLoading,
  currentPage,
  setCurrentPage,
  postsPerPage
}

useEffect(() => {
  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get('https://api.mercadolibre.com/sites/MLB/search?q=monitor')
      .then(({data}) => data.results);

    setPosts(res);
   
    setLoading(false);
  };

  fetchPosts();
}, []);

 
return (
  <AppContext.Provider value={ contextValue }>
    {children}
  </AppContext.Provider>
);
}

export default Provider;
