import './markerStyle.css'

import React, {Component} from 'react';
import {Map, Marker, MarkerLayout} from 'yandex-map-react';



const mapControls = {
    controls: [
        'routeEditor',
        'geolocationControl',
        'zoomControl'
    ]
};


export default class YandexMap extends Component {
    render() {
        return (
            <div className="map">
                <Map width='100%'
                     height='100%'
                     state={mapControls}
                     center={[52.104125, 23.755530]}
                     zoom={12}>

                    <Marker lat={this.props.lat} lon={this.props.lon}>
                        <MarkerLayout>
                            <div className="markerPoint">XXX
                            </div>
                        </MarkerLayout>
                    </Marker>
                </Map>
            </div>
        )
    }
}