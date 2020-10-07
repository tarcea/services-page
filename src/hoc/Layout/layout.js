import React, { Component } from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import './layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
          <Header />
          {this.props.children}
          <Footer />
      </div>
    );
  }
}

export default Layout;
