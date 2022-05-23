import { Fragment } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaMobileAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import Form from "components/Form";

import person from "assets/db/person";
import iconStyle from "styles/iconStyle";
import iconStyleSmall from "styles/iconStyleSmall";

import s from "./Contact.module.scss";

function Contact() {
  const { phone, email, location, links } = person;
  const [linkedIn, gitHub] = links;
  return (
    <Fragment>
      <h2 className="title">Contact me</h2>
      <div className={s.container}>
        <div className={s.contacts}>
          <p>Feel free to contact me if you have any questions.</p>
          <p className={s.flex}>
            <FaMapMarkerAlt style={iconStyleSmall} className={s.logo} />
            Location: {location}
          </p>
          <p className={s.flex}>
            <FaEnvelope style={iconStyleSmall} className={s.logo} />
            Email:
            <a href={`mailto:${email}`} className={s.link}>
              {email}
            </a>
          </p>
          <p className={s.flex}>
            <FaMobileAlt style={iconStyleSmall} className={s.logo} />
            Phone:
            <a href={`tel:${phone.replaceAll("-", "")}`} className={s.link}>
              {phone}
            </a>
          </p>
          <div className={s.social}>
            <a
              href={linkedIn.url}
              aria-label={linkedIn.title}
              className={s.icon}
            >
              <FaLinkedin style={iconStyle} />
            </a>
            <a href={gitHub.url} aria-label={gitHub.title} className={s.icon}>
              <FaGithub style={iconStyle} />
            </a>
          </div>
        </div>
        <Form />
      </div>
    </Fragment>
  );
}
export default Contact;
