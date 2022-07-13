import React from 'react';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css'
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

funs App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href="/">
              Ristorante Con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
      </div>
    )
  };
}


export default App;
