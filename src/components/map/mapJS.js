
import React, {Component} from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import { connect } from 'react-redux';

class YandexMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message : 'zxc cds eeee'
        }
    }
    tmp = ()=> {
        console.log(this.state.message)
    };

    render() {
        const date = new Date();
        const shops = this.props.shops;
        const fullDate = `${date.getHours()}:${date.getMinutes()}`;

        return (
            <div  className="map">
                <YMaps>
                    <Map state={
                        {
                            center:[
                                this.props.localStore.mapLatitude,
                                this.props.localStore.mapLongitude],
                            zoom: this.props.localStore.mapZoom,
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
                                            balloonContent: `Адрес: ${shop.address.street},${shop.address.building}`,
                                        }}
                                        options={{
                                            preset:
                                                date.getDay() === 0 ?
                                                    fullDate <= shop.sunday.startTime || fullDate >= shop.sunday.endTime ?
                                                        'islands#redStretchyIcon'
                                                        : 'islands#darkGreenStretchyIcon'
                                                    :
                                                    date.getDay() === 6 ?
                                                        fullDate <= shop.saturday.startTime || fullDate >= shop.saturday.endTime ?
                                                            'islands#redStretchyIcon'
                                                            : 'islands#darkGreenStretchyIcon'
                                                        :
                                                        fullDate <= shop.Mo_Fr.startTime || fullDate >= shop.Mo_Fr.endTime ?
                                                            'islands#redStretchyIcon'
                                                            : 'islands#darkGreenStretchyIcon'

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
                                            balloonContent: `<div><h3>Адрес: ${shop.address.street},${shop.address.building}</h3></div>`,
                                        }}
                                        options={{
                                            preset:
                                            date.getDay() === 0 ?
                                                 fullDate <= shop.sunday.startTime || fullDate >= shop.sunday.endTime ?
                                                     'islands#redStretchyIcon'
                                                 : 'islands#darkGreenStretchyIcon'
                                                :
                                                date.getDay() === 6 ?
                                                    fullDate <= shop.saturday.startTime || fullDate >= shop.saturday.endTime ?
                                                        'islands#redStretchyIcon'
                                                        : 'islands#darkGreenStretchyIcon'
                                                    :
                                                    fullDate <= shop.Mo_Fr.startTime || fullDate >= shop.Mo_Fr.endTime ?
                                                        'islands#redStretchyIcon'
                                                        : 'islands#darkGreenStretchyIcon'

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