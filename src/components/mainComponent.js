import React, {Component} from 'react';
import '../../public/main.css'

import Header from '../components/header/headerJS';
import Content from "../components/content/contentJS";
import Footer from '../components/footer/footerJS';


export default class MainComponent extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>

        )
    }
}




