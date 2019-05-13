import React from "react";
import PrintButton from "./PrintButton";
import resume from "../files/JoeleenKennedyResume2019.pdf";

const Resume = () => (
  <section id="resume" className="resume">
    <h2>Resume</h2>
    <ul className="print-resume">
      <li>
        <PrintButton />
      </li>
      <li>
        <a href={resume}>
          <small>
            Button not working? Download a pre-compiled PDF of my resume.
          </small>
        </a>
      </li>
    </ul>
    <section className="skills">
      <h3>Skills</h3>
      <p>
        PHP, HTML, CSS, Sass, JavaScript, jQuery, React, Gulp, Grunt, Webpack,
        accessibility, responsive design, wireframes, moodboards
      </p>
    </section>
    <section className="experience">
      <h3>Experience</h3>
      <article className="pressable">
        <h4>Pressable (Remote)</h4>
        <h5>Concierge WordPress Engineer</h5>
        <p className="date">4/18 - 2/19</p>
        <p>
          Contract with Automattic’s Special Projects team to design and build
          custom sites for influential people and organizations, using
          WordPress.com and hosted WordPress instances.
        </p>
      </article>
      <article className="freelance">
        <h4>Freelance</h4>
        <h5>Front End Developer</h5>
        <p className="date">9/14 - 3/18</p>
        <p>
          Provide web services for agencies, small businesses and nonprofits.
        </p>
      </article>
      <article className="nlc">
        <h4>National League of Cities</h4>
        <h5>Manager, Web Development, Content and Analytics</h5>
        <p className="date">9/13 - 9/14</p>
        <p>
          Manage NLC overall web presence. Design and develop new features and
          multimedia projects. Plan and implement a site refresh/responsive
          design overhaul. Coordinate, redesign, and rebuild all NLC email
          marketing templates.
        </p>
      </article>
      <article className="matrix">
        <h4>
          Matrix Group International, Inc{" "}
          <span className="date full-date">(9/10 - 9/13)</span>
        </h4>

        <h5>User Experience Lead/Senior Front End Developer</h5>
        <p className="date">12/11 - 9/13</p>
        <p>
          Unify the designers, front end developers, and information architect,
          setting standards and championing the team. Review wireframes and
          designs from a technical viewpoint, implement designs in CMSs,
          including Sitefinity, Expression Engine and WordPress. Provide
          consultations, train clients, teach workshops and co-present webinars.
        </p>
        <h5>Designer/Front End Developer</h5>
        <p className="date">9/10 - 12/11</p>
        <p>
          Participate in client meetings, design wireframes, moodboards, web
          comps, and style guides. Bridge design and development teams.
          Implement designs into CMSs, including WordPress, Expression Engine,
          CommonSpot, and a custom ColdFusion CMS. Lead client CMS training.
        </p>
      </article>
      <article className="elon">
        <h4>Elon University</h4>
        <h5>Multimedia/Graphic Designer</h5>
        <p className="date">11/08 - 9/10</p>
        <p>
          Support university departments with web sites, blogs and wikis.
          Establish and maintain WordPress multisite installation. Create
          WordPress themes and instructional animations. Print design for
          posters, brochures, logos, shirts, etc. Mentor students and teach
          workshops.
        </p>
      </article>
      <article className="gd">
        <h4>Graphik Dimensions</h4>
        <h5>Junior Web Designer</h5>
        <p className="date">2/08 - 10/08</p>
        <p>
          Maintain pictureframes.com, e-promos, quarterly print catalog,
          high-end photo editing.
        </p>
      </article>
      <article className="freelance">
        <h4>Freelance</h4>
        <h5>Web/Multimedia Design</h5>
        <p className="date">12/06 - 12/11</p>
        <p>
          Design/development of web sites, e-promos, ads, animations, and
          presentations. Design logos, stationary packages, brochures, shirts,
          etc. Educational/instructional drawings for UNCG.
        </p>
      </article>
      <article className="cosmopro">
        <h4>Cosmopro Group</h4>
        <h5>Graphic/Web Designer</h5>
        <p className="date">5/06 - 1/07</p>
        <p>
          Maintain pevonia.com, ads for spafinder.com, presentations, print
          design for spa menus/flyers.
        </p>
      </article>
    </section>
    <section className="education">
      <h3>Education</h3>
      <h4>Daytona Beach Community College</h4>
      <p>Associate of Science in Digital Media Technology, Summa Cum Laude</p>
      <p>Associate of Science in Graphic Design Technology, with honors</p>
    </section>
    <section className="speaking">
      <h3>Speaking</h3>
      <ul>
        <li>
          DC Web Women, Washington, DC, <em>Customizing WordPress</em>, 2013
        </li>
        <li>
          DC Web Women, Washington, DC,{" "}
          <em>jQuery Basics for Web Developers</em>, 2013
        </li>
        <li>
          DC Web Women, Washington, DC, <em>What’s New with HTML5 and CSS3?</em>
          , 2012
        </li>
      </ul>
    </section>
  </section>
);
export default Resume;
