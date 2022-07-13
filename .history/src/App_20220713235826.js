import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap'
import Welcome from './components/Welcome';
import Comment from './components/Comment';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar dark color="primary" >
//           <div className="container" >
//             <NavbarBrand NavbarBrand href="/"> Ristorante Con Fusion</NavbarBrand >;
//           </div >
//         </Navbar >
//       </div >
//     );
//   }
// }
// -------------------------------------------------------
// function App() {
//   return (
//     <Welcome name="Giau" />
//   )
// }
// -------------------------------------------------------
const comment = {
  date: new Date(),
  text: 'I hope you enjoy my restaurant!',
  author: {
    name: 'alberto',
    avatarUrl: './public/assets/i/alberto.png'
  }
}
function App() {
  return (
    <Comment date={Comment.date} text={Comment.text} author={Comment.author} />
  );
}

export default App;