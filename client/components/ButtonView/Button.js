import React, { PropTypes } from 'react'

var styles = {
  size: {
    width: "100vw",
    height: "33.33vh",
    border: 0
  },
  margin: {
    margin: "0"
  },
  font: {
    color: "#555250",
    fontSize: "6vw",
    font: "bold"
  }
}

const Button = React.createClass({
  render () {
    return (
      <button style={Object.assign(styles.size, styles.margin, styles.font, this.props.style)}>{this.props.text}</button>
    )
  }
})

export default Button
