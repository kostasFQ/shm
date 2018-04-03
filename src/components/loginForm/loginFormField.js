import React, {Component} from 'react';
import EnterField from './enterField';
import SingUpField from './singUpField';

export default class LoginField extends Component {

    render(){
        return(
            <section className='loginForm'>
                <EnterField/>
                <SingUpField/>
            </section>
        )
    }
}