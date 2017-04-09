import React from 'react'
import CustomerTable from './CustomerList'
import ReactSideBar from '../ReactSideBar'

const title = "고객 리스트"

var styles = {
  title: {
    position: "relative",
    color: "#555250",
    // backgroundColor: "rgb(86, 86, 86)",
    borderRadius: "25px",
    margin: "3% 7% 3% 7%",
    padding: "10px 20px 10px 20px",
    fontSize: "4vw",
    textAlign: "center"
  },
  container: {
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(245, 235, 220)",
    padding: "5% 3%"
  }
}

export default class CustomerListView extends React.Component {
    componentWillMount() {
        document.body.style.margin = 0;
        document.body.style.padding = 0;
    }

    render() {
      const headerContent = <div style={styles.title}>{title}</div>
        return (
            <div style={styles.container}>
                <ReactSideBar headerContent={headerContent} mainView={CustomerTable} />
            </div>
        );
    }
}
