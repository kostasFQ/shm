import React, {Component} from 'react';
import Item from "../itemOfList/itemOfList";
import YandexMap from "../map/mapJS";

export default class MainFilter extends Component{

    constructor(props){
        super(props);
        this.state = {
            districtsFilter:'Ковалево'
        };
        const allDistr = [];

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        this.setState({districtsFilter: ev.target.value});
        ev.preventDefault()
    }


    render(){
        return(
            <div className="leftBar">
                <select onChange={this.handleChange} className="select">
                    <option value="адамково">Адамково</option>
                    <option value="аркадия">Аркадия</option>
                    <option value="центр">Центр</option>
                    <option value="Ковалево">Ковалево</option>
                </select>
                <div className="listField">
                    {
                        this.props.shops
                            .sort( (a, b) => {
                                if(a.shopName === b.shopName) return 0;
                                return a.shopName < b.shopName ? -1 : 1;
                            })
                            .map( (shop)=> {
                                if(shop.district === this.state.districtsFilter){
                                    return <Item
                                        key={shop._id}
                                        shopName={shop.shopName}
                                        street={shop.street}
                                        building={shop.building}
                                        workTimeStart={shop.workTimeStart}
                                        workTimeEnd={shop.workTimeEnd}
                                        dayOff={shop.dayOff}
                                    />
                                }
                            },)
                    }
                </div>
                <div>
                    <YandexMap
                        districtsFilter={this.state.districtsFilter}
                        shops={this.props.shops}
                    />
                </div>

            </div>
        )
    }
}
