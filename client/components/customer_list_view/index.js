import React from 'react'
import CustomerTable from './customer_list'

const title = "고객 리스트"

var styles = {
  title: {
    position: "relative",
    color: "white",
    backgroundColor: "rgb(86, 86, 86)",
    borderRadius: "25px",
    margin: "3% 10% 3% 10%",
    padding: "10px 20px 10px 20px",
    fontSize: "4vw",
    textAlign: "center"
  },
  container: {
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(192, 159, 128)"
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
