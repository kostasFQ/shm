import './itemOfList.css';
import React, {Component} from 'react';


export default class Item extends Component {

    render() {
        return(
            <div className="listItem">
                <div className="shopTitle">{this.props.shopName}</div>
                <div>Адрес: {this.props.street}, {this.props.building}</div>
                <div>Часы работы: {this.props.workTimeStart}:00
                    - {this.props.workTimeEnd}:00</div>
                <div>Выходной: {this.props.dayOff}</div>
            </div>
        )
    }
}
