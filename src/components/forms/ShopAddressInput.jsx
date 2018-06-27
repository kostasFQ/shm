import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { setShopAddressValue } from '../../actions/index';

class ShopAddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: null,
      city: {
        value: 'Брест',
        verificate: true,
      },
      district: {
        value: '',
        verificate: undefined,
      },
      street: {
        value: '',
        verificate: undefined,
      },
      building: {
        value: '',
        verificate: undefined,
      },
      latitude: null,
      longitude: null,
    };
  }

  handleChange = (event) => {
    if (event.target.name !== 'building') {
      if (event.target.value.length < 4 || /[0-9a-zA-Z]/.test(event.target.value)) {
        this.setState({
          [event.target.name]: {
            value: ((event.target.value).toLowerCase()).trim(),
            verificate: false,
          },
          warning: 'недопустимое значение',
          event: event.target.name,
        });
      } else {
        this.setState({
          [event.target.name]: {
            value: ((event.target.value).toLowerCase()).trim(),
            verificate: true,
          },
          warning: '',
        });
      }
    } else if (event.target.value.length < 1 || !(/[0-9]([а-яА-я]*)$/.test(event.target.value))) {
      this.setState({
        [event.target.name]: {
          value: ((event.target.value).toLowerCase()).trim(),
          verificate: false,
        },
        warning: 'не верно введены данные',
      });
    } else {
      this.setState({
        [event.target.name]: {
          value: ((event.target.value).toLowerCase()).trim(),
          verificate: true,
        },
        warning: '',
      });
    }
  };

  verification = (event) => {
    if (this.state[event.target.name].value.length === 0) {
      this.setState({
        [event.target.name]: {
          value: (this.state[event.target.name].value).trim(),
          verificate: false,
        },
        warning: 'wroooong',
      });
    } else {
      let coordinates = axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${this.state.city.value},${this.state.street.value},${this.state.building.value}`)
        .then((response) => {
          coordinates = response.data.response.GeoObjectCollection.featureMember['0'].GeoObject.Point.pos.split(' ');
          this.setState({
            latitude: +coordinates[1],
            longitude: +coordinates[0],
          });
          this.props.onAddAddress(this.state);
          this.setState({ warning: null });
        });
    }
  };

  render() {
    // todo uncomment city
    return (
      <div className="label">
        <fieldset>
          <legend>Адрес:</legend>
          <div onBlur={this.verification}>
            <div className="addressInput" >
              {/* Город:
              <input type="text" size="15" name="city"
                className={this.state.city.verificate === undefined ?  null  : this.state.city.verificate ? null :'redBorder'}
                onChange={this.handleChange}
              /> */}
            </div>
            <div className="addressInput" >
            Район:
              <input
                type="text"
                size="15"
                name="district"
                className={
                  this.state.district.verificate === undefined ?
                    null : this.state.district.verificate ?
                      null : 'redBorder'}
                onChange={this.handleChange}
              />
            </div>
            <div className="addressInput">
              Улица:
              <input
                type="text"
                size="20"
                name="street"
                className={
                  this.state.street.verificate === undefined ?
                    null : this.state.street.verificate ?
                      null : 'redBorder'}
                onChange={this.handleChange}
              />
            </div>
            <div className="addressInput">
             Дом:
              <input
                type="text"
                size="5"
                name="building"
                className={
                  this.state.building.verificate === undefined ?
                    null : this.state.building.verificate ?
                      null : 'redBorder'}
                onChange={this.handleChange}
              />
            </div>
            <div style={{ color: 'red' }}>
              {this.state.warning}
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      localStore: state.shopListStore,
    };
  },
  (dispatch) => {
    return {
      onAddAddress: (address) => {
        dispatch(setShopAddressValue(address));
      },
    };
  },
)(ShopAddressInput);
