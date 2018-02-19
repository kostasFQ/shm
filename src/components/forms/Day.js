import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectDayType} from "../../actions/index";

import './CSS/formsCSS.css';

class Day extends Component {
    constructor(props){
        super(props);

        this.state = {
            work : true,
            status : 'work',
            day : this.props.dayNameEng,
            startTime : '09:00 ',
            endTime : '17:00 '
        };
    }

    accept = (event) => {
        this.setState({
            work: !this.state.work,
            status: event.target.value
        });
        if(this.state.work) {
            this.setState({
                startTime: '',
                endTime: ''
            });
        } else {
            this.setState({
                startTime: '09:00',
                endTime: '17:00'
            });
        }

        this.props.selectDay(this.state.day, this.state.status, this.state.startTime, this.state.endTime);
    };

    setTime = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        this.props.selectDay(this.state.day, this.state.status, this.state.startTime, this.state.endTime);
    };

    render(){
        let startWorkTime = ['09:00', '10:00', '11:00', '12:00'];
        let endWorkTime = ['17:00','18:00','19:00','20:00'];

        return(
            <div className='workDays' style={{'border':"1px solid black"}}>
                {this.props.dayNameRus}
                <div>
                    <select name="work" onChange={this.accept}>
                        <option value='work'>Рабочий</option>
                        <option value='dayOff'>Выходной</option>
                    </select>
                    {
                        this.state.work ?
                            <div>
                                <div>
                                    Начало: <br/>
                                    <select name='startTime' onChange={this.setTime}>
                                        {
                                            startWorkTime.map( (value, i) =>
                                            <option value={value} key={i} >
                                                {value}
                                            </option>)
                                        }
                                    </select>
                                </div>
                                <div>
                                    Окончание: <br/>
                                    <select name='endTime' onChange={this.setTime}>
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
            </div>
        )
    }
}
export default connect(
    state => ({
        localStore: state
    }),
    dispatch => ({
        selectDay: (day, status, startTime, endTime) => {
            dispatch(selectDayType(day, status, startTime, endTime))
        }
    })
)(Day);