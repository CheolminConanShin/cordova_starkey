import React from 'react'
import CustomerTable from './CustomerTable'
import ReactSideBar from '../ReactSideBar'

const title = "고객 리스트"

export default class CustomerListView extends React.Component {
    render() {
        return (
              <ReactSideBar headerContent={title} mainView={CustomerTable} />
        );
    }
}
