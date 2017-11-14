import React, {Component} from 'react';
import Item from "../itemOfList/itemOfList";
import YandexMap from "../map/mapJS";

export default class MainFilter extends Component{

    constructor(props){
        super(props);
        this.state = {
            districtsFilter:'all'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        this.setState({districtsFilter: ev.target.value});
        ev.preventDefault()
    }


    render(){
        return(
            <div  className = 'contentStyle'>
                <div className="leftBar">
                    <select onChange={this.handleChange} className="select">
                        <option value="all">Все районы</option>

                        <option value="вулька">Вулька</option>
                        <option value="восток">Восток</option>
                        <option value="киевка">Киевка</option>
                        <option value="южный">Южный</option>
                        <option value="центр">Центр</option>
                        <option value="ковалево">Ковалево</option>
                        <option value="речица">Речица</option>
                        <option value="дубровка">Дубровка</option>
                        <option value="граевка">Граевка</option>
                        <option value="березовка">Березовка</option>
                        <option value="юго-запад">Юго-Запад</option>
                        <option value="гобк">ГОБК</option>
                    </select>
                    <div className="listField">
                        {
                            this.props.shops
                                .sort( (a, b) => {
                                    if(a.shop === b.shop) return 0;
                                    return a.shop < b.shop ? -1 : 1;
                                })
                                .map( (shop)=> {
                                    if(this.state.districtsFilter === shop.address.district){
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
                    districtsFilter={this.state.districtsFilter}
                    shops={this.props.shops}
                />
            </div>

        )
    }
}
