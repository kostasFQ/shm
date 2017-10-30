import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setShopAddressValue} from "../../actions/index";

class ShopAddressInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
          warning:null
        };

        this.addAddress = this.addAddress.bind(this);
    }


    addAddress() {
        let currentValue = this.shopAddressInput.value;

        if (currentValue.length < 2) {
            this.setState({warning : "адрес не может содержать менее 2х символов"});
        }
        else if(currentValue.search(/\D/) === -1) {
            this.setState({warning : "адрес не может содержать только цифры"});
        }
        else {
            console.log('addAddress', currentValue);
            this.props.onAddAddress(currentValue);

            this.setState({warning : null});
        }

    }

    render(){
        return(
            <div className='label'>
                <label>Адрес:&nbsp;</label>
                <input type="text"
                       onBlur={this.addAddress}
                       ref={(input) => {this.shopAddressInput = input}}/>
                <div style={{color:'red'}}>
                    {this.state.warning}
                </div>
            </div>


        )
    }
}

export default connect(
    state => ({
        localStore : state
    }),
    dispatch => ({
        onAddAddress: address => {
            dispatch(setShopAddressValue(address));
        }
    })
)(ShopAddressInput)