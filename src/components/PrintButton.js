import React from "react";

const printHandler = () => {
  window.print();
}

const PrintButton = () => (
  <button onClick={printHandler}>Print this section</button>
);
export default PrintButton;
