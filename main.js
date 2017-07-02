import React from 'react';
import ReactDOM from 'react-dom';

import Header from './src/components/header/headerJS';
import Content from "./src/components/content/contentJS";
import Footer from './src/components/footer/footerJS';

ReactDOM.render(
    <Header/>,
    document.getElementById('siteName'));

ReactDOM.render(
    <Content/>,
    document.getElementById('content'));

ReactDOM.render(
    <Footer/>,
    document.getElementById('footer'));
