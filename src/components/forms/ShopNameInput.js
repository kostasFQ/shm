import React, {Component} from 'react';
import { connect } from 'react-redux';

class ShopNameInput extends Component {
    constructor(props) {
        super(props);
    }
    addShop() {
        console.log('addShop!', this.shopNameInput.value);
        this.props.onAddShop(this.shopNameInput.value);
    }

    render() {
        return (
            <div className="label" style={{height:'35px'}}>
                <label>Название магазина:&nbsp;</label>
                <input type="text"
                       onBlur={this.addShop.bind(this)}
                       ref={(input) => {this.shopNameInput = input}}/>
                <br/>
                <ul>
                    {this.props.testStore.map( (val, i) =>
                        <li key={i}>{val}</li>
                    )}
                </ul>
            </div>
            <div>
                testings
            </div>
        )
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddShop: shopName => {
            dispatch({ type: 'SET_SHOPNAME', payload: shopName });
        }
    })
)(ShopNameInput);