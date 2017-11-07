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

    toggleVisible = () => {
        this.setState({dayOff: !this.state.dayOff});
    };

    accept = () => {
        const status = this.selectValue.options[this.selectValue.selectedIndex].value;
        const day = this.props.dayNameEng;
        let startTime;
        let endTime;

        if(status === 'dayOff') {
            startTime = '';
            endTime = '';
        } else {
            startTime = this.selectStart.options[this.selectStart.selectedIndex].value;
            endTime = this.selectEnd.options[this.selectEnd.selectedIndex].value;

        }
        this.props.selectDay(day, status, startTime, endTime);


        console.log(day + ' ' + status + 'start - ' + startTime + ' - ' + endTime);
    };

    render(){

        let startWorkTime = ['08:00', '09:00', '10:00', '11:00', '12:00'];
        let endWorkTime = ['13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'];
        

        return(
            <div className='workDays'>
                {this.props.dayNameRus}
                <div>
                    <select name="work" ref={(sel) => {this.selectValue = sel}} onChange={this.toggleVisible}>
                        <option value='work'>Рабочий</option>
                        <option value='dayOff'>Выходной</option>
                    </select>
                    {
                        this.state.dayOff ?
                            <div>
                                <div>
                                    Начало: <br/>
                                    <select ref={(start) => {this.selectStart = start}} defaultValue={this.props.localStore.Mo_Fr.startTime}>
                                        {
                                            startWorkTime.map( (value, i) =>
                                            <option value={value} key={i}>
                                                {value}
                                            </option>)
                                        }
                                    </select>
                                </div>
                                <div>
                                    Окончание: <br/>
                                    <select ref={(end) => {this.selectEnd = end}}>
                                        {endWorkTime.map( (value, i) =>
                                            <option value={value} key={i}>
                                                {value}
                                            </option>)
                                        }
                                    </select>
                                </div>
                            </div> : null
                    }
                </div>
                <div className='btn_place'>
                    <button onClick={this.accept}><img src="./img/success.png" alt="OK"/></button>
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
        selectDay: (day, status, startTime, endTime, additionalOptions) => {
            dispatch(selectDayType(day, status, startTime, endTime, additionalOptions))
        }
    })
)(Day);