import React from 'react'
import CustomerTable from './CustomerList'

const title = "고객 리스트"

var styles = {
  title: {
    position: "relative",
    color: "white",
    backgroundColor: "rgb(86, 86, 86)",
    borderRadius: "25px",
    margin: "0% 7% 3% 7%",
    padding: "10px 20px 10px 20px",
    fontSize: "4vw",
    textAlign: "center"
  },
  container: {
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(245, 235, 220)",
    padding: "3%"
  }
}

export default class CustomerListView extends React.Component {
    componentWillMount() {
        document.body.style.margin = 0;
        document.body.style.padding = 0;
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.title}>{title}</div>
                <div>
                    <CustomerTable/>
                </div>
            </div>
        );
    }
}
