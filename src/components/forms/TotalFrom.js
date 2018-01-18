import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './CSS/formsCSS.css';

class Total extends Component {

    submit = () => {
        const data = this.props.FormStore;
        axios.post('http://localhost:8080/shops', data)
        .then(location.reload());
    };


    render() {
        console.log('totalForm', this.props.FormStore);
        return (
            <div>
                <button
                    className='submitButton'
                    onClick={this.submit}
                >Добавить магазин</button>
            </div>
        )
    }
}

export default connect(
    globalStore => ({
    FormStore : globalStore
}) )(Total);