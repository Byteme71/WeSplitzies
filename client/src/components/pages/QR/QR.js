import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class QR extends React.Component {
    render() {
        return (
            <div>
                <TextField label="enter code here" />
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </div>
        )
    }
}

export default QR;