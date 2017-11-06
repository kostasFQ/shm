import React, {Component} from 'react';
import './CSS/formsCSS.css';
import Day from "./Day";


export default class WorkTimeInput extends Component {

    render(){
        const workSchedule = [ {rus:'Пн-Пт', eng:'Mo_Fr'}, {rus: 'суббота', eng: 'saturday'}, {rus: 'воскресенье', eng:'sunday' } ];
        return(
            <div className='label'>
                <fieldset>
                    <legend>Время работы</legend>
                    <div>

                        <div style={{display:'flex'}}>
                            {workSchedule.map((el, index) =>
                                <Day dayNameRus = {el.rus} key={index} dayNameEng = {el.eng}/>
                            )}
                        </div>
                    </div>
                </fieldset>


            </div>
        )
    }
}
