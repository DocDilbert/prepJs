import app_styles from './app.css';
import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className={app_styles.title}>
                Applikation
            </div>
        );
    }
}
export default App;