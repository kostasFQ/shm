import React, {Component} from 'react';

export default class Form extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="form">
                <form action="">
                    <h2>Добавить магазин</h2>
                    <div className="label">
                        <label >
                            Название магазина: <input type="text" required={true}/>
                        </label>
                    </div>

                    <div className="label">
                        <label>
                            Адрес: <br/>
                            Район:
                            <select style={{width:100}} required={true}>
                                <option value="вулька">Вулька</option>
                                <option value="восток">Восток</option>
                                <option value="киевка">Киевка</option>
                                <option value="южный">Южный</option>
                                <option value="центр">Центр</option>
                                <option value="ковалево">Ковалево</option>
                                <option value="речица">Речица</option>
                                <option value="дубровка">Дубровка</option>
                                <option value="граевка">Граевка</option>
                                <option value="березовка">Березовка</option>
                                <option value="юго-запад">Юго-Запад</option>
                                <option value="гобк">ГОБК</option>
                            </select> &nbsp;
                            улица: <input type="text" required={true}/>&nbsp;
                            дом: <input type="text" required={true} style={{width:50}}/>
                        </label>
                    </div>

                    <div className="label">
                        <label>
                            Время работы
                            <br/>
                            будние дни:
                            <br/>
                            начало:&nbsp;
                            <select>
                                <option value="08:00">08:00</option>
                                <option value="09:00">09:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                            </select>&nbsp;
                            окончание: &nbsp;
                            <select>
                                <option value="018:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                            </select>
                            <br/>
                            Суббота: <br/>
                            начало:&nbsp;
                            <select>
                                <option value="08:00">08:00</option>
                                <option value="09:00">09:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                            </select>&nbsp;
                            окончание: &nbsp;
                            <select>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                            </select>
                            <br/>
                            Воскресение: <br/>
                            начало:&nbsp;
                            <select>
                                <option value="08:00">08:00</option>
                                <option value="09:00">09:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                            </select>&nbsp;
                            окончание: &nbsp;
                            <select>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                            </select>
                            <br/>
                        </label>
                    </div>

                    <label>


                    </label>
                    <br/>
                    <br/>
                    <label>
                        УНП: <input type="text"/>
                    </label>
                    <br/>
                    <label>

                    </label>


                    <p><input type="submit"/></p>

                </form>
            </div>
        )
    }
}
