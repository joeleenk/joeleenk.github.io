import React from 'react';
import FavoriteColors from './Colors';

/**
 * About component.
 *
 * @returns about
 */
const About = () => (
	<section id="about" className="about">
		<h2>About Me</h2>
		<section className="mission">
			<h3>Professional mission</h3>
			<p>
				I combine my passion for user experience design and
				accessibility with my development skills to make the web more
				beautiful, usable and inclusive.
			</p>
		</section>
		<section className="background">
			<h3>My background</h3>
			<p>
				I've always considered myself an artist and started college on a
				fine arts/graphic design track. Along the way, I dabbled a bit
				in photography, video, and animation (2D and 3D). I ended up
				focusing on web design, and over the course of my career have
				become a full stack developer with a focus on frontend/UX
				development. I still geek out about typography, color theory,
				balance, and other design principles - I just use code as my
				brush these days. I learn new things all the time!
			</p>
		</section>
		<section className="passions">
			<h3>
				Things I <span className="large symbol">&hearts;</span>
			</h3>
			<ul className="things-I-love">
				<li>WordPress</li>
				<li>JavaScript</li>
				<li>CSS/Sass</li>
				<li>Semantic HTML</li>
				<li>Inclusivity</li>
				<li>Yarn (I'm a knitter!)</li>
				<li>Colors</li>
				<li>Typography</li>
				<li>Handmade art</li>
				<li>Small/local businesses</li>
				<li>Tea</li>
				<li>Decaf coffee</li>
				<li>Dark chocolate</li>
				<li>Audio books</li>
				<li>Feminism</li>
				<li>Pottery</li>
				<li>Equity, social justice and equal rights</li>
			</ul>
		</section>
		<aside className="fun-fact">
			<h3>Fun fact</h3>
			<p>
				My favorite color is rainbow. I also have a favorite shade of
				each color!
			</p>
			<FavoriteColors />
			<p>
				(Ok, it's possible my favorite is hot pink...{' '}
				<span className="large symbol">&hearts;</span>)
			</p>
		</aside>
	</section>
);
export default About;
