import "./App.css";

function App() {
  /* ================= RESEARCH DATA ================= */

  const research = [
    {
      title: "Disease Mapping Using AI Cluster",
      authors:
        "Sammed Mangave, AP Dr Vijanth Sagayan A/L Asirvadam — UTP Malaysia Research Fellowship",
      description:
        "Clustering-based analysis for mapping disease patterns using large-scale health datasets.",
      status: "Unpublished research · 2024",
      paperLink: "https://github.com/Sammed-Mangave/Mapper/blob/main/Disease%20Mapping%20using%20AI%20cluster%20Report.pdf",
      codeLink: "https://github.com/Sammed-Mangave/Mapper",
      dateset: "https://github.com/Sammed-Mangave/Mapper/blob/main/code1_dataset.csv",
    },
  ];

  /* ================= PROJECT DATA ================= */

  const projects = [
    {
      title: "AIvisora",
      description:
        "Every concept you read, visualize it in 3D. Just prompt it · 2025",
      link: "https://www.getaivisora.com",
      video: "/videos/AIvisoraV1.mp4",
    },

    {
      title: "Movie Browser",
      description:
        "React movie recommendation browser using OMDB dataset · 2023",
      link: "https://samycolen.github.io/Movie-Browser/",
      video: "/videos/MovieBrowser.mp4",
    },

    {
      title: "3D Printer Re-Installation",
      description:
        "Repair and reinstallation of institutional 3D printer · 2023",
      link: "#",
      video: "/videos/3Dprinter/3D.mp4",
    },
    {
      title: "trappedMachine",
      description:
        "Workspace synchronization across multiple devices",
      link: "https://sammed-mangave.github.io/trappedMachine/",
      image: "/images/project/Trapped/image.png",
    },
    {
      title: "TagCount",
      description:
        "RFID-based attendance system for students..each students identycard will have specific tag's which will act as a attendance filler.",
      link: "/images/project/RFID/circuit.png",
      image: "/images/project/RFID/Preview.png",
    },

    {
      title: "DATAsset",
      description:
        "Project exploring data as future assets n put it at center.",
      link: "https://github.com/Sammed-Mangave/DATAsset",
      image: "/images/project/DATA/image.png",
    },

    {
      title: "Sentiment Analysis",
      description:
        "Sentiment analysis model using Stanford NLP library",
      link: "https://github.com/samycolen/SentimentAnalysis",
      image: "/images/project/SentimentAnalysis/image.png",
    },

  ];

  return (
    <div className="App">
      <div id="Droot">
        {/* HEADER */}
        <div id="Dheader" className="Ddesc">
          <p>Sammed Mangave</p>
        </div>

        {/* BIO */}
        <div id="para" className="Ddesc">
          <p>
            Building{" "}
            <a href="https://www.getaivisora.com" target="_blank" rel="noreferrer">
              AIvisora
            </a>{" "}
            <br></br>
            — a prompt-to-3D visualization platform that turns prompts into
            interactive visualizations, helping creators, teachers, students,
            and anyone understand how things work visually.
          </p>

          <p>
            I also did a research fellowship at{" "}
            <a href="https://www.utp.edu.my/Pages/Home.aspx">
              UTP, Malaysia
            </a>
            , under the supervision of{" "}
            <a href="https://scholar.google.com.my/citations?user=nE7YluwAAAAJ&hl=en">
              AP Dr Vijanth Sagayan A/L Asirvadam
            </a>
            . Research is based on how we can use AI clusters to map diseases.
          </p>

          <p id="email">sammed.Mangave20 [at] gmail [dot] com</p>
        </div>

        {/* SOCIAL */}
        <div id="dico" className="Ddesc">
          <a href="https://twitter.com/SammedMangave">Twitter</a>
          <a href="https://github.com/samycolen">GitHub</a>
          <a href="https://www.linkedin.com/in/SammedMangave/">LinkedIn</a>
          <a href="https://www.instagram.com/_sammed.mangave/">Instagram</a>
          <a href="https://vsco.co/arts-by-sammed/gallery">Arts</a>
          <a href="https://sammedmangave.substack.com/">Essays</a>
        </div>
      </div>

      {/* ================= RESEARCH SECTION ================= */}
      <div id="research" className="Ddesc">
        <h2>Research</h2>

        {research.map((r, i) => (
          <div key={i} className="researchItem">
            <h3>{r.title}</h3>

            <p className="authors">{r.authors}</p>

            <p>{r.description}</p>

            <p className="status">{r.status}</p>

            <p>
              {r.paperLink && <a href={r.paperLink}>[Paper]</a>}{" "}
              {r.codeLink && <a href={r.codeLink}>[Code]</a>}{" "}
              {r.dateset && <a href={r.dateset}>[Dataset]</a>}
            </p>
          </div>
        ))}
      </div>

      {/* ================= PROJECTS SECTION ================= */}

      <div id="projects" className="Ddesc">
        <h2>Projects</h2>

        <div className="projectGrid">
          {projects.map((p, i) => (
            <a key={i} href={p.link} target="_blank" className="projectCard" rel="noreferrer">
              {p.video ? (
                <video
                  src={p.video}
                  className="projectVideo"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
              ) : (
                <img
                  src={p.image}
                  alt={p.title}
                  className="projectImage"
                />
              )}
              <h3 className="projectTitle">{p.title}</h3>

              <p className="projectDesc">{p.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;