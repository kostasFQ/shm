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
                <span className='nameShop'>Название магазина:</span>
                <input type="text" name="shopName"
                       defaultValue={this.props.localStore.shop.value}
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
        localStore: state.shopListStore
    }),
    dispatch => ({
        onAddShop: shopName => {
            dispatch(setShopName(shopName));
        }
    })
)(ShopNameInput);