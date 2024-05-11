import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Linux Fundamentals",
      desc: "Proficiency in navigating and administering Linux-based operating systems, including understanding command-line interfaces, file systems, user management, permissions, and basic networking concepts.",
      icon: "fa-brands fa-linux",  // "fas fa-palette"
    },
    {
      name: "CI/CD",
      desc: "Proficient in automating software delivery processes to achieve rapid and reliable software releases. This involves integrating code changes frequently and deploying code to production environments efficiently and consistently.",
      icon: "fa-solid fa-infinity", //"fas fa-desktop"
    },
    {
      name: "Bash Scripting",
      desc: "Adept in writing Bash scripts to automate repetitive tasks and streamline workflows on Unix-like operating systems. This includes creating scripts for tasks such as file manipulation, system administration, and process automation.",
      icon: "fa-solid fa-terminal", //"fas fa-pencil-ruler"
    },
    {
      name: "Containerization",
      desc: "Competence in utilizing containerization technologies like Docker to package, distribute, and run applications in isolated environments. This involves creating and managing container images, orchestrating containers, and ensuring scalability and portability of applications across different environments.",
      icon: "fa-brands fa-docker", //"fas fa-paint-brush"
    },
    {
      name: "Infrastructure as Code (IaC)",
      desc: "Proficiency in managing and provisioning infrastructure through code rather than manual processes. This involves using tools like Terraform or CloudFormation to define infrastructure components such as servers, networks, and storage in a declarative manner, enabling automation, consistency, and version control.",
      icon: "fa-solid fa-file-pen", //"fas fa-chart-area"
    },
    {
      name: "Amazon Web Services (AWS)",
      desc: "Extensive knowledge and experience in utilizing AWS cloud services to build and deploy scalable, reliable, and cost-effective solutions. This includes a deep understanding of various AWS services such as EC2, S3, RDS, IAM, and key concepts like scalability, elasticity, security, and cost optimization in AWS environments.",
      icon: "fa-brands fa-aws", //"fas fa-bullhorn"
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
