import React, { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  }
}

export default App;
