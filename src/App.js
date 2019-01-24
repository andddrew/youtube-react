import React, { Component } from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import { SideBar } from './containers/SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <SideBar />
      </div>
    );
  }
}

export default App;
