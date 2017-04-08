import React from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import ButtonView from './ButtonView'
import CustomerListView from './CustomerListView'
import ReactBurgerMenu from './ReactBurgerMenu'
import ReactSideBar from './ReactSideBar'
const title = "고객 리스트"

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={ButtonView}/>
          <Route exact path="/customerListView" component={CustomerListView}/>
          <Route exact path="/reactBurgerMenu" component={ReactBurgerMenu}/>
          <Route exact path="/reactSideBar" component={ReactSideBar}/>
        </div>
      </Router>
    )
  }
}
