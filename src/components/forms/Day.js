import React, {Component} from 'react';
import './CSS/formsCSS.css';

export default class Day extends Component {
    constructor(props){
        super(props);

        this.state = {
            dayOff : true
        };

        this.toggleDay = this.toggleDay.bind(this);
    }

    toggleDay() {
        this.setState({dayOff: !this.state.dayOff});
    }

    render(){

        let startWorkTime = ['08:00', '09:00', '10:00', '11:00', '12:00'];
        let endWorkTime = ['13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'];

        return(
            <div className='workDays'>
                {this.props.dayName}
                <div>
                    <select name="work" onChange={this.toggleDay}>
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
                            </div> : null
                    }
                </div>
            </div>
        )
    }
}