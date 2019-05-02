import React from "react";

var PrintButton = () => ({
  render() {
    return <button onClick={this._onClick}>Print this page</button>;
  },
  _onClick() {
    window.print();
  }
});
export default PrintButton;
