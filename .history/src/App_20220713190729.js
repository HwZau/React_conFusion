import React from 'react';
import logo from 'logo.svg';
import './App.css'
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href="/">
              Ris
            </NavbarBrand>
          </div>
        </Navbar>
      </div>
  }

}

export default App;
