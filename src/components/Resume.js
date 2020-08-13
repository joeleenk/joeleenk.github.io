import React from "react";
import jobsData from "../jobsData";
import Job from "./Job";
import PrintButton from "./PrintButton";
import resume from "../files/JoeleenKennedyResume2019.pdf";

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
  const jobsList = jobsData.jobsData.map((JobsDataItem, index) =>
    <Job key={index} {...JobsDataItem} isPrinting={isPrinting} />
  );

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
        {jobsList}
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
}
export default Resume;
