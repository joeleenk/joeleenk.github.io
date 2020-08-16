import React from "react";
import Projects from "./Projects";
import Clients from "./Clients";
import workData from "../workData";
import tigger from "../images/tigger.jpg";

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

    <h3>Clients I've worked with</h3>
    <Clients clientsListData={workData.workData.clients} />

    <h3>Code samples</h3>
    <p>
      <a href="https://github.com/joeleenk">I'm on GitHub!</a> Currently most of my work is hidden away in private repositories, but the source for this site lives there. <a title="Email Joeleen" href="mailto:joeleenk@gmail.com">Please let me know</a> if you'd like to see another code sample, and I'll do my best to accommodate. &#9786;
    </p>
    <p>In the meantime, here's a picture of my cat:<br />
    <img src={tigger} className="tigger" alt="An elderly gray and white tabby cat named Tigger sleeping in a circle." />
    </p>
  </section>
);
export default Work;
