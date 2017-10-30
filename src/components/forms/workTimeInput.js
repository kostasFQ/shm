import React, {Component} from 'react';
import {connect} from 'react-redux';
import './CSS/formsCSS.css';


export default class WorkTimeInput extends Component {

    render(){
        const week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
        return(
            <div className='label'>
                <label>Время работы:</label>
                <div>
                    {week.map((i, index) =>
                        <div key={index} className='workDays'>
                            {i}:
                            <br/>
                            <input type="text" style={{width:'90%'}}
                                   placeholder='начало'
                            />
                            <br/>
                            <input type="text" style={{width:'90%'}}
                                    placeholder='окончание'
                            />
                        </div>
                    )}
                </div>

                {/*<div className='workDays'>
                    Пн:
                </div>*/}
            </div>
        )
    }
}
/*
export default connect(
    state => ({
        localStore: state
    }),
    dispatch => ({
        onAddWorkTime: workTime => {
            dispatch(setWorkTime(workTime));
        }
    })
)(WorkTimeInput);*/
