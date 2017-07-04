import React, {Component} from 'react';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            validTitle:''
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.validateTitle = this.validateTitle.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onTitleChange(e){
        let val = e.target.value;
        console.log(val);
        this.setState({title: val});
    };

    validateTitle(){
        const lowerTitle = this.state.title.toLowerCase();
        let reg = /\d/g;
        console.log(lowerTitle.indexOf(reg) === lowerTitle.length);//todo make this shit
        if(
            lowerTitle.length < 2){
            this.setState({validTitle: false});
        } else {
            this.setState({validTitle: true});
        }
    };



    handleSubmit(e){
        e.preventDefault();
    }


    render(){
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="formHeader">Добавить магазин</h2>
                    <div className="label">
                        <label>Название магазина:</label>
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.onTitleChange}
                            onBlur={this.validateTitle}
                        /> {this.state.validTitle === false ? <span>wrong!</span> : null}

                    </div>
                    <input type="submit" value='Добавить'/>








                    {/*<div className="label">
                        <label>
                            Адрес: <br/>
                            Район:&nbsp;
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


                    <p><input type="submit"/></p>*/}

                </form>
            </div>
        )
    }
}
