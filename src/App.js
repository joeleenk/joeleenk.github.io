import React, { Component, useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./App.scss";

/**
 * Main page component.
 *
 * @returns page content
 */
const Page = () => {
  // Set up a state to track whether we're printing.
  const [isPrinting, setIsPrinting] = useState(false);

  // Listen to see if we start printing and change the isPrinting state.
  useEffect(() => {
    const printMq = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('print');
    const mqEvent = mqList => setIsPrinting(!!mqList.matches);

    printMq.addListener(mqEvent);
    return () => printMq.removeListener(mqEvent);
  }, []);

  // Return the main page content.
  return (
    <>
      <Header isPrinting={isPrinting} />
      <Content isPrinting={isPrinting} setIsPrinting={setIsPrinting} />
      <Footer />
    </>
  );
}

/**
 * Main app component.
 *
 * @returns page component.
 */
class App extends Component {
  render() {
    return (
      <Page />
    );
  }
}

export default App;
