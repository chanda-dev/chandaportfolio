export default function Projects() {
  const projects = [
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
      des: "This CV builder helps build CVs and generate them as PDF files.",
      link: "https://github.com/chanda-dev/final_project_CV_builder",
      image:
        "https://scontent.fpnh8-2.fna.fbcdn.net/v/t39.30808-6/491842367_1176290390664524_6878205016899054266_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE2gwNx8TZJg_qgqB9qtbcLnYhjHv2yACCdiGMe_bIAICVRLLa06Pxp351NtYVZtKieLgBYNR9ac6dqCJlcS71I&_nc_ohc=YdBOjf9dDFQQ7kNvwHMZDsw&_nc_oc=AdlYHFCYAsqVcFUWzPqqOPK8Zx3mxm9icbMfQRl4KPLT-Un9coET6nfTePxL6Q4A6ps&_nc_zt=23&_nc_ht=scontent.fpnh8-2.fna&_nc_gid=I9m7J3JaPRDsgA7Km2jAMQ&oh=00_AfF3CJijAbSZ5drDqxPgO8GR9ER5-JD5f-wXZqNN6aNWFQ&oe=680869A2",
    },
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
      des: "This is an E-learning web application that helps students study in a digital way.",
      link: "https://github.com/Makarasok24/infinity-learning",
      image:
        "https://scontent.fpnh8-2.fna.fbcdn.net/v/t39.30808-6/492010853_1176282690665294_4467503461319338301_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH4wMHxjkyS7A7K1lrW7TyGthuRkHk95Jq2G5GQeT3kmieUc2qOKZsDRZlTg8ZSU8Pvdvb7cgffiAJcPeLHR_UQ&_nc_ohc=Y46CIUy9nyAQ7kNvwFT5JD_&_nc_oc=AdlG8RU9MGZglZNbFFZV-2ppAkOC02OIFWqAKjaWvTsAyoZWPMbpG14bM__awMId6EQ&_nc_zt=23&_nc_ht=scontent.fpnh8-2.fna&_nc_gid=k63JXasDMybSMD5AlMfO5w&oh=00_AfEMGNzT_n2ILd9NKK0fEUlIfC_q5qwzglNlUmjICNwCHw&oe=680859FA",
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
                <p className="text-gray-600">{p.des}</p>
              </div>

              {/* Right Side: Frameworks or Languages */}
              <div className="md:w-1/3 flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg mt-6 md:mt-0 md:ml-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Tech Stack
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {p.tech.map((t, techIdx) => (
                    <div
                      key={techIdx}
                      className="flex flex-col items-center text-center"
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-16 h-16 object-contain mb-2"
                      />
                      <p className="text-sm font-medium text-gray-700">
                        {t.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
