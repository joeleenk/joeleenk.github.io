import React from "react";

/**
 * Clients component.
 *
 * @param {object} clientsListData The clients list object.
 *
 * @returns clients
 */
const Clients = ({ clientsListData }) => {
	const clientList = clientsListData.map((client, index) =>
		<li key={index} className="client">
			<a href={client.siteURL}>
			{client.clientName}
			</a>
		</li>
	);

	// Return the clients component.
	return (
		<ul className="client-list">
			{clientList}
		</ul>
	);
}
export default Clients;
