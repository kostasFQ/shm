import React, { Component } from 'react';
import Day from './Day';

import './CSS/forms.css';

export default class WorkTimeInput extends Component {
  render() {
    const workSchedule = [
      { rus: 'Пн-Пт', eng: 'Mo_Fr' },
      { rus: 'Суббота', eng: 'saturday' },
      { rus: 'Воскресенье', eng: 'sunday' },
    ];
    return (
      <div className="label">
        <fieldset>
          <legend>Время работы</legend>
          <div>
            <div style={{ display: 'flex' }}>
              {
                workSchedule.map((el) => { return <Day dayNameRus={el.rus} key={el} dayNameEng={el.eng} />; })
              }
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}
