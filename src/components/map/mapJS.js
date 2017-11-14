
import React, {Component} from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

export default class YandexMap extends Component {

    render() {
        const mapState = { center: [52.105783, 23.685234], zoom: 10};

        const shops = this.props.shops;

        return (
            <div  className="map">
                <YMaps>
                    <Map state={mapState} width={'100%'} height={'100%'}>
                        {
                            shops.map( (shop)=> {
                                if(this.props.districtsFilter === shop.district){
                                    return <Placemark
                                        key={'placemark_' + shop._id}
                                        geometry={{
                                            coordinates: [shop.address.latitude, shop.address.longitude]
                                        }}
                                        properties={{
                                            iconContent: shop.shop
                                        }}
                                        options={{
                                            preset: 'islands#blackStretchyIcon',
                                        }}
                                    />
                                }
                                if(this.props.districtsFilter === 'all') {
                                    return <Placemark
                                        key={'placemark_' + shop._id}
                                        geometry={{
                                            coordinates: [shop.address.latitude, shop.address.longitude]
                                        }}
                                        properties={{
                                            iconContent: shop.shop
                                        }}
                                        options={{
                                            preset: 'islands#blackStretchyIcon',
                                        }}
                                    />
                                }
                            })
                        }

                    </Map>
                </YMaps>
            </div>
        )
    }
}