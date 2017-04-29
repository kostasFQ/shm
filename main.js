import React from 'react';
import ReactDOM from 'react-dom';

import Header from './src/components/header/headerJS';
import Districts from './src/components/districs/districsJS';
import ChoiseView from './src/components/shopsList/shopsList';

ReactDOM.render(
    <Header title = 'Second map'/>,
    document.getElementById('siteName'));

ReactDOM.render(
    <Districts/>,
    document.getElementById('districts'));
ReactDOM.render(
    <ChoiseView/>,
    document.getElementById('menu'));
