import React from 'react'
import ReactSideBar from '../ReactSideBar'
import temp from './temp'

const title = "신규고객"

export default class NewCustomerView extends React.Component {
    render() {
        return (
              <ReactSideBar headerContent={title} mainView={temp} />
        );
    }
}
