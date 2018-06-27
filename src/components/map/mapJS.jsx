import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { connect } from 'react-redux';

class YandexMap extends Component {
  render() {
    const date = new Date();
    const { shops } = this.props;
    const fullDate = `${date.getHours()}:${date.getMinutes()}`;

    return (
      <div className="map">
        <YMaps >
          <Map
            state={
              {
                center:
                [
                  this.props.localStore.map.latitude,
                  this.props.localStore.map.longitude,
                ],
                zoom: this.props.localStore.map.zoom,
              }
            }
            width="100%"
            height="100%"
          >
            {
              shops.map((shop) => {
              if (this.props.districtsFilter.toLowerCase() === shop.address.district.toLowerCase()) {     
                return (
                  <Placemark
                    key={`placemark_${shop._id}`}
                    geometry={{
                      coordinates: [shop.address.latitude, shop.address.longitude],
                    }}
                    properties={{
                      iconContent: shop.shop,
                      balloonContent: `Адрес: ${shop.address.street},${shop.address.building}`,
                    }}
                    options={{
                      preset:
                      date.getDay() === 0 ? fullDate <= shop.sunday.startTime || fullDate >= shop.sunday.endTime ?
                      'islands#redStretchyIcon' : 'islands#darkGreenStretchyIcon'
                      : date.getDay() === 6 ? fullDate <= shop.saturday.startTime || fullDate >= shop.saturday.endTime ?
                      'islands#redStretchyIcon' : 'islands#darkGreenStretchyIcon'
                      : fullDate <= shop.Mo_Fr.startTime || fullDate >= shop.Mo_Fr.endTime ?
                      'islands#redStretchyIcon' : 'islands#darkGreenStretchyIcon',
                    }}
                  />);
                }
              if (this.props.districtsFilter === 'all') {
                  return (
                    <Placemark
                      key={`placemark_${shop._id}`}
                      geometry={{
                        coordinates: [shop.address.latitude, shop.address.longitude],
                      }}
                      properties={{
                        balloonContent:
                        `<div><h3>Адрес: ${shop.address.street},${shop.address.building}</h3></div>`,
                        iconContent: shop.shop,
                      }}
                      options={{
                        preset:
                        date.getDay() === 0 ?
                        fullDate <= shop.sunday.startTime || fullDate >= shop.sunday.endTime ?
                        'islands#redStretchyIcon' : 'islands#darkGreenStretchyIcon'
                        : date.getDay() === 6 ?
                        fullDate <= shop.saturday.startTime || fullDate >= shop.saturday.endTime ?
                        'islands#redStretchyIcon' : 'islands#darkGreenStretchyIcon'
                        : fullDate <= shop.Mo_Fr.startTime || fullDate >= shop.Mo_Fr.endTime ?
                        'islands#redStretchyIcon' : 'islands#darkGreenStretchyIcon',
                      }}
                    />);
                }
                return null;
              })
              }
          </Map>
        </YMaps>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    localStore: state.uiStore,
  };
})(YandexMap);
