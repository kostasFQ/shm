import React from 'react';
import ReactDOM from 'react-dom';

import Header from './src/components/header/headerJS';
import Content from "./src/components/content/contentJS";

ReactDOM.render(
    <Header title = 'Second map'/>,
    document.getElementById('siteName'));

ReactDOM.render(
    <Content/>,
    document.getElementById('content'));
