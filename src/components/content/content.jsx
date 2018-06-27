import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllShops } from '../../actions/shopsStoreActions';
import MainFilter from '../mainFilter/mainFilter';
import { site } from '../../../utils';

import './content.css';

class Content extends Component {
  /* constructor(props) {
    super(props);
    this.state = {shops:[]}
  } */

  componentDidMount() {
    axios.get(`${site}/shops`)
      .then((response) => {
        this.getShops(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getShops = (shops) => {
    this.props.onGetShops(shops);
  };

  render() {
    return (
      <div>
        <MainFilter />
      </div>
    );
  }
}

export default connect(
  (globalStore) => {
    return {
      localStore: globalStore.shopsStore,
    };
  },
  (dispatch) => {
    return {
      onGetShops: (shops) => {
        dispatch(getAllShops(shops));
      },
    };
  },
)(Content);
