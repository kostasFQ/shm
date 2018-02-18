import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import  baseUrl  from '../../../server/utils';

import './CSS/formsCSS.css';

class Total extends Component {

    submit = () => {
        const data = this.props.FormStore;
        axios.post(`${baseUrl}/shops`, data)
        .then(
            location.reload()
        );
    };


    render() {
        console.log('total form, shop-->', this.props.FormStore.shop.value);
        console.log('total form, address.district-->', this.props.FormStore.address.district.value);
        console.log('total form, address.street-->', this.props.FormStore.address.street.value);
        console.log('total form, address.building-->', this.props.FormStore.address.building.value);
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
                    </button> : <button
                        className='submitButton'
                        onClick={this.submit} disabled={true} style={{background: 'lightgray', cursor : 'default', border : '1px solid lightgray'}}>
                        <span className='buttonText'>Добавить магазин</span>
                    </button>
                }
            </div>
        )
    }
}

export default connect(
    globalStore => ({
    FormStore : globalStore.shopListStore
}) )(Total);