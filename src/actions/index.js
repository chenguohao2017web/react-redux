export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

export const increment = (value) => {
  return {
    type: INCREMENT,
    value: value
  }
}

export const decrement = (value) => {
  return {
    type: DECREMENT,
    value: value
  }
}

export const change = (name) => {
  return {
    type: 'changeName',
    cityName: name
  }
}