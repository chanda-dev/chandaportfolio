export default function Skills() {
  const skills = [
    {
      name: "JavaScript",
      image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
    {
      name: "React",
      image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "Node.js",
      image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      name: "MongoDB",
      image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    },
    { name: "HTML", image: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS", image: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    {
      name: "Tailwind CSS",
      image: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    },
    {
      name: "Git",
      image: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    },
    {
      name: "GitHub",
      image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    },
    {
      name: "Flutter",
      image: "https://cdn.worldvectorlogo.com/logos/flutter-logo.svg",
    },
    {
      name: "Dart",
      image: "https://cdn.worldvectorlogo.com/logos/dart.svg",
    },
    {
      name: "Jira",
      image: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
    },
  ];

  return (
    <section className="p-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 mb-2 object-contain"
            />
            <p className="text-gray-800 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
