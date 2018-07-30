import React from 'react';

class QR extends React.Component {
    toBillPage = () => {
        window.location.href = "/bill";
    }
    
    render() {
        return (
        <div>
    
                <img onClick={this.toBillPage}src="https://www.qrstuff.com/images/sample.png" height="200px" width="200px"/>        

        </div>
        )
    }
}

export default QR;