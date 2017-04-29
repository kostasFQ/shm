import './mapCSS.css';

import React, {Component} from 'react';
import {Map, Marker, MarkerLayout} from 'yandex-map-react';

const mapState = {
    controls : ['default']
};

export default class YandexMap extends Component {

    render() {
        return (
            <Map width = '985px' height = '580px' state = {mapState}
                center={[52.104125, 23.755530]}
                zoom={16}
            />
        )
    }
}