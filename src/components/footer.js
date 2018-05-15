import React from 'react';
import '../App.css';

class footer extends React.Component {
    render() {
        return (
            <footer className="container-fluid text-center">
                <p>Online Store Copyright</p>
                <form className="form-inline">Get deals:
                    <input type="email" className="form-control" size="50" placeholder="Email Address" />
                    <button type="button" className="btn btn-danger">Sign Up</button>
                </form>
            </footer>
        );
    }
}

export default footer;