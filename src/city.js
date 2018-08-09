import React from 'react'
import { connect } from 'react-redux'
import { change } from './actions'
class City extends React.Component {
  render() {
    const { cityName, changeBtn } = this.props
    return (
      <div>
        <div>city:{cityName}</div>
        <button onClick={changeBtn}>改变城市</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cityName: state.cityName
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeBtn: () => {
      dispatch(change('深圳'))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(City)

