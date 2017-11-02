import React, {Component} from 'react';
import './CSS/formsCSS.css';
import Day from "./Day";


export default class WorkTimeInput extends Component {

    render(){
        const week = [
            {
                rus:"Понедельник",
                eng: 'monday'
            },
            {
                rus:"Вторник",
                eng:'tuesday'
            },
            {
                rus:"Среда",
                eng:'wednesday'
            },
            {
                rus:"Четверг",
                eng:'thursday'
            },
            {
                rus:"Пятница",
                eng:'friday'
            },
            {
                rus:"Суббота",
                eng:'saturday'
            },
            {
                rus:"Воскресенье",
                eng:'sunday'
            }];
        return(
            <div className='label'>
                <label>Время работы</label>

                <div className='tmp'>
                    <div style={{display:'flex'}}>
                        {week.map((i, index) =>
                            <Day dayNameRus = {i.rus} key={index}/>
                        )}
                    </div>

                </div>

            </div>
        )
    }
}
