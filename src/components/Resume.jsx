import React from "react";
import resumeFile from "../documents/Eleweke_Ifeoma_Resume_Version_IV.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2024",
      title: "Master of Science in Computer Science",
      place: "Westcliff University",
      desc: "This program provides an understanding of fundamental computing principles and software development methodologies.",
      courseTitle: "Relevant Courses",
      courses: [
        "1. Big Data Analytics and Visualization",
        "2. Information Technology Project Management ",
        "3. Managing Information Systems & Technology",
        "4. Front End Web Development - 'Splashes Project'",
        "5. Back End Web Development - 'Simple Blogging Project'",
        "6. Advanced Full Stack Web Development - 'Full Stack Blog Project'",
      ],
    },
    {
      yearRange: "2019",
      title: "Bachelor of Science in Computer Science",
      place: "Jacksonville University",
      desc: "This program emphasizes research, innovation, eadership roles in industry, and the development of advanced technical skills. ",
      courseTitle: "Relevant Courses",
      courses: [
        "1. Data Structures",
        "2. Application Development",
        "3. Introduction to Cybersecurity",
        "4. Networks & Wireless Communication",
        "5. Operating Systems/Systems Administration",
        "6. Introduction to Database Design & Development ",
      ],
    },
  ];

  const experienceDetails = [    
    {
      yearRange: "2022 - 2023",
      title: "DevOps Engineer",
      place: "Jo-Ann Stores, LLC",
      desc: [
        "1. Developed automated CI/CD pipelines using Buildkite and Docker, reducing errors and accelerating production processes.",
        "2. Achieved consistent and reliable deployment of resources by designing and implementing infrastructure as code (IaC) using Terraform.",
        "3. Monitored system performance with Datadog, CloudWatch, PagerDuty, and AWS X-ray, improving reliability.",
        "4. Improved system stability and consistency by maintaining Bash scripts for automating routine tasks reducing manual errors."
      ],
    },
    {
      yearRange: "2021 - 2022",
      title: "Jr. DevOps Engineer",
      place: "WeaveUp",
      desc: [
        "1. Designed comprehensive dashboards to provide real-time insights into performance metrics and enable proactive decision-making.",
        "2. Automated infrastructure provisioning and management tasks with Terraform, reducing deployment time and human error.",
        "3. Implemented CI/CD methodologies using Buildkite, Docker, and Git/GitHub, accelerating software development cycles."
      ],
    },
    {
      yearRange: "2020 - 2021",
      title: "IAM Analyst",
      place: "Identity and Access Solutions",
      desc: [
        "1. Implemented IAM policy types and procedures, strengthening the organization's security framework.",
        "2. Conducted access reviews, achieving a 25% reduction in overprivileged accounts.",
        "3. Collaborated to implement role-based access control (RBAC) models, streamlining access management processes."
      ],
    },
  ];

  const skills = [
    {
      name: "Linux Fundamentals",
      percent: 80,
    },
    {
      name: "Continuous Integration/Continuous Deployment (CI/CD)",
      percent: 75,
    },
    {
      name: "Infrastructure as Code (IaC)",
      percent: 95,
    },
    {
      name: "Bash Scripting",
      percent: 70,
    },
    {
      name: "Containerization",
      percent: 75,
    },
    {
      name: "Amazon Web Services (AWS)",
      percent: 85,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                  <br />
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.courseTitle}
                  </p>
                  {/* Mapping through desc array to display each item */}
                  {Array.isArray(value.courses) ? (
                    value.courses.map((item, idx) => (
                      <p
                        key={idx}
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {item}
                      </p>
                    ))
                  ) : (
                    <p
                      className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                    >
                      {value.courses}
                    </p>
                  )}
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  {/* Mapping through desc array to display each item */}
                  {Array.isArray(value.desc) ? (
                    value.desc.map((item, idx) => (
                      <p
                        key={idx}
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {item}
                      </p>
                    ))
                  ) : (
                    <p
                      className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                    >
                      {value.desc}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;