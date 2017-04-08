import React, { PropTypes } from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'
var styles = {
  container: {
    backgroundColor: "rgb(245, 235, 220)",
    position: "fixed",
    width: "100%",
    height: "100%"
  }
}

const ButtonView = React.createClass({
  render () {
    return (
      <div style={styles.container}>
        <div>
          <Link to="/customerListView"><Button text="회원보기"/></Link>
          <Link to="/addNewCustomerView"><Button text="회원추가"/></Link>
          <Link to="/reactBurgerMenu"><Button text="버거메뉴"/></Link>
          <Link to="/reactSideBar"><Button text="사이드바"/></Link>
        </div>
      </div>
    )
  }
})

export default ButtonView
