import React from 'react'
import Counter from './Count'

function MetalSpace(props) {
  const { name, formed, origin, fans, split, id } = props
  if (split === '-') {
    return (
        <div>
          <div>Name: {name}</div>
          <div>Formed: {formed}</div>
          <div>Origin: {origin}</div>
          <div>Fans: {fans}</div>
    
          <Counter />
        </div>
      )
  } else {
    return (
        <div>
          <div>Name: {name}</div>
          <div>Formed: {formed}</div>
          <div>Origin: {origin}</div>
          <div>Fans: {fans}</div>
          <div>Split: {split}</div>
        </div>
      )  }
}
export default MetalSpace