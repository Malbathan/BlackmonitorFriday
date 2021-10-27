import React, { useContext } from 'react';
import AppContext from '../context/appContext';

import Pagination from './pagination';
import Posts from './posts';

import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
  
  const { posts, loading, currentPage, setCurrentPage, postsPerPage } = useContext(AppContext);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  console.log(posts.length);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Black 'Monitor' Friday</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        productsPerPage={postsPerPage}
        totalProducts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Products;