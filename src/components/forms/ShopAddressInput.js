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
        let building = wordsArr[0].substring(1);
        let street = wordsArr[1].substring(1);
        let district = wordsArr[2];
        let coords;
        let latitude;
        let longitude;


        if (currentValue.length < 10) {
            this.setState({warning : "недостаточное количество данных"});
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
            coords= axios.get('https://geocode-maps.yandex.ru/1.x/?format=json&geocode=Брест,'+street+','+building)
                .then( response => {
                    coords = response.data.response.GeoObjectCollection.featureMember["0"].GeoObject.Point.pos.split(' ');
                    console.log(coords);
                    latitude = coords[0];
                    longitude = coords[1];

                    console.log(latitude);

                    this.props.onAddAddress(building, street, district, latitude, longitude);
                    this.setState({warning : null});
                })
                .then()
                .catch ( (error) => console.log(error) );

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
        onAddAddress: (building, street, district, latitude, longitude) => {
            dispatch(setShopAddressValue(building, street, district, latitude, longitude));
        }
    })
)(ShopAddressInput)