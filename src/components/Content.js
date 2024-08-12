import React from 'react';
import About from './About';
import Work from './Work';
import Resume from './Resume';

/**
 * Content component.
 *
 * @param {boolean} isPrinting Find out if we're printing.
 * @param {function} setIsPrinting Function to set isPrinting state.
 *
 * @returns content
 */
const Content = ({ isPrinting, setIsPrinting }) => (
	<main role="main" className="app-content">
		<About />
		<Work />
		<Resume isPrinting={isPrinting} setIsPrinting={setIsPrinting} />
	</main>
);
export default Content;
