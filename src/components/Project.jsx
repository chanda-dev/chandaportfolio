export default function Projects() {
  const projects = [
    {
      title: "E-learning Platform",
      tech: [
        {
          name: "React",
          image:
            "https://cdn.freelogovectors.net/wp-content/uploads/2023/02/react-logo-freelogovectors.net_.png",
        },
        {
          name: "Node.js",
          image: "https://www.svgrepo.com/show/303360/nodejs-logo.svg",
        },
        {
          name: "MongoDB",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/768px-MongoDB_Logo.svg.png?20190626143224",
        },
      ],
      des: "This project is part of our Capstone I requirement at Cambodia Academy of Digital Technology (CADT) under the Computer Science program. Over a 12-week period starting from January 20, 2025, our team worked on developing an E-learning platform aimed at helping students expand their knowledge through digital education. The platform is designed to provide easy access to a wide range of courses, empowering learners to go beyond what they study in school and explore topics that interest them.",
      link: "https://youtu.be/I5RPUsm1wM4",
      image: "https://i.postimg.cc/bJ5qYS96/e-learning.jpg",
    },
    {
      title: "CV builder",
      tech: [
        {
          name: "Flutter",
          image:
            "https://storage.googleapis.com/cms-storage-bucket/847ae81f5430402216fd.svg",
        },
        {
          name: "Dart",
          image:
            "https://www.logo.wine/a/logo/Dart_(programming_language)/Dart_(programming_language)-Logo.wine.svg",
        },
      ],
      des: "This project is the mobile app project that can let user to create the CV by just fill their information the form and generate it as pdf file",
      link: "https://youtu.be/QCD8xciXAk0?si=fbtt3Lusd9oPJ36N",
      image: "https://i.postimg.cc/15Bs4dBn/cv-builder.jpg",
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-10 fade-in-left">
      <div className="p-5 w-[90%] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Projects
        </h2>
        <div className="flex flex-col space-y-8">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="bg-white p-6 shadow-lg rounded-lg flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300"
            >
              {/* Left Side: Project Details */}
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {p.title}
                </h3>
                <a
                  href={p.link}
                  className="block mb-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-auto rounded-lg hover:opacity-90 transition-opacity duration-300"
                  />
                </a>
                <div className="grid grid-cols-4 gap-4">
                  {p.tech.map((t, techIdx) => (
                    <div
                      key={techIdx}
                      className="flex flex-col items-center text-center"
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-24 h-24 object-contain mb-2"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Frameworks or Languages */}
              <div className="md:w-1/3 flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg mt-6 md:mt-0 md:ml-6">
                <p className="text-gray-600">{p.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
