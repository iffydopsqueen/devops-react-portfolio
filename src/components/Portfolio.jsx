import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: "Design",
    BRAND: "Brand",
    PHOTOS: "Photos",
  };

  const projectsData = [
    {
      title: "Blogging Project",
      projectInfo:
        "This project aims to create a fully functional blog platform with a focus on the backend implementation. It utilizes modern web technologies to provide a seamless user experience and efficient data management.",
      technologies: "PUG, SASS, HTTPS, NodeJS, Express, MongoDB, Mongoose, JSON Web Token",
      date: "February 2024",
      url: {
        name: "Blogging Project",
        link: "https://github.com/iffydopsqueen/blogging-project",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/iffy-eleweke/",
        github: "https://github.com/iffydopsqueen",
        mail: "mailto:iffye559@gmail.com",
      },
      thumbImage: "images/projects/blogging-project-home-full.png",
      sliderImages: [
        "images/projects/blogging-project-home-half.png",
        "images/projects/blogging-project-about-full.png",
        "images/projects/blogging-project-about-half.png",
        "images/projects/blogging-project-contact.png",
        "images/projects/blogging-project-dashboard.png",
      ],
      // categories: [filters.BRAND],
    },
    {
      title: "Splashes Project",
      projectInfo:
        "This project is a dedicated kid's swimming lessons website, serving as a practical application to evaluate and showcase front-end web development skills. It is focused exclusively on front-end features, the project emphasizes the structure, aesthetics, and overall user experience of the website.",
      technologies: "HTML5, CSS3, JavaScript, Bootstrap, VueJS",
      date: "September 2023",
      url: {
        name: "Splashes Project",
        link: "https://github.com/iffydopsqueen/splashes-project",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/iffy-eleweke/",
        github: "https://github.com/iffydopsqueen",
        mail: "mailto:iffye559@gmail.com",
      },
      thumbImage: "images/projects/splashes-logo.png",
      sliderImages: [
        "images/projects/splashes-about-us.jpeg",
        "images/projects/splashes-contact-us.jpeg",
        "images/projects/splashes-blog.jpeg",
        "images/projects/splashes-pricing.jpeg",
      ],
      // categories: [filters.DESIGN],
    },
    {
      title: "TerraTowns",
      projectInfo:
        "This project leverages Infrastructure as Code (IaC) to create a 'terra home'. Terrahomes are personalized websites seamlessly connected to the TerraTown network.",
      technologies: "Terraform, CloudFront, S3, AWS API, IAM, RDS, Postgres",
      date: "October 2023",
      url: {
        name: "TerraTowns",
        link: "https://github.com/iffydopsqueen/terraform-beginner-bootcamp-2023",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/iffy-eleweke/",
        github: "https://github.com/iffydopsqueen",
        mail: "mailto:iffye559@gmail.com",
      },
      thumbImage: "images/projects/terratowns-architecture-week2.png",
      sliderImages: [
        "images/projects/terratowns-architecture-week0.png",
        "images/projects/terratowns-architecture-week1.png",
        "images/projects/terratowns-login.png",
        "images/projects/terratowns.png",
      ],
      // categories: [filters.PHOTOS],
    },
    {
      title: "Cruddur",
      projectInfo:
        "This repository uses a custom domain hosted on AWS Route53 for the micro-blogging Python Flask application 'Cruddur', running on Docker containers (ECS Fargate). This application allows you to log in, create a post 'crud', and send private messages to other users of the platform. The posts are ephemeral after a period of time.",
      technologies: "Python Flask, Route53, Docker, ECS, CloudFormation, CodeDeploy, CodePipeline, CodeBuild, Bash, Postgres, DynamoDB",
      date: "February 2023",
      url: {
        name: "Cruddur",
        link: "https://github.com/iffydopsqueen/aws-bootcamp-cruddur-2023",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/iffy-eleweke/",
        github: "https://github.com/iffydopsqueen",
        mail: "mailto:iffye559@gmail.com",
      },
      thumbImage: "images/projects/cruddur-banner.jpg",
      sliderImages: [
        "images/projects/cruddur-screenshot.png",
        "images/projects/cruddur-screenshot-avatar.png",
        "images/projects/cruddur-screenshot-profile.png",
      ],
      // categories: [filters.BRAND, filters.PHOTOS],
    },
    {
      title: "Project Title 5",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/iffy-eleweke/",
        github: "https://github.com/iffydopsqueen",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-5.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      // categories: [filters.DESIGN],
    },
    {
      title: "Full Stack MERN Project",
      projectInfo:
        "This project leverages several web development tools, such as ReactJS, Express, MongoDB, Bootstrap 5, and Tailwind CSS, to build a sleek and secure blogging platform.",
      technologies: "ExpressJS, React, JavaScript, MongoDB, Mongoose, Bootstrap 5, Tailwind CSS, HTTPS, NodeJS, JSON Web Token",
      date: "March 2024",
      url: {
        name: "Blog Website",
        link: "stories-blogging-website.netlify.app",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/iffy-eleweke/",
        github: "https://github.com/iffydopsqueen",
        mail: "mailto:iffye559@gmail.com",
      },
      thumbImage: "images/projects/fullstack-home-page-screen.png",
      sliderImages: [
        "images/projects/fullstack-sign-in-screen.png",
        "images/projects/fullstack-sign-up-screen.png",
        "images/projects/fullstack-blog-content-4.png",
        "images/projects/fullstack-blog-content-1.png",
        "images/projects/fullstack-blog-content-2.png",
        "images/projects/fullstack-blog-content-3.png"
      ],
      // categories: [filters.BRAND],
    },
    // {
    //   title: "Project Title 7",
    //   projectInfo:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    //   client: "Ruby Clinton",
    //   technologies: "iOS, HTML5, CSS3, PHP, Java",
    //   industry: "Art & Design",
    //   date: "July 16, 2019",
    //   url: {
    //     name: "www.example.com",
    //     link: "https://www.example.com",
    //   },
    //   socialLinks: {
    //     facebook: "http://www.facebook.com/",
    //     twitter: "http://www.twitter.com/",
    //     google: "http://www.google.com/",
    //     instagram: "http://www.instagram.com/",
    //     mail: "mailto:example@gmail.com",
    //   },
    //   thumbImage: "images/projects/project-7.jpg",
    //   sliderImages: [
    //     "images/projects/project-1.jpg",
    //     "images/projects/project-5.jpg",
    //   ],
    //   categories: [filters.DESIGN, filters.PHOTOS],
    // },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  // const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          {/* <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul> */}
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " 
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
