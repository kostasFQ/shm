import React, {Component} from 'react';
import Item from "../itemOfList/itemOfList";
import YandexMap from "../map/mapJS";

export default class MainFilter extends Component{

    constructor(props){
        super(props);
        this.state = {
            districtsFilter:'Ковалево'
        };
        this.handleCenter = this.handleCenter.bind(this);
        this.handleKvl = this.handleKvl.bind(this);
    }

    handleCenter() {
        this.setState({districtsFilter:'центр'})
    }
    handleKvl() {
        this.setState({districtsFilter:'Ковалево'})
    }


    render(){
        return(
            <div>
                <div className="filterField">
                    filter field
                </div>
                <button onClick={this.handleCenter}>центр</button>
                <button onClick={this.handleKvl}>квл</button>
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
