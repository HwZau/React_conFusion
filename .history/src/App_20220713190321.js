import React from 'react';
import logo from 'logo.svg'
import { Navbar, NavbarBrand } f

class App extends Component {

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
