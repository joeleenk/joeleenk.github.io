import React from 'react';
import Projects from './Projects';
import Clients from './Clients';
import workData from '../data/workData';
import marshmallow from '../images/marshmallow.jpg';

/**
 * Work component.
 *
 * @returns work
 */
const Work = () => (
	<section id="work" className="work">
		<h2>My Work</h2>
		<h3>Featured Projects</h3>
		<Projects projectsListData={workData.workData.projects} />

		<h3>Some of my previous clients</h3>
		<Clients clientsListData={workData.workData.clients} />

		<h3>Code samples</h3>
		<p>
			<a href="https://github.com/joeleenk">I'm on GitHub!</a> Most of my
			work is hidden away in private repositories, but the source for this
			site lives there.{' '}
			<a title="Email Joeleen" href="mailto:joeleenk@gmail.com">
				Please let me know
			</a>{' '}
			if you'd like to work with me and need to see another code sample.
			I'll do my best to accommodate.
		</p>
		<p>
			In the meantime, here's a picture of my cat. &#9786;
			<br />
			<img
				src={marshmallow}
				className="marshmallow"
				alt="A white fluffy cat named Marshmallow laying in a floppy twist."
			/>
		</p>
		<p>
			<a href="#speaking">
				Please also see my public speaking section for links to
				recordings of me speaking at events.
			</a>
		</p>
	</section>
);
export default Work;
