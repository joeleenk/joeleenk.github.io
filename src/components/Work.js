import React from "react";
import tigger from "../images/tigger.jpg";

/**
 * Work component.
 *
 * @returns work
 */
const Work = () => (
  <section id="work" className="work">
    <h2>My Work</h2>
    <h3>Previous projects</h3>
    <p>
      I've been working on web sites for over a decade, so I've touched and
      created many sites over the years. A few still exist, but most have been
      replaced with newer versions. If you have a specific type of project in
      mind, and you'd like to see my work,{" "}
      <a title="Email Joeleen" href="mailto:joeleenk@gmail.com">
        please reach out
      </a>
      , and I'll select some recent/relevant examples.
    </p>
    <h3>Code samples</h3>
    <p>
      <a href="https://github.com/joeleenk">I'm on GitHub!</a> Currently most of
      my work is hidden away in private repositories, but the source for this
      site lives there. Hopefully soon I'll have more public repos. &#9786;
    </p>
    <p>In the meantime, here's a picture of my cat:<br />
    <img src={tigger} className="tigger" alt="An elderly gray and white tabby cat named Tigger sleeping in a circle." />
    </p>
  </section>
);
export default Work;
