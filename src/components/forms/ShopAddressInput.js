import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setShopAddressValue} from "../../actions/index";
import axios from 'axios';

class ShopAddressInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            warning:null,
            district:{
                value:'',
                verificate: undefined
            },
            street:{
                value:'',
                verificate: undefined
            },
            building:{
                value:'',
                verificate: undefined
            },
            latitude:null,
            longitude:null
        };
    }

    handleChange = (event) => {
        if(event.target.name !== 'building'){
            if(event.target.value.length < 4 || /[0-9]/.test(event.target.value) ){
                this.setState({
                    [event.target.name]:{
                        value: ( (event.target.value).toLowerCase() ).trim(),
                        verificate: false
                    },
                    warning:'недопустимое значение'
                });
            }


            else {
                this.setState({
                    [event.target.name]:{
                        value: ( (event.target.value).toLowerCase() ).trim(),
                        verificate: true
                    },
                    warning:''
                });
            }
        }

        else {
            if(event.target.value.length < 2){
                this.setState({
                    [event.target.name]:{
                        value: ( (event.target.value).toLowerCase() ).trim(),
                        verificate: false
                    },
                    warning:'wrong length - '
                });
            } else {
                this.setState({
                    [event.target.name]:{
                        value: ( (event.target.value).toLowerCase() ).trim(),
                        verificate: true
                    },
                    warning:''
                });
            }
        }

    };

    verification = (event) => {
        if(this.state[event.target.name].value.length === 0) {
            this.setState({
                [event.target.name]:{
                    value: (this.state[event.target.name].value).trim(),
                    verificate: false
                },
                warning:'wroooong'
            });
        } else {
            let coordinates = axios.get('https://geocode-maps.yandex.ru/1.x/?format=json&geocode=Брест,'+ this.state.street.value +','+ this.state.building.value)
                .then( response => {
                        coordinates = response.data.response.GeoObjectCollection.featureMember["0"].GeoObject.Point.pos.split(' ');
                        this.setState({
                            latitude: +coordinates[1],
                            longitude: +coordinates[0]
                        });
                    this.props.onAddAddress(this.state.building, this.state.street, this.state.district, this.state.latitude, this.state.longitude);
                    this.setState({warning : null});
                    }
                )
        }
        console.log(this.state);
    };


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
                <div onBlur={this.verification}>
                    <div  className='addressInput' >
                        Район:
                        <input type="text" size="15" name="district"
                               className={this.state.district.verificate === undefined ?  null  : this.state.district.verificate ? null :'redBorder'}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div  className='addressInput'>
                        Улица:
                        <input type="text" size='20' name='street'
                               className={this.state.street.verificate === undefined ?  null  : this.state.street.verificate ? null :'redBorder'}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div  className='addressInput'>
                        Дом:
                        <input type="text" size='5' name='building'
                               className={this.state.building.verificate === undefined ?  null  : this.state.building.verificate ? null :'redBorder'}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div style={{color:'red'}}>
                        {this.state.warning}
                    </div>



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