import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class QR extends React.Component {
    toBillPage = () => {
        window.location.href = "/bill";
    }
    
    render() {
        return (
        <div>
            <img onClick={this.toBillPage}src="https://www.qrstuff.com/images/sample.png" alt="QR-Dummy" height="200px" width="200px"/>        

                <TextField label="enter code here" />
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </div>
        )
    }
}

export default QR;