import React, {Component} from 'react';
import {connect} from 'react-redux';
import './CSS/formsCSS.css';
import Day from "./Day";


export default class WorkTimeInput extends Component {

    render(){
        const week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
        return(
            <div className='label'>
                <label>Время работы:</label>
                <div className='tmp'>
                    {week.map((i, index) =>
                        <Day dayName = {i} key={index}/>
                    )}
                </div>

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
