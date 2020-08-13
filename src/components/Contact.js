import React from "react";

/**
 * Contact component.
 *
 * @returns contact
 */
const Contact = () => (
  <ul className="contact-me">
    <li className="print-only">
    <a
      title="Map of Greensboro"
      href="https://goo.gl/maps/86h22PVTHJFBJF8S7"
    >
      Greensboro, NC
    </a>
    </li>
    <li className="print-only">
    <a title="Joeleen's website" href="https://joeleen.net/">
      joeleen.net
    </a>
    </li>
    <li>
    <a title="Email Joeleen" href="mailto:joeleenk@gmail.com">
      joeleenk@gmail.com
    </a>
    </li>
    <li>
    <a title="Call Joeleen" href="tel:13864536905">
      386-453-6905
    </a>
    </li>
  </ul>
);
export default Contact;
