import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setShopName} from "../../actions/index";

class ShopNameInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shopName: {
              value: '',
              verificate: undefined
            },
            warning:null
        };
    }

    addShopName = () => {
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
    };

    handleInputShopName = (event) => {
        if(event.target.value.length < 3 ){
            this.setState({
                shopName: {
                    value: (event.target.value).trim(),
                    verificate: false
                },
                warning:'короткое название'
            });
        } else {
            this.setState({
                shopName: {
                    value: (event.target.value).trim(),
                    verificate: true
                },
                warning: null
            });
        }
        console.log(this.state.shopName)
    };
    verification = () =>{
        if(this.state.shopName.value.length === 0) {
            this.setState({
                shopName: {
                    value: (this.state.shopName.value).trim(),
                    verificate: false
                },
                warning: 'поле дожно быть заполнено'
            });
        }
        else if(this.state.warning !== null) {
            return;
        }
        else {
            this.props.onAddShop(this.state.shopName);
            this.setState({warning : null});
        }
    };

    render() {
        return (
            <div className="label" onBlur={this.verification}>
                Название магазина:
                <input type="text" name="shopName"
                       className={this.state.shopName.verificate === undefined ?  'input'  : this.state.shopName.verificate ? 'input' :'input redBorder'}
                       onChange={this.handleInputShopName}
                />
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