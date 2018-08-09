import React, { Component } from 'react'
import { increment, decrement } from './actions'
import { connect } from 'react-redux'
import City from './city'
class App extends Component {
  render() {
    const { handleIncrement, handleDecrement, value } = this.props
    return (
      <div className="app" >
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <span>  count:{value}</span>
        <City />
      </div >
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.value
  }
}

const mapDispatchToProps = (displatch, ownProps) => {
  return {
    handleIncrement: () => {
      displatch(increment(ownProps.value))
    },
    handleDecrement: () => {
      displatch(decrement(ownProps.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)