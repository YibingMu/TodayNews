import React, { Component } from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'

class PCIndex extends Component {
    render() {
        return (
            <div>
                <PCHeader />
                <PCFooter />
            </div>
        );
    }
}

export default PCIndex;