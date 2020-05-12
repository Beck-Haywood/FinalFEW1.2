import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0}
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }
  decrease() {
    this.setState({count: this.state.count - 1})
  }
  
  render(props) {
    const { count } = this.state

    return (
      <div>
        <div>
            <p>Likes: {count}</p>
        </div>
    
        <button onClick={(e) => {
          // console.log({coin_type})
          this.increment()
        }}>Like</button>
        <button onClick={(e) => {
          // console.log({coin_type})
          this.decrease()
        }}>Dislike</button>
      </div>
    )
  }
}
export default Counter
