import './markerStyle.css'

import React, {Component} from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

export default class YandexMap extends Component {

    render() {
        const mapState = { center: [55.76, 37.64], zoom: 10 };
        return (
            <div className="map">
                <YMaps>
                    <Map state={mapState}>
                        <Placemark
                            geometry={{
                                coordinates: [55.751574, 37.573856]
                            }}
                            properties={{
                                hintContent: 'Собственный значок метки',
                                balloonContent: 'Это красивая метка'
                            }}
                        />

                    </Map>
                </YMaps>
            </div>
        )
    }
}