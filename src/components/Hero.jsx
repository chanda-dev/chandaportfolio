export default function Hero() {
  const name = "Hi, I'm Chanda, Sok";

  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20 text-center">
      <h1 className="text-5xl font-bold">
        {name.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block opacity-0 animate-drop"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <p className="mt-4 text-xl">Software Engineer | Full Stack Developer</p>
      <a
        href="#projects"
        className="mt-6 inline-block bg-white text-purple-700 px-6 py-2 rounded-full font-semibold"
      >
        View My Work
      </a>
    </section>
  );
}
