import React, { Component } from 'react'

class Blog extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                { children }
            </div>
        )
    }
}

export default Blog