import React, {Component} from 'react';
import { connect } from 'react-redux';

import './CSS/formsCSS.css';

class Total extends Component {

    render() {
        return (
            <div className='label'>
                <fieldset>
                    <legend>Данные для отправки</legend>
                    <div>
                        Магазин&nbsp;:&nbsp;{this.props.FormStore.shop}
                    </div>
                    <div>
                        Адрес&nbsp;:&nbsp;{this.props.FormStore.address}
                    </div>
                    <div>
                        Время работы&nbsp;:
                        <br/>
                        Понедельник-Пятница&nbsp;:&nbsp;
                        {
                            this.props.FormStore.Mo_Fr.status === 'work' ?
                                this.props.FormStore.Mo_Fr.startTime+' - '+this.props.FormStore.Mo_Fr.endTime:
                                this.props.FormStore.Mo_Fr.status === 'dayOff' ? 'Выходной': ' '
                        }
                        <br/>
                        Суббота&nbsp;:&nbsp;
                        {
                            this.props.FormStore.saturday.status === 'work' ?
                                this.props.FormStore.saturday.startTime+' - '+this.props.FormStore.saturday.endTime:
                                this.props.FormStore.saturday.status === 'dayOff' ? 'Выходной': ' '
                        }
                        <br/>
                        Воскресенье&nbsp;:&nbsp;
                        {
                            this.props.FormStore.sunday.status === 'work' ?
                            this.props.FormStore.sunday.startTime+' - '+this.props.FormStore.sunday.endTime:
                                this.props.FormStore.sunday.status === 'dayOff' ? 'Выходной': ' '
                        }

                    </div>
                </fieldset>
            </div>
        )
    }
}

export default connect(
    globalStore => ({
    FormStore : globalStore
}) )(Total);