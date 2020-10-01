import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    render() {
        if (this.state.hasError) {
            return <h1>That wasn't supposed to happen</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;