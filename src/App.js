import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Home } from './components/Home/Home';
import DataSciencePrice from './components/PricePieces/DataSciencePrice';
import DigitalPrice from './components/PricePieces/DigitalPrice';
import WebDesignPrice from './components/PricePieces/WebDesignPrice';
import WebDevPrice from './components/PricePieces/WebDevPrice';
import AndroidApp from './components/PricePieces/AndroidApp';
import FlutterApp from './components/PricePieces/FlutterApp';
import { Service } from './components/Service/Service';
import { Blog } from './components/Blog/Blog';
import { Contact } from './components/Contact/Contact';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import { Menu } from './components/Nav/Nav';
import { Price } from './components/Price/Price';
import { Portfolio } from './components/Portfolio/Portfolio';
import { BackTop } from './components/BackTop';
import Footer from './components/Footer/Footer';
import DigitalMarket from './components/ServiceDetails/DigitalMarket/DigitalMarket';
import DataScience from './components/ServiceDetails/DataScience/DataScience';
import WebDev from './components/ServiceDetails/WebDev/WebDev';
import WebDesign from './components/ServiceDetails/WebDesign/WebDesign';
import Androids from './components/ServiceDetails/Android/Android';
import FlutterService from './components/ServiceDetails/Flutter/Flutters';
import ScrollTop from './components/ScrollTop';

import { Planets } from 'react-preloaders';

const BlogRedirection = () => <Redirect to='/blog/1' />;

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Planets color={'#FF6347'} time={3500} animation='slide' size="10px" />
      <Switch>
        <Route exact path='/digitalMarket' component={DigitalMarket} />
        <Route exact path='/dataScience' component={DataScience} />
        <Route exact path='/dataSciencePrice' component={DataSciencePrice} />
        <Route exact path='/digitalPrice' component={DigitalPrice} />
        <Route exact path='/webdesprice' component={WebDesignPrice} />
        <Route exact path='/webdevprice' component={WebDevPrice} />
        <Route exact path='/androiddev' component={AndroidApp} />
        <Route exact path='/flutterdev' component={FlutterApp} />
        <Route exact path='/webDev' component={WebDev} />
        <Route exact path='/webDesign' component={WebDesign} />
        <Route exact path='/Androids' component={Androids} />
        <Route exact path='/Flutter' component={FlutterService} />
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Service} />
        <Route exact path='/price' component={Price} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/blog/' component={BlogRedirection} />
        <Route exact path='/blog/:blogid' component={Blog} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <BackTop />
      <Footer />
    </React.Fragment>
  );
}

export default App;
