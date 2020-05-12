import data from './metal.json'
import React from 'react';
import MetalSpace from './MetalSpace';
import './MetalList.css';

function MetalList() {
    const spaces = data.map(({band_name, formed, origin, fans, split}, i) => {
      return (
        <MetalSpace
          id={i}
          name={band_name}
          formed={formed}
          origin={origin}
          fans={fans}
          split={split}
        />
      )
    })
  
    return (
      <div className="MetalList">
        { spaces }
      </div>
    )
  }
  
  export default MetalList
