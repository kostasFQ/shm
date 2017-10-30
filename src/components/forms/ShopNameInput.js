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
            console.log('addAddress', currentValue);
            this.props.onAddShop(currentValue);

            this.setState({warning : null});
        }
    }

    render() {
        return (
            <div className="label" style={{height:'35px'}}>
                <label>Название магазина:&nbsp;</label>
                <input type="text"
                       onBlur={this.addShopName}
                       ref={(input) => {this.shopNameInput = input}}/>
                <br/>
                {this.state.warning}

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
            dispatch(setShopName(shopName));
        }
    })
)(ShopNameInput);