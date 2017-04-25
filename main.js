import React from 'react';
import ReactDOM from 'react-dom';

import Header from './src/components/header/headerJS';
import Districts from './src/components/districs/districsJS';

ReactDOM.render(
    <Header title = 'Second map'/>,
    document.getElementById('siteName'));

ReactDOM.render(
    <Districts/>,
    document.getElementById('districts'));
