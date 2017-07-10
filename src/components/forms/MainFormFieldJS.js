import React, {Component} from 'react';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            validTitle:'',

            address:'',
            validAddress : '',

            days: {
                sunday: null,
                monday: null,
                tuesday: null,
                wednesday: null,
                thursday: null,
                friday: null,
                saturday: null
            },


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
        let reg = /[a-zA-z]/;
        if(this.state.address.length < 3){
            this.setState({validAddress: false});
        }
        else if(this.state.address.search(reg) !== -1){
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
        let hoursArr= ['выходной'];
        for(let i = 8; i <= 20; i++) {
            hoursArr.push(i + ':00');
        }

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

                    <div className="label" style={{height:'35px'}}>
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
                                    <sup>(поле не может быть пустым или содержать английские символы)</sup>
                                </span> : this.state.validAddress === true ?
                                <img src="./img/check.png" className="validationImg"/> :
                                null
                        }
                    </div>{/*адрес*/}

                    <div className="label">
                        <label>Режим работы:</label>
                        <br/>
                        <div style={{border:'solid 1px black', width:'14.28%', textAlign:'center'}}>
                            <div style={{background:"red"}}>Пн</div>
                            <div>с
                                <select>
                                    {
                                        hoursArr.map( (item, index)=>{
                                            return <option value={item} key={index}>{item}</option>
                                        })
                                    }
                                </select>
                                <br/>
                                до
                                <select>
                                    {
                                        hoursArr.map( (item, index)=>{
                                            return <option value={item} key={index}>{item}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>

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
