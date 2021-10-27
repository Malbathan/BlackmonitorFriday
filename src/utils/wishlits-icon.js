import React, {useEffect, useState} from 'react';
import { getData, removeData, storeData } from './localstorage.js';

import Icon from '../icon/heart-icon.png';
import FavIcon from '../icon/fav-heart-icon.png';

import IconHover from '../icon/hover-heart-icon.png'
import FavHover from '../icon/fav-hover-heart-icon.png'

export default function Wishlist({id}){
  
  // const [hover, setHover] = useState(false);
  const [add, setAdd] = useState();

  const onClick = (event) => {
    if (!getData(id)) {
      storeData(`${id}`, `FAVORITO`)
      setAdd(`FAVORITO`)
    } else {
      removeData(id);
      setAdd('')
    }
  }

  useEffect(() => {
    if(getData(id)){
      setAdd(`FAVORITO`)
    }
  }, [])

  const hasFavorite = getData(id) ? (
    <img
      className="icon"
      onClick={onClick}
      onMouseEnter={(e) =>
        e.currentTarget.src ='../icon/fav-hover-heart-icon.png'
      }
      onMouseOut={(e) => e.currentTarget.src={FavIcon}}
      src={FavIcon}
      alt={'coração vermelho - favorito acionado'}
    />
  ) : (
    <img
      className="icon"
      onClick={onClick}
      onMouseEnter={(e) =>
        e.currentTarget.src ='../icon/hover-heart-icon.png'
      }
      onMouseOut={(e) => e.currentTarget.src={Icon}}
      src={Icon}
      alt={'coração preto - favorito não acionado'}
    />
  );

  

  return(
    <div>
      {hasFavorite}
    </div>
  )
}
