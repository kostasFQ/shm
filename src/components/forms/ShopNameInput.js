import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setShopName} from "../../actions/index";

class ShopNameInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            warning:null
        };

        this.addShopName = this.addShopName.bind(this);
    }

    addShopName() {
        let currentValue = this.shopNameInput.value;

        if (currentValue.length < 2) {
            this.setState({warning : "название не может содержать менее 2х символов"});
        }
        else if(currentValue.search(/\D/) === -1) {
            this.setState({warning : "название не может содержать только цифры"});
        }
        else {
            console.log('addNameShop', currentValue);
            this.props.onAddShop(currentValue);

            this.setState({warning : null});
        }
    }

    render() {
        return (
            <div className="label">
                <label>Название магазина:&nbsp;</label>
                <input type="text"
                       className='input '
                       onBlur={this.addShopName}
                       ref={(input) => {this.shopNameInput = input}}/>
                <br/>
                <div style={{color:'red'}}>
                    {this.state.warning}
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        localStore: state
    }),
    dispatch => ({
        onAddShop: shopName => {
            dispatch(setShopName(shopName));
        }
    })
)(ShopNameInput);