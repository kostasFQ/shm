import './markerStyle.css'

import React, {Component} from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

export default class YandexMap extends Component {

    render() {
        const mapState = { center: [52.104125, 23.755530], zoom: 13};

        const shops = this.props.shops;

        return (
            <div className="map">
                <YMaps>
                    <Map state={mapState} width={'100%'} height={'100%'}>
                        {
                            shops.map( (shop)=>
                                <Placemark
                                    key={'placemark_' + shop._id}
                                    geometry={{
                                        coordinates: [shop.latitude, shop.longitude]
                                    }}
                                    properties={{
                                        iconContent: shop.shopName
                                    }}
                                    options={{
                                        preset: 'islands#blackStretchyIcon',
                                    }}
                                />
                            )
                        }

                    </Map>
                </YMaps>
            </div>
        )
    }
}