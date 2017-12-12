import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setShopAddressValue} from "../../actions/index";
import axios from 'axios';

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
        let building;
        let street;
        let district;
        let coords;
        let latitude;
        let longitude;

        if (currentValue.length < 10) {
            this.setState({warning : "недостаточное количество данных"});
        }
        else if(currentValue.search(/\D/) === -1) {
            this.setState({warning : "поле не может содержать только цифры"});
        }
        else if(wordsArr.length !== 3) {
            this.setState({warning : 'неверно введены данные'})
        }

        else {
            building = wordsArr[0].trim();
            street = wordsArr[1].trim();
            district = wordsArr[2].trim();


            coords= axios.get('https://geocode-maps.yandex.ru/1.x/?format=json&geocode=Брест,'+street+','+building)
                .then( response => {
                    coords = response.data.response.GeoObjectCollection.featureMember["0"].GeoObject.Point.pos.split(' ');
                    latitude = +coords[1];
                    longitude = +coords[0];

                    this.props.onAddAddress(building, street, district, latitude, longitude);
                    this.setState({warning : null});
                })
                .catch ( (error) => console.log(error) );

        }



    };

    render(){
        return(
            <div className='label'>
                <label>Адрес:&nbsp;</label>
                <input type="text"
                       className='input'
                       placeholder='Формат ввода адреса : район, улица, №дома'
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
        onAddAddress: (building, street, district, latitude, longitude) => {
            dispatch(setShopAddressValue(building, street, district, latitude, longitude));
        }
    })
)(ShopAddressInput)