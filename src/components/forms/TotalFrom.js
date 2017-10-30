import React, {Component} from 'react';
import { connect } from 'react-redux';

import './CSS/formsCSS.css';

class Total extends Component {

    render() {
        return (
            <div className='totalForm'>
                Магазин&nbsp;:&nbsp;{this.props.FormStore[0]}
                <button>ADD</button>
            </div>
        )
    }
}

export default connect(
    globalStore => ({
    FormStore : globalStore
}) )(Total);