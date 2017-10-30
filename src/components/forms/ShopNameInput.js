import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setFieldValue, setNameShop} from "../../actions/index";

class ShopNameInput extends Component {
    constructor(props) {
        super(props);

        this.addShop = this.addShop.bind(this); 
    }

    addShop() {
        console.log('addShop!', this.shopNameInput.value);
        this.props.onAddShop(this.shopNameInput.value);
    }

    render() {
        return (
            <div className="label" >
                <label>Название магазина :&nbsp;</label>
                <input type="text"
                       style={{width:'40%'}}
                       defaultValue={this.props.testStore[0]}
                       ref={(input) => {this.shopNameInput = input}}/>
                <button onClick={this.addShop}>Применить</button>
                {/*<br/>
                <ul>
                    {this.props.testStore.map( (val, i) =>
                        <li key={i}>{val}</li>
                    )}
                </ul>*/}

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
            dispatch(setFieldValue(shopName));
        }
    })
)(ShopNameInput);