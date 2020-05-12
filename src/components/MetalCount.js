import React from 'react';
import data from './metal.json'

function Count(props) {
    const count = data.map((item, i) => {
        return <li key={i}>{item}</li>
      })
    const result = count.length
    return (
      <div >
          <p>Bands: {result}</p>
      </div>
    )
  }
  
export default Count