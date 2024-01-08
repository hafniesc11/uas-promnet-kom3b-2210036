import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const footerStyle = {
            position: 'fixed',
            bottom: 0,
            width: '100%',
            backgroundColor: '#f1f1f1',
            padding: '10px',
            textAlign: 'center',
        };

        return (
            <div>
                <footer style={footerStyle}>
                    <span style={{ color: '#333' }}>
                        Copyright by Transaksi Keuangan 2024 @HafnieSaufaChandrika.net
                    </span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;
