import React, {useEffect, useState} from 'react';
import { getData, removeData, storeData } from './localstorage.js';


import style from './style.js'

export default function Button({param}){
  
  // const [hover, setHover] = useState(false);
  const [add, setAdd] = useState('ADICIONAR');

  const onClick = (event) => {
    if (!getData(param)) {
      storeData(`${param}`, `✓  ADICIONADO`)
      event.target.style.backgroundColor = '#A3F9B9'
      event.target.style.color = '#1C1C1C'
      setAdd(`✓  ADICIONADO`)
    } else {
      removeData(param);
      event.target.style.backgroundColor = '#40B25C'
      event.target.style.color = '#F1F1F1'
      setAdd('ADICIONAR')
    }
  }

  useEffect(() => {
    if(getData(param)){
      setAdd(`✓  ADICIONADO`)
    }
  }, [])

  return(
    <button
      className="btn"
      onClick={onClick}
      style={{
        ...style.normal,
      }}
      >

        { (getData(param)) ? getData(param) : add }

    </button>
  )
}
