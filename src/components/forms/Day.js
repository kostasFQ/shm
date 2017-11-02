import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectDayType} from "../../actions/index";

import './CSS/formsCSS.css';

class Day extends Component {
    constructor(props){
        super(props);

        this.state = {
            dayOff : true
        };
    }

    toggleDay = () => {
        this.setState({dayOff: !this.state.dayOff});
        let tmp = this.selectValue.options[this.selectValue.selectedIndex].value;

        this.props.selectDay(tmp);
        console.log(tmp);
    };

    render(){

        let startWorkTime = ['08:00', '09:00', '10:00', '11:00', '12:00'];
        let endWorkTime = ['13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'];
        let shopOptions = ['','поступление товара', 'скидка 10%','скидка 20%', 'скидка 30%', 'скидка 40%', 'скидка 50%', 'скидка 60%', 'скидка 70%', 'скидка 80%', 'скидка 90%'];

        return(
            <div className='workDays'>
                {this.props.dayNameRus}
                <div>
                    <select name="work" ref={(sel) => {this.selectValue = sel}}  onChange={this.toggleDay}>
                        <option value='work'>Рабочий</option>
                        <option value='dayOff'>Выходной</option>
                    </select>
                    {
                        this.state.dayOff ?
                            <div>
                                <div>
                                    Начало: <br/>
                                    <select>
                                        {startWorkTime.map( (value, i) =>
                                            <option value={value} key={i}>
                                                {value}
                                            </option>)
                                        }
                                    </select>
                                </div>
                                <div>
                                    Окончание: <br/>
                                    <select>
                                        {endWorkTime.map( (value, i) =>
                                            <option value={value} key={i}>
                                                {value}
                                            </option>)
                                        }
                                    </select>
                                </div>
                                <div>
                                    Доп. информация:
                                    <select>
                                        {
                                            shopOptions.map( (value, i) =>
                                                <option value={value} key={i}>
                                                    {value}
                                                </option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div> : null
                    }
                </div>
            </div>
        )
    }
}
export default connect(
    state => ({
        localStore: state
    }),
    dispatch => ({
        selectDay: dayType => {
            dispatch(selectDayType(dayType))
        }
    })
)(Day);