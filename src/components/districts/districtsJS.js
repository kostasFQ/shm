import './districtsCSS.css';

import React, {Component} from 'react';

export default class Districts extends Component{




    render() {
        return (
            <select className="mainSelector">
                Районы
                <option>Выбор района</option>

            </select>
        )
    }
}