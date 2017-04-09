import React from 'react'

const styles = {
  floatingButton: {
    position: "fixed",
    top: "5%",
    left: "2vw",
    zIndex: 1
  },
  transparentIcon: {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    overflow: "hidden",
    outline:"none"
  },
  iconSize: {
    width: "5vw",
    height: "5vw"
  }
}

export default class Hamburger extends React.Component {
  render() {
    return (
      <button style={Object.assign(styles.floatingButton, styles.transparentIcon)} onClick={this.props.onClick}><img style={styles.iconSize} src="./assets/hamburger.png"/></button>
    )
  }
}
