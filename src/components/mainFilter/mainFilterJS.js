import React, {Component} from 'react';
import Item from "../itemOfList/itemOfList";
import YandexMap from "../map/mapJS";

export default class MainFilter extends Component{

    constructor(props){
        super(props);
        this.state = {
            districtsFilter:'all',
            day : (new Date).getDay(),
            districts : [
                "Вулька", "Восток", "Киевка", "Южный", "Центр", "Ковалево", "Речица", "Дубровка", "Граевка",
                "Березовка", "Юго-Запад", "ГОБК"
            ]
        };
    }

    handleChange = (ev)  => {
        this.setState({districtsFilter: ev.target.value});
    };

    render(){
        return(
            <div  className = 'contentStyle'>
                <div className="leftBar">
                    <select onChange={this.handleChange} className="select">
                        <option value="all">Все районы</option>
                        {this.state.districts.sort().map( (item) =>
                            <option value={item} key={item}>{item}</option>
                        )}

                    </select>

                    <div className="listField">
                        {
                            this.props.shops
                                .sort( (a, b) => {
                                    if(a.shop === b.shop) return 0;
                                    return a.shop < b.shop ? -1 : 1;
                                })
                                .map( (shop)=> {
                                    if(this.state.districtsFilter.toLowerCase() === shop.address.district.toLowerCase()){
                                        return <Item
                                            key={shop._id}
                                            shopName={shop.shop}
                                            address={shop.address}
                                            Mo_Fr={shop.Mo_Fr}
                                            saturday = {shop.saturday}
                                            sunday = {shop.sunday}
                                            additionalOptions = {shop.additionalOptions}
                                        />
                                    } if(this.state.districtsFilter === 'all') {
                                        return <Item
                                            key={shop._id}
                                            shopName={shop.shop}
                                            address={shop.address}
                                            Mo_Fr={shop.Mo_Fr}
                                            saturday = {shop.saturday}
                                            sunday = {shop.sunday}
                                            additionalOptions = {shop.additionalOptions}
                                        />
                                    }
                                },)
                        }
                    </div>
                </div>
                <YandexMap
                    day = {this.state.day}
                    districtsFilter={this.state.districtsFilter}
                    shops={this.props.shops}
                    zoom={this.state.text}
                />
            </div>

        )
    }
}
