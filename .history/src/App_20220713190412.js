import React from 'react';
import logo from 'logo.svg';
import '/'
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

}

export default App;
