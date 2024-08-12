import React from 'react';

/**
 * Print button component.
 *
 * @param {function} setIsPrinting Function to set isPrinting state.
 *
 * @returns print button
 */
const PrintButton = ({ setIsPrinting }) => {
	// Click handler for print button.
	const printHandler = () => {
		// New promise to set the isPrinting state to true, then open the print dialog.
		new Promise((resolve, reject) => {
			setIsPrinting(true);
			resolve();
		})
			.then(() => {
				window.print();
			})
			.catch(() => {
				console.error('Something went wrong with the print!');
			});
	};

	// Return the print button.
	return <button onClick={printHandler}>Print this section</button>;
};
export default PrintButton;
