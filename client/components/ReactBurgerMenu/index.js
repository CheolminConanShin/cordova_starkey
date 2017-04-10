import React from 'react'
import ReactSideBar from '../ReactSideBar'
import temp from './temp'

const title = "버거 메뉴 테스트"

export default class ReactBurgerMenu extends React.Component {
  render() {
    return(
      <ReactSideBar headerContent={title} mainView={temp} />
    )
  }
}
