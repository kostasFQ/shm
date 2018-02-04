
import React, {Component} from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import { connect } from 'react-redux';

class YandexMap extends Component {

    render() {
        const shops = this.props.shops;

        const date = new Date();
        let balloon = 'islands#blackStretchyIcon';
        console.log(date.toString(), shops);



        return (
            <div  className="map">
                <YMaps>
                    <Map state={
                        {
                            center:[
                                this.props.localStore.mapLatitude,
                                this.props.localStore.mapLongitude],
                            zoom: this.props.localStore.mapZoom
                        }
                    } width={'100%'} height={'100%'}>
                        {
                            shops.map( (shop)=> {
                                if(this.props.districtsFilter === shop.address.district){
                                    return <Placemark
                                        key={'placemark_' + shop._id}
                                        geometry={{
                                            coordinates: [shop.address.latitude, shop.address.longitude]
                                        }}
                                        properties={{
                                            iconContent: shop.shop,
                                            balloonContent: 'Адрес: '+shop.address.street+', '+shop.address.building,
                                        }}
                                        options={{
                                            preset: balloon,
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
                                            iconContent: shop.shop,
                                            balloonContent:
                                            `Адрес: ${shop.address.street}, ${shop.address.building}`,
                                        }}
                                        options={{
                                            preset: balloon,
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

export default connect(
    state => ({
        localStore : state.uiStore
    })
)(YandexMap)