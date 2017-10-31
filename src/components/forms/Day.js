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
        return(
            <div className='workDays'>
                <div>
                    <select name="work" onChange={this.toggleDay}>
                        <option value='work'>Рабочий</option>
                        <option value='dayOff'>Выходной</option>
                    </select>
                    {
                        this.state.dayOff ? <div>
                            work day!

                        </div> : null
                    }
                </div>
            </div>
        )
    }
}