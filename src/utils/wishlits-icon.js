import React, {useEffect, useState} from 'react';
import { getData, removeData, storeData } from './localstorage.js';

import Icon from '../icon/heart-icon.png';
import FavIcon from '../icon/fav-heart-icon.png';

import IconHover from '../icon/hover-heart-icon.png'
import FavHover from '../icon/fav-hover-heart-icon.png'

export default function Wishlist({id}){

  const [add, setAdd] = useState();
  const [fav, setFav] = useState(FavIcon);
  const [icon, setIcon] = useState(Icon);
  
  const onClick = (event) => {
    if (!getData(id)) {
      storeData(`${id}`, `FAVORITO`)
      setAdd(`FAVORITO`)
    } else {
      removeData(id);
      setAdd('')
    }
  };

  // Funções de setState para Over e Out
  const overFav = () => {
    setFav(FavHover)
  }
  const outFavOver = () => {
    setFav(FavIcon)
  }

  const overIcon = () => {
    setIcon(IconHover)
  }
  const outIconOver = () => {
    setIcon(Icon)
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
      onMouseOver={overFav}
      onMouseOut={outFavOver}
      src={fav}
      alt={'coração vermelho - favorito acionado'}
    />
  ) : (
    <img
      className="icon"
      onClick={onClick}
      onMouseOver={overIcon}
      onMouseOut={outIconOver}
      src={icon}
      alt={'coração preto - favorito não acionado'}
    />
  );

  

  return(
    <div>
      {hasFavorite}
    </div>
  )
}
