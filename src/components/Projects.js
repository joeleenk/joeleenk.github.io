import React from 'react';

/**
 * Projects component.
 *
 * @param {object} projectsListData The projects list object.
 *
 * @returns projects
 */
const Projects = ({ projectsListData }) => {
	// Get the project tags.
	const ProjectTags = ({ projectSkills }) => {
		// Map the projectsListData JSON data to a list of projects.
		const projectsList = projectSkills.map((skill, index) => (
			<li key={index} className="project__tag">
				{skill}
			</li>
		));
		// Return the tags.
		return <ul className="project__tags">{projectsList}</ul>;
	};

	// Map the projectsListData JSON data to a list of projects.
	const projectsList = projectsListData.map((project, index) => (
		<li key={index} className="project">
			<img
				src={project.desktopImg}
				className="project__img project__img--desktop"
				alt=""
			/>
			<img
				src={project.mobileImg}
				className="project__img project__img--mobile"
				alt=""
			/>
			<h4 className="project__name">
				<small className="client-name">{project.clientName}</small>
				{project.siteURL ? (
					<a href={project.siteURL}>
						<span>{project.projectName}</span>
					</a>
				) : (
					project.projectName
				)}
			</h4>
			<p className="project__description">{project.projectDescription}</p>
			{project.status && (
				<small className="project__status">
					<em>{project.status}</em>
				</small>
			)}
			<ProjectTags projectSkills={project.skills} />
		</li>
	));

	// Return the projects component.
	return <ul className="project-list">{projectsList}</ul>;
};
export default Projects;
