import './shopsList.css';
import axios from 'axios';

import React, {Component} from 'react';


class Item extends Component {

    static defaultProps = {
            shopName : ' ',
            street : ' ',
            building : ' ',
            district : ' ',
            workTimeStart : ' ',
            workTimeEnd : ' ',
            workDays : ' '
    };



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

export default class ShopsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        shops:[],
        }
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
            <div className="cut">
                <div className="listField">
                    {this.state.shops.map( (shop) =>
                        <Item
                            key={shop._id}
                            shopName={shop.shopName}
                            street={shop.street}
                            building={shop.building}
                            workTimeStart={shop.workTimeStart}
                            workTimeEnd={shop.workTimeEnd}
                            dayOff={shop.dayOff}
                        />
                    )}

                </div>
            </div>

        )
    }
}