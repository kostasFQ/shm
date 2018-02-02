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
        return (
            <div>
                {this.props.FormStore.shop.verificate &&
                 this.props.FormStore.address.city.verificate &&
                 this.props.FormStore.address.district.verificate &&
                 this.props.FormStore.address.street.verificate &&
                 this.props.FormStore.address.building.verificate ?
                    <button
                        className='submitButton'
                        onClick={this.submit}>
                        <span className='buttonText'>Добавить магазин</span>
                    </button> : null
                }
            </div>
        )
    }
}

export default connect(
    globalStore => ({
    FormStore : globalStore.shopListStore
}) )(Total);