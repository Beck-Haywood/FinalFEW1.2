import React from 'react'
import Counter from './Count'

function MetalSpace(props) {
  const { name, formed, origin, fans, id } = props
  return (
    <div>
      <div>Name: {name}</div>
      <div>Formed: {formed}</div>
      <div>Origin: {origin}</div>
      <div>Fans: {fans}</div>
      <Counter />
    </div>
  )
}
export default MetalSpace