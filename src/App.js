import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarouselSlider from './CarouselSlider';

class App extends Component {
  render() {
    return (
        <div className={ 3 > 5 ? "App" : "App" + " disabled"}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">React Responsive Carousel</h1>
            </header>
            <CarouselSlider/>
        </div>
  );
  }
}

export default App;
