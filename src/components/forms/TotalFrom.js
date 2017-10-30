import React, {Component} from 'react';
import { connect } from 'react-redux';

import './CSS/formsCSS.css';

class Total extends Component {

    render() {
        return (
            <div className='totalForm'>
                Магазин&nbsp;:&nbsp;{this.props.FormStore.shop}
                <br/>
                Адрес&nbsp;:&nbsp;{this.props.FormStore.address}
                <div>
                    <button>ADD</button>
                </div>

            </div>
        )
    }
}

export default connect(
    globalStore => ({
    FormStore : globalStore
}) )(Total);