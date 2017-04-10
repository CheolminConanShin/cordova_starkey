import React from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import ButtonView from './ButtonView'
import CustomerListView from './CustomerListView'
import ReactBurgerMenu from './ReactBurgerMenu'
import NewCustomerView from './NewCustomerView'
const title = "고객 리스트"

var styles = {
  container: {
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(245, 235, 220)"
  }
}

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div style={styles.container}>
          <Route exact path="/" component={ButtonView}/>
          <Route exact path="/customerListView" component={CustomerListView}/>
          <Route exact path="/addNewCustomerView" component={NewCustomerView}/>
          <Route exact path="/reactSideBar" component={ReactBurgerMenu}/>
        </div>
      </Router>
    )
  }
}
