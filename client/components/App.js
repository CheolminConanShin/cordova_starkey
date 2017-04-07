import React from 'react'
import CustomerListView from './customer_list_view'

const title = "고객 리스트"

export default class App extends React.Component {
    render() {
        return(
          <CustomerListView/>
        )
    }
}
