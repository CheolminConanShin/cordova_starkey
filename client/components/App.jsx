import React from 'react'
import styles from './App.css'

const title = "Starkey Customer List"

export default class App extends React.Component {
    componentWillMount() {
        document.body.style.margin = 0;
        document.body.style.padding = 0;
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>{title}</div>
                <div>
                    <div>Hello</div>
                    <div>Hello2</div>
                </div>
            </div>
        );
    }
}
