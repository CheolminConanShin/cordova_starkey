import React from 'react'
import styles from './index.css'
import CustomerTable from './customer_list'

const title = "고객 리스트"

export default class CustomerListView extends React.Component {
    componentWillMount() {
        document.body.style.margin = 0;
        document.body.style.padding = 0;
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>{title}</div>
                <div>
                    <CustomerTable/>
                </div>
            </div>
        );
    }
}
