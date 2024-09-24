import React from 'react';
import jobsData from '../data/jobsData';
import Job from './Job';
import PrintButton from './PrintButton';
import resume from '../files/JoeleenKennedyResume2024.pdf';

/**
 * Resume component.
 *
 * @param {boolean} isPrinting Find out if we're printing.
 * @param {function} setIsPrinting Function to set isPrinting state.
 *
 * @returns resume
 */
const Resume = ({ isPrinting, setIsPrinting }) => {
	// Map the jobs JSON data to a list of jobs.
	const jobsList = jobsData.jobsData.map((JobsDataItem, index) => (
		<Job key={index} {...JobsDataItem} isPrinting={isPrinting} />
	));

	// Return the resume section.
	return (
		<section id="resume" className="resume">
			<h2>Resume</h2>
			<ul className="print-resume">
				<li>
					<PrintButton setIsPrinting={setIsPrinting} />
				</li>
				<li>
					<a href={resume}>
						<small>
							Button not working? Download a pre-compiled PDF of
							my resume.
						</small>
					</a>
				</li>
			</ul>
			<section className="skills">
				<h3>Skills</h3>
				<p>
					PHP, HTML, CSS, Sass, JavaScript, React, Webpack, WordPress,
					accessibility, responsive design, user experience, technical
					leadership
				</p>
			</section>
			<section className="experience">
				<h3>Experience</h3>
				{jobsList}
			</section>
			<section className="education">
				<h3>Education</h3>
				<h4>Daytona Beach Community College</h4>
				<p>
					Associate of Science in Digital Media Technology, <br />
					Summa Cum Laude
				</p>
				<p>
					Associate of Science in Graphic Design Technology, <br />
					with honors
				</p>
			</section>
			<section className="speaking" id="speaking">
				<h3>Speaking</h3>
				<ul>
					<li>
						<a href="https://youtu.be/EL9x9aw54as?t=21222">
							<em>
								A Technical Deep Dive Into Our Favorite Features
								of the New Harvard Gazette Site
							</em>
						</a>
						WordCamp US | Portland, OR | September 2024
					</li>
					<li>
						<a href="https://2024.wpcampus.org/schedule/extending-core-how-to-architect-new-features-and-simplify-workflows/#video">
							<em>
								Extending core: how to architect new features
								and simplify workflows
							</em>
						</a>
						WPCampus | Washington, DC | August 2024
					</li>
					<li>
						<a href="https://www.youtube.com/watch?v=9zdtDF-C15k">
							<em>
								Accessibility and innovation at Harvard Gazette
							</em>
						</a>
						Human Made .edu: WordPress in Higher Ed | Virtual | July
						2024
					</li>
					<li>
						<em>
							Accessibility Meets Innovation: Redefining
							Storytelling in WordPress
						</em>
						Harvard Digital Academy | Virtual | June 2024
					</li>
					<li>
						<em>Customizing WordPress</em>
						DC Web Women | Washington, DC | 2013
					</li>
					<li>
						<em>jQuery Basics for Web Developers</em>
						DC Web Women | Washington, DC | 2013
					</li>
					<li>
						<em>What’s New with HTML5 and CSS3?</em>
						DC Web Women | Washington, DC | 2012
					</li>
				</ul>
			</section>
		</section>
	);
};
export default Resume;
