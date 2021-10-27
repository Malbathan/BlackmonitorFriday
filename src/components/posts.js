import React from 'react';
import Button from '../utils/button';
import Wishlist from '../utils/wishlits-icon';

import Icon from '../icon/heart-icon.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  return (
    <div className="card-deck">
      {posts.map(post => (
        <div key={post.id}  className="card" style={{width: '20rem'}}>
          
          <div className="card-body">
            <div className="wish-list">
              < Wishlist id={post.thumbnail_id}/>
              <img 
                src={post.thumbnail} 
                alt={post.title} 
                style={ {width: '240px'}}
              />
            </div>
            <p className="card-text">
              {post.title}
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                { 
                  (post.original_price) ? 
                  `R$ ${post.original_price.toFixed(2)}` : 
                  `R$ ${post.price.toFixed(2)}` 
                }
              </li>
              <li className="list-group-item">
                {`R$ ${post.price.toFixed(2)}`} 
              </li>
              <li className="list-group-item">
                em até 10 vezes de R$ {post.price / 10 } sem juros 
              </li>
            </ul>
            <Button param={post.id}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
