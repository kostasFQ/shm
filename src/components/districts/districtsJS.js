import './districtsCSS.css';
import React, {Component} from 'react';


export default class Districts extends Component{

    constructor(props) {
        super(props);
        this.state = {
            condition: false,
            txt:false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }
    

    handleToggle() {
        this.setState( {condition: !this.state.condition, txt:!this.state.txt} )

    };

    render() {

        return (
            <div
                onClick={this.handleToggle}
                className={this.state.condition ? 'opened filterField' : 'closed filterField'}>
                <div>
                    {this.state.txt ? 'Закрыть' : 'Открыть' } список районов

                    <div className="lSide">
                        <input type="checkbox" value='центр'/>Центр
                    </div>

                    <div className="rSide">
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево
                        <input type="checkbox" value='ковалево'/>Ковалево


                    </div>


                </div>
                <div className="xxx">


                </div>
            </div>
        )
    }
}