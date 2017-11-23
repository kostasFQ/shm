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

                        <option value="Вулька">Вулька</option>
                        <option value="Восток">Восток</option>
                        <option value="Киевка">Киевка</option>
                        <option value="Южный">Южный</option>
                        <option value="Центр">Центр</option>
                        <option value="Ковалево">Ковалево</option>
                        <option value="Речица">Речица</option>
                        <option value="Дубровка">Дубровка</option>
                        <option value="Граевка">Граевка</option>
                        <option value="Березовка">Березовка</option>
                        <option value="Юго-запад">Юго-Запад</option>
                        <option value="Гобк">ГОБК</option>
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
                    districtsFilter={this.state.districtsFilter}
                    shops={this.props.shops}
                />
            </div>

        )
    }
}
