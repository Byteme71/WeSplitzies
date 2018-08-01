import React from 'react';
import axios from "axios";

class Settings extends React.Component {
    
    componentDidMount = () => {
        axios.get('/api/settings').then(response => {
            console.log(response);
        });
    }

    render() {
        return (
            <div>Settings Page!</div>
        )
    }
}

export default Settings;