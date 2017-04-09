import React, { PropTypes } from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'

var styles = {
  container: {
    position: "fixed",
    width: "100%",
    height: "100%"
  },
  firstButtonColor: {
    backgroundColor: "#FFE2E2"
  },
  secondButtonColor: {
    backgroundColor: "#FFF6F2"
  },
  thirdButtonColor: {
    backgroundColor: "#E8E0DC"
  },
  fourthButtonColor: {
    backgroundColor: "#FFE8F6"
  }
}

// <Link to="/reactBurgerMenu"><Button style={styles.thirdButtonColor} text="버거메뉴"/></Link>
const ButtonView = React.createClass({
  render () {
    return (
      <div style={styles.container}>
        <div>
          <Link to="/customerListView"><Button style={styles.firstButtonColor} text="회원보기"/></Link>
          <Link to="/addNewCustomerView"><Button style={styles.secondButtonColor} text="회원추가"/></Link>
          <Link to="/reactSideBar"><Button style={styles.thirdButtonColor} text="사이드바"/></Link>
        </div>
      </div>
    )
  }
})

export default ButtonView
