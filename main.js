import React from 'react';
import ReactDOM from 'react-dom';

import Header from './src/components/header/headerJS';
import Districts from './src/components/districs/districsJS';
import ShopsList from './src/components/shopsList/shopsList';
import Footer from './src/components/footer/footerJS'
import Map from './src/components/map/mapJS'

ReactDOM.render(
    <Header title = 'Second map'/>,
    document.getElementById('siteName'));

ReactDOM.render(
    <Districts/>,
    document.getElementById('districts'));
ReactDOM.render(
    <ShopsList/>,
    document.getElementById('menu'));
ReactDOM.render(
    <Footer/>,
    document.getElementById('footer'));
ReactDOM.render(
    <Map/>,
    document.getElementById('map'));
