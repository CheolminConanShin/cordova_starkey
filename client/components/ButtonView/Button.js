import React, { PropTypes } from 'react'

var styles = {
  size: {
    width: "30vw",
    height: "30vw"
  },
  margin: {
    margin: "10vw"
  },
  font: {
    fontSize: "4vw"
  }
}

const Button = React.createClass({
  render () {
    return (
      <button style={Object.assign(styles.size, styles.margin, styles.font)} className="btn btn-primary">{this.props.text}</button>
    )
  }
})

export default Button
