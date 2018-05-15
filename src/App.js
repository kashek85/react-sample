import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Global_Title from './components/global_Title';
import Container from './components/container';
import Footer from './components/footer';
import Navigation from './components/navigation';


class App extends Component {
  render() {

    return (
      <div className="App">
      <Global_Title/>
      <Navigation/>
      <Container/>
      <Footer/>
      </div>
    );
  }
}

export default App;
