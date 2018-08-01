import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./QR.css";
import axios from 'axios';

class QR extends React.Component {

    componentDidMount = () => {
        axios.get('/api/qr').then(response => {
            console.log(response);
        });
    }

    toBillPage = () => {
        window.location = "/bill";
    }
    
    render() {
        return (
        <div>
            <img onClick={this.toBillPage} src="https://www.qrstuff.com/images/sample.png" className="qr-code" alt="QR-Dummy" height="200px" width="200px"/>
        <br />
            <div className="txt-size">
                <TextField className="qr-text" label="enter code here" />
            </div>
        <br />
            <div className="btn-float">
                <Button className="qr-btn" variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </div>
        )
    }
}

export default QR;