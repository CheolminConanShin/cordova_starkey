import React from 'react'
const Menu = require('react-burger-menu').slide

export default class ReactBurgerMenu extends React.Component {
  render() {
    return(
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="customerList" className="menu-item" href="/#/customerListView">고객리스트</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    )
  }
}
