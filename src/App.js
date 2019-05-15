import React, { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./App.scss";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Raleway:200,400,700", "Raleway Dots:400"]
  }
});

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;
