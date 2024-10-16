import "./App.css";
import { useState } from "react";

function App() {
  const projects = [
    {
      infoLink: "#",
      title: "Sentiment Analysis",
      description:
        "A random Model I made for fun to analyze different sentiments.",
      GHlink: "https://github.com/samycolen/SentimentAnalysis",
      box: true,
    },
    {
      infoLink: "#",
      title: "Disease Mapping Using AI Cluster",
      description: "Use of clusters to Map the diseases",
      GHlink: "https://github.com/samycolen/Mapper",
      box: true,
    },
    {
      infoLink: "#",
      title: "AImediaXfactor",
      description: "A platform to understand the AI and Media w/t Xfactors",
      GHlink: "#",
      box: true,
    },
    {
      infoLink: "#",
      title: "DATAsset",
      description: "Project's direction : data will going to assets in future.",
      GHlink: "https://github.com/samycolen/DATAsset",
      box: true,
    },
    {
      infoLink: "#",
      title: "3D printer Re-Installation ",
      description: "A project to re-install/repair of college's 3D printer.",
      GHlink: "#",
      link: "#",
      box: true,
    },
    {
      infoLink: "#",
      title: "ME",
      description: "A React Business Website for neighbours business",
      GHlink: "https://github.com/samycolen/ME",
      box: true,
    },
    {
      infoLink: "#",
      title: "Movie Browser",
      description: "A react based Movie Browser using OMDB's Movie dataset",
      link: "https://samycolen.github.io/Movie-Browser/",
      GHlink: "https://github.com/samycolen/Movie-Browser",
      box: true,
    },
    {
      infoLink: "#",
      title: "First Profile Website ",
      description: "A Profile website using html,css and js",
      link: "https://samycolen.github.io/SammedMangave/",
      GHlink: "https://github.com/samycolen/SammedMangave",
      box: true,
    },
    {
      infoLink: "#",
      title: "trappedMachine",
      description:
        "Simple project to manage the workspace across multiple device",
      GHlink: "https://github.com/samycolen/trappedMachine",
      box: true,
    },
    {
      infoLink: "#",
      title: "TagCount",
      description:
        "RFID tag based electronics sytem project for College student's Attendance",
      GHlink: "#",
      box: true,
    },
  ];

  // State to manage which project is expanded
  const [expandedProject, setExpandedProject] = useState([]);

  // Toggle the expansion of a project
  const toggleProject = (e, index) => {
    e.preventDefault(); // Prevents link refresh

    if (expandedProject.includes(index)) {
      // If it's expanded, remove it from the array
      setExpandedProject(expandedProject.filter((i) => i !== index));
    } else {
      // If it's not expanded, add it to the array
      setExpandedProject([...expandedProject, index]);
    }
  };

  return (
    <div className="App">
      <div id="Droot">
        {/* Header */}
        <div id="Dheader" className="Ddesc">
          <p>Sammed Mangave</p>
        </div>

        {/* Discription */}
        <div id="para" className="Ddesc">
          <p>Work at Launchpad.ai fellowship </p>
          <p>
            Building <a href="twitter">AImediaXfactor</a>, A platform to
            understand the AI and Media w/t Xfactors like
            Politics,Education,Consumerisms etc
          </p>
          <p>
            I also did a research fellowship at{" "}
            <a href="https://www.utp.edu.my/Pages/Home.aspx">UTP, Malaysia</a>,
            under the supervision of
            <a href="https://scholar.google.com.my/citations?user=nE7YluwAAAAJ&hl=en">
              {""} AP Dr Vijanth Sagayan A/L Asirvadam
            </a>
            .
            <br /> Research is based on how can we use AI cluster to Map the
            diseases.
          </p>
          <p id="email">sammed.Mangave20 [at] gmail [dot] com</p>
        </div>

        <div id="dico" className="Ddesc">
          <a href="https://twitter.com/karpathy">
            <img src="/images/twitter.png" alt="" className="iico" />
          </a>
          <a href="https://github.com/samycolen">
            <img src="/images/github.png" alt="" className="iico" />
          </a>
          <a href="https://www.linkedin.com/in/SammedMangave/">
            <img src="/images/Linkedin.png" alt="" className="iico" />
          </a>
          <a
            href="https://www.linkedin.com/in/SammedMangave/"
            className="dlink"
          >
            [Essays]
          </a>
          <a
            href="https://www.linkedin.com/in/SammedMangave/"
            className="dlink"
          >
            [Resume]
          </a>
          <a
            href="https://www.linkedin.com/in/SammedMangave/"
            className="dlink"
          >
            [Papers]
          </a>
        </div>
      </div>

      <div id="dproj" className="Ddesc">
        <p>Projects</p>
      </div>

      <div className="Ddesc">
        <ul>
          {projects.map((project, index) => (
            <>
              <li key={index} className="DlistDiv">
                <div className="DlistInfo">
                  {/* Left side with [info] link that toggles the box */}[
                  <a
                    href={project.infoLink}
                    onClick={(e) => toggleProject(e, index)}
                    className=" text-red-500 underline mr-4"
                  >
                    info
                  </a>
                  ]
                </div>

                {/* Right side with project title and description */}
                <div>
                  <a href={project.GHlink} className="DlistDesc ">
                    {project.title}
                  </a>{" "}
                  - {project.description}
                </div>
              </li>
              {/* Conditionally render the box when expanded */}

              {expandedProject.includes(index) && (
                <div
                  id="DlistDivDown"
                  key={index + `-details`}
                  className="DlistDiv "
                >
                  <div className="dProjSpan">
                    <p className="dProjSpanHead">
                      <a href={project.GHlink}>{project.title}</a>
                    </p>
                    <p>{project.description}</p>
                  </div>
                </div>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
