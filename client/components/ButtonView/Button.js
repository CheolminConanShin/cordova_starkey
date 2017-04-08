import React, { PropTypes } from 'react'

var styles = {
  size: {
    width: "100vw",
    height: "25vh",
    border: 0
  },
  margin: {
    margin: "0"
  },
  font: {
    color: "white",
    fontSize: "4vw"
  },
  background: {
    backgroundColor: "rgb(70, 93, 114)"
  }
}

const Button = React.createClass({
  render () {
    return (
      <button style={Object.assign(styles.size, styles.margin, styles.font, styles.background)}>{this.props.text}</button>
    )
  }
})

export default Button
