import './footerCSS.css';

import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footerText">
                <div>production by KST</div>
                <div>2017</div>
            </div>
        )
    }
}