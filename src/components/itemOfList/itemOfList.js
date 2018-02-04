import './itemOfList.css';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setMapCoords } from '../../actions/index';


class Item extends Component {
    setMapCoorsd = () => {
        this.props.setMapCoords(this.props.address.latitude, this.props.address.longitude)
    };

    render() {
        const street = this.props.address.street[0].toUpperCase() + this.props.address.street.slice(1);
        const building = this.props.address.building;
        return(
            <div className="listItem">
                <div className='itemHeader'>
                    <div>
                        <div className="shopTitle">{this.props.shopName}</div>
                        <div>Адрес: {street}, {building}</div>
                    </div>
                    <div>
                        <button onClick={this.setMapCoorsd} className='positionButton'>

                            <img src="./img/target.png" alt="На карте" className='positionButtonImg'/>
                        </button>
                    </div>
                </div>

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

export default connect(
    state => ({
        localStore : state
    }),
    dispatch => ({
        setMapCoords : (latitude, longitude) => {
            dispatch(setMapCoords(latitude, longitude))
        }
    })
)(Item)