import React from "react";
import resumeFile from "../documents/Eleweke_Ifeoma_Resume_Version_IV.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Ifeoma Eleweke,</span> a DevOps Engineer
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              I build robust, scalable, and efficient infrastructure solutions. 
              My journey into Cloud & DevOps began with my curiosity for Linux systems, 
              which eventually led me to explore numerous cutting-edge technologies shaping the DevOps landscape today. 
              I'm committed to employing automation to streamline workflows, accelerate software delivery, 
              and drive operational efficiency.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              In every project, I strive to push the boundaries of what's possible, 
              blending creativity with technical skills to create solutions that transcend expectations. 
              My commitment to excellence, coupled with a relentless pursuit of knowledge, 
              drives my journey in these fast-changing world of DevOps. 
              Let's collaborate to shape the future of technology, one deployment at a time.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Ifeoma Eleweke
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:iffye559@gmail.com">Chat with Ifeoma</a>
                </li>
                <li>
                  <span className="fw-600 me-2">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/ifeoma-eleweke/">in/ifeoma-eleweke</a>
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Irvine,
                  California
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
