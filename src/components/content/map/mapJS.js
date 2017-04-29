import './mapCSS.css'

import React, {Component} from 'react';
import {Map, Marker, MarkerLayout} from 'yandex-map-react';

const mapControls = {
    controls : [
        'routeEditor',
        'geolocationControl',
        'zoomControl'
    ]
};

export default class YandexMap extends Component {

    render() {
        return (
            <div className="yMap">
                <Map
                    width = '100%'
                    state = {mapControls}
                    center={[52.104125, 23.755530]}
                    zoom={16}
                />
            </div>

        )
    }
}