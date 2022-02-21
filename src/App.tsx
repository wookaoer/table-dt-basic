import React from 'react';
import Header from './header';
import Navbar from './navbar';
import Content from './content';
import Footer from './footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="main-container" id="container">
        <Navbar />
        <div className="main-content" id="content">
          <Content />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
