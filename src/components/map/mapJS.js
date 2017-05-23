import './mapCSS.css'
import axios from 'axios';

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

    constructor(props) {
        super(props);
        this.state = {shops:[]}
    }

    componentDidMount() {
        axios.get('http://localhost:8080/shops')
            .then((response) => {
                this.setState({shops:response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="yMap">
                <Map width='100%' height='100%' state={mapControls} center={[52.104125, 23.755530]} zoom={12}>

                    <Marker key="11" lat={52.104398} lon={23.755016}>
                        <MarkerLayout>
                            <div className="markerPoint">
                            </div>
                        </MarkerLayout>
                    </Marker>

                </Map>
            </div>

        )
    }
}