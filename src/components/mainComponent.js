import React, {Component} from 'react';
import '../../public/main.css'

import Header from '../components/header/headerJS';
import Content from "../components/content/contentJS";
import Footer from '../components/footer/footerJS';

import reducer from '../reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);


export default class MainComponent extends Component {
    render() {
        return(
            <div>
                <Provider store={store}>
                    <div>
                        <Header/>
                        <Content/>
                        <Footer/>
                    </div>
                </Provider>

            </div>

        )
    }
}




