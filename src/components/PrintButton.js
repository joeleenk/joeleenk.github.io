import React from "react";

var PrintButton = () => ({
  render() {
    return <button onClick={this._onClick}>Print this section</button>;
  },
  _onClick() {
    window.print();
  }
});
export default PrintButton;
