import './itemOfList.css';
import React, {Component} from 'react';


export default class Item extends Component {

    render() {
        const street = this.props.address.street[0].toUpperCase() + this.props.address.street.slice(1);
        const building = this.props.address.building;
        return(
            <div className="listItem">
                <div className="shopTitle">{this.props.shopName}</div>
                <div>Адрес: {street}, {building}</div>
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
                            {
                                this.props.additionalOptions.length > 0 ?
                                    <div className='options'>
                                        Дополнительная информация:
                                        <ul>
                                            {
                                                this.props.additionalOptions.map( (el, i) => {
                                            return (
                                            <li key={i}>{el}</li>
                                            )}
                                         )}
                                        </ul>
                                    </div> : null
                            }
                </div>
            </div>
        )
    }
}
