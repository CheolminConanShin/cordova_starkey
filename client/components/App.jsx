import React from 'react'
import styles from './App.css'

var videoURL = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

export default class App extends React.Component {
    componentWillMount() {
        document.body.style.margin = 0;
        document.body.style.padding = 0;
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.hello}>Hello Conan</div>
            </div>
        );
    }
}
