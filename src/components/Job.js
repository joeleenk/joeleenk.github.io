import React from 'react';

/**
 * Job component. Displays individual job item.
 *
 * @param {boolean} isPrinting Find out if we're printing.
 * @param {string} companyName Name of the company.
 * @param {string} fullDate Full date of employment.
 * @param {array} jobPositions Array of different positions held at the company.
 *
 * @returns article
 */
const Job = ({ isPrinting, companyName, fullDate, jobPositions }) => {
	// Get the company name and full date, if any.
	const CompanyTitle = ({ companyName, fullDate }) => (
		<h4>
			{companyName}
			{fullDate && (
				<span className="job__date job__date--full">{fullDate}</span>
			)}
		</h4>
	);

	// Get job title(s) and employment date(s).
	const JobMeta = ({ jobTitle, employmentDate }) => (
		<>
			<h5>{jobTitle}</h5>
			<p className="job__date">{employmentDate}</p>
		</>
	);

	// Get job description(s).
	const JobDescription = ({ jobDescription }) => (
		<p className="job__description">{jobDescription}</p>
	);

	// Get the full job details. If we're isPrinting, group content in divs.
	const jobFullDetails = jobPositions.map((jobPosition, index) => (
		<React.Fragment key={index}>
			{isPrinting ? (
				<>
					<div className="job--left">
						{index === 0 && (
							<CompanyTitle
								companyName={companyName}
								fullDate={fullDate}
							/>
						)}
						<JobMeta {...jobPosition} />
					</div>
					<div className="job--right">
						<JobDescription {...jobPosition} />
					</div>
				</>
			) : (
				<>
					{index === 0 && (
						<CompanyTitle
							companyName={companyName}
							fullDate={fullDate}
						/>
					)}
					<JobMeta {...jobPosition} />
					<JobDescription {...jobPosition} />
				</>
			)}
		</React.Fragment>
	));

	// Return the article.
	return <article className="job">{jobFullDetails}</article>;
};
export default Job;
