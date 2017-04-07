import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ButtonView from './ButtonView'
import CustomerListView from './CustomerListView'

const title = "고객 리스트"

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={ButtonView}/>
          <Route exact path="/customerListView" component={CustomerListView}/>
        </div>
      </Router>
    )
  }
}
