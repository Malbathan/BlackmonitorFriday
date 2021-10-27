import React, {useEffect, useState} from 'react';
import { getData, removeData, storeData } from './localstorage.js';

export default function Button({param}){
  
  // const [hover, setHover] = useState(false);
  const [add, setAdd] = useState('ADICIONAR');
  const [bg, setBg] = useState('#40B25C')

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
      setBg('#A3F9B9')
    }
  }, [])

  return(
    <button
      className="btn"
      onClick={onClick}
      style={ {background: bg}}
      >

        { (getData(param)) ? getData(param) : add }

    </button>
  )
}
