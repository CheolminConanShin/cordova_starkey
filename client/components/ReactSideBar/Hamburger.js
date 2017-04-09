import React from 'react'

const styles = {
  floatingButton: {
    position: "fixed",
    left: "2vw",
    lineHeight: "4vw",
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
    width: "4vw",
    height: "4vw"
  }
}

export default class Hamburger extends React.Component {
  render() {
    return (
      <button style={Object.assign(styles.floatingButton, styles.transparentIcon)} onClick={this.props.onClick}><img style={styles.iconSize} src="./assets/hamburger.png"/></button>
    )
  }
}
