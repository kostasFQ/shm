import './itemOfList.css';
import React, {Component} from 'react';


export default class Item extends Component {

    render() {
        return(
            <div className="listItem">
                <div className="shopTitle">{this.props.shopName}</div>
                <div>Адрес: {this.props.address.street}, {this.props.address.building}</div>
                <div>Часы работы:
                    <div>
                        Пн-Пт: {this.props.Mo_Fr.startTime} - {this.props.Mo_Fr.endTime}
                    </div>
                    <div>
                        Суббота :&nbsp;
                        {
                            this.props.saturday.status === "work" ?
                            this.props.saturday.startTime +" - "+ this.props.saturday.endTime : "Выходной"
                        }


                    </div>
                    <div>
                        Воскресенье:&nbsp;
                        {
                            this.props.sunday.status === "work" ?
                                this.props.sunday.startTime+" - "+this.props.sunday.endTime : "Выходной"
                        }
                    </div>
                </div>
            </div>
        )
    }
}
