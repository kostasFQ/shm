import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setShopAddressValue} from "../../actions/index";

class ShopAddressInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
          warning:null
        };
    }


    addAddress = () => {
        const currentValue = this.shopAddressInput.value;
        const wordsArr = currentValue.split(/[,]/).reverse();

        if (currentValue.length < 2) {
            this.setState({warning : "поле не может содержать менее 2х символов"});
        }
        else if(currentValue.search(/\D/) === -1) {
            this.setState({warning : "поле не может содержать только цифры"});
        }
        else if(currentValue.includes(',') === false) {
            this.setState({warning : 'вводить значения необходимо через запятую'})
        }
        else if(wordsArr.length < 3) {
            this.setState({warning : "возможно не верно введены данные"});
        }

        else {
            console.log('addAddress', currentValue);
            const building = wordsArr[0];
            const street = wordsArr[1];
            const district= wordsArr[2];
            console.log(wordsArr);

            this.props.onAddAddress(building, street, district);
            this.setState({warning : null});
        }

    };

    render(){
        return(
            <div className='label'>
                <label>Адрес:&nbsp;</label>
                <input type="text"
                       className='input'
                       placeholder='Район, улица, номер дома'
                       ref={(input) => {this.shopAddressInput = input}}
                       onBlur={this.addAddress}
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
        localStore : state
    }),
    dispatch => ({
        onAddAddress: (building, street, district) => {
            dispatch(setShopAddressValue(building, street, district));
        }
    })
)(ShopAddressInput)