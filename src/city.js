import React from 'react'
import { connect } from 'react-redux'
import { change } from './actions'
class City extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: ''
    }
  }
  handleChange(e) {
    let value = e.target.value
    this.city = value
  }
  changeBtn2() {
    const actions = this.props.changeBtn
    actions(this.city)
  }
  render() {
    const { cityName, changeBtn } = this.props;
    return (
      <div>
        <div>city:{cityName}</div>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <button onClick={this.changeBtn2.bind(this)}>改变城市</button>
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
    changeBtn: (city) => {
      dispatch(change(city))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)

