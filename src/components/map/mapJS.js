
import React, {Component} from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

export default class YandexMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mapState:{}
        }
    }

    componentDidMount() {
        this.setState({mapState: { center: [52.105783, 23.685234], zoom: 10} });
    }

    render() {

        const shops = this.props.shops;
        return (
            <div  className="map">
                <YMaps>
                    <Map state={this.state.mapState} width={'100%'} height={'100%'}>
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
                                            iconContent: shop.shop,
                                            balloonContent: 'Адрес: '+shop.address.street+', '+shop.address.building,
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