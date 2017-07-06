import React, {Component} from 'react';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            validTitle:'',

            address:'',
            validAddress : '',


            unp:'',
            validUnp:'',


            submitDisable: true
        };

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.validateTitle = this.validateTitle.bind(this);

        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.validateAddress = this.validateAddress.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChangeTitle(e){
        this.setState({title: e.target.value})
    };
    validateTitle(){
        if(this.state.title.length < 3){
            this.setState({validTitle: false});
        }
        else {
            this.setState({validTitle: true});
        }
    };


    onChangeAddress(e){
        this.setState({address : e.target.value})
    };
    validateAddress(){
        if(this.state.address.length < 3){
            this.setState({validAddress: false});
        }
        else {
            this.setState({validAddress: true});
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

                    <div className="label" style={{height:'35px'}}>
                        <label>Название магазина:&nbsp;</label>
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            onBlur={this.validateTitle}
                        />
                        {
                            this.state.validTitle === false ?
                            <span style={{color:'red'}}>
                                <img src="./img/cross.png" className="validationImg"/>
                                <br/>
                                <sup>(поле должно содержать не менее 3х символов)</sup>
                            </span> : this.state.validTitle === true ?
                                <img src="./img/check.png" className="validationImg"/> :
                                null
                        }
                    </div> {/*название магазина*/}

                    <div className="label" style={{height:'35px'}}> {/*адрес*/}
                        <label>Адрес:</label>&nbsp;
                        <input
                            type="text"
                            value={this.state.street}
                            onChange={this.onChangeAddress}
                            onBlur={this.validateAddress}
                        />
                        {
                            this.state.validAddress === false ?
                                <span style={{color:'red'}}>
                                <img src="./img/cross.png" className="validationImg"/>
                                <br/>
                                <sup>(поле должно)</sup>
                            </span> : this.state.validAddress === true ?
                                <img src="./img/check.png" className="validationImg"/> :
                                null
                        }
                    </div>

                    <div className="label">
                        <label>Время работы:&nbsp;</label>
                        с&nbsp;
                        <select>
                            <option value="08:00">08:00</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                        </select>&nbsp;
                        по&nbsp;
                        <select>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                        </select>
                        <br/>
                        Выходные дни:
                        <br/>
                        <span className="checkbox"><input type="checkbox" value='Понедельник'/>Понедельник</span>
                        <span className="checkbox"><input type="checkbox" value='Вторник'/>Вторник</span>
                        <span className="checkbox"><input type="checkbox" value='Среда'/>Среда</span>
                        <span className="checkbox"><input type="checkbox" value='Четверг'/>Четверг</span>
                        <span className="checkbox"><input type="checkbox" value='Пятница'/>Пятница</span>
                        <span className="checkbox"><input type="checkbox" value='Суббота'/>Суббота</span>
                        <span className="checkbox"><input type="checkbox" value='Воскресенье'/>Воскресенье</span>
                    </div> {/*время работы*/}todo make logic
                    <div className="label">
                        <label>УНП:</label>
                        <input
                            type="text"
                        />
                    </div>



                    <input
                        type="submit"
                        value='Добавить'
                        disabled={this.state.submitDisable}
                    />

                </form>
            </div>
        )
    }
}
