
import React, {Component} from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import { connect } from 'react-redux';

class YandexMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nowTime : null
        }
    }
    componentDidMount() {
        const date = new Date();
        this.setState({nowTime: date.getHours()+':'+date.getMinutes().toString()})
    }

    render() {
        console.log('date ---> ', this.state.nowTime);
        const shops = this.props.shops;

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
                                if(this.props.districtsFilter.toLowerCase() === shop.address.district.toLowerCase()){
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
                                            preset: 'islands#redStretchyIcon',
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
                                            iconContent: `${shop.shop}`,
                                            balloonContent:
                                            `Адрес: ${shop.address.street}, ${shop.address.building}`,
                                        }}
                                        options={{
                                            preset:'islands#blackStretchyIcon',
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