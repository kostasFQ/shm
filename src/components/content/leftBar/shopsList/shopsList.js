import './shopsList.css';

import React, {Component} from 'react';


class Item extends Component {

    static defaultProps = {
            shopName : 'Название магазина',
            address : 'адрес',
            workTime : 'время работы',
            workDays : 'рабочие дни'
    };

    render() {
        return(
            <div className="listItem">
                <div className="shopTitle">{this.props.shopName}</div>
                <div>{this.props.address}</div>
                <div>
                    <div>{this.props.workTime}</div>
                    <div>{this.props.workDays}</div>
                </div>


            </div>
        )
    }
}

export default class ShopsList extends Component {

    render() {
        return (
            <div className="cut">
                <div className="listField">
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>

        )
    }
}