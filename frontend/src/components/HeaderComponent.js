// HeaderComponent.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: [
                'This Website Transaction Financial DINAMIK-18 !!',
            ],
            currentIndex: 0,
            currentText: '',
        };
    }

    componentDidMount() {
        this.updateText();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateText() {
        const { titles, currentIndex } = this.state;
        const text = titles[currentIndex];

        let index = 0;
        this.interval = setInterval(() => {
            if (index === text.length) {
                clearInterval(this.interval);
                setTimeout(() => {
                    this.setState(
                        (prevState) => ({
                            currentIndex: (prevState.currentIndex + 1) % titles.length,
                        }),
                        () => {
                            setTimeout(() => {
                                this.updateText();
                            }, 1000);
                        }
                    );
                }, 1000);
            } else {
                this.setState({
                    currentText: text.substring(0, index + 1),
                });
                index++;
            }
        }, 100);
    }

    render() {
        const { currentText } = this.state;
        const { pageTitle, headerColor, showHeader, pageType } = this.props;

        if (!showHeader) {
            return null;
        }

        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: headerColor || '#3498db' }}>
                    <div className="container">
                    <Link to="/" className="navbar-brand" style={{ marginLeft: '-300px', fontWeight: 'bold', fontSize: '25px' }}>
                            {pageTitle || currentText}
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;
