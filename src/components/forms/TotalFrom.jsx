import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { site } from '../../../data/site';
import { getAllShops } from '../../actions/shopsStoreActions';
import { showFormA } from '../../actions/uiActions';
import { clear } from '../../actions/index';

import './CSS/forms.css';

class Total extends Component {
  componentWillUnmount() {
    this.props.onClearForm();
  }

  getShops = (shops) => {
    this.props.onGetShops(shops);
    this.props.onShowForm('inputsFormShow', this.props.uiStore.inputsFormShow);
  };

  submit = () => {
    axios.post(`${site}/shops`, this.props.FormStore)
      .then(axios.get(`${site}/shops`)
        .then((response) => {
          this.getShops(response.data);
        })
        .catch((error) => {
          throw (error);
        }));
  };

  render() {
    return (
      <div>
        {this.props.FormStore.shop.verificate &&
                this.props.FormStore.address.city.verificate &&
                this.props.FormStore.address.district.verificate &&
                this.props.FormStore.address.street.verificate &&
                this.props.FormStore.address.building.verificate ?
                  <button
                    name="inputsFormShow"
                    className="submitButton"
                    onClick={this.submit}
                  >
                    <span className="buttonText">Добавить магазин</span>
                  </button> :
                  <button
                    name="inputsFormShow"
                    className="submitButton"
                    onClick={this.submit}
                    disabled
                    style={{ cursor: 'default', background: 'gray' }}
                  >
                    <span className="buttonText">Добавить магазин</span>
                  </button>
              }
      </div>
    );
  }
}

export default connect(
  (globalStore) => {
    return {
      FormStore: globalStore.shopListStore,
      uiStore: globalStore.uiStore,
    };
  },
  (dispatch) => {
    return {
      onGetShops: (shops) => {
        dispatch(getAllShops(shops));
      },
      onShowForm: (name, bool) => {
        dispatch(showFormA(name, bool));
      },
      onClearForm: () => {
        dispatch(clear());
      },
    };
  },

)(Total);
