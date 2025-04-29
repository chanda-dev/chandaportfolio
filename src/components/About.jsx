export default function About() {
  return (
    <section className="p-10 w-[90%] md:w-[70%] lg:w-[60%] mx-auto bg-white  flex flex-col md:flex-col items-center gap-8">
      <h2 className="text-4xl font-bold mb-6 text-center md:text-left text-gray-800">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row justify-between">
        {/* Picture Section */}
        <div className="w-full md:w-1/3 fade-in-left">
          <img
            src="https://i.postimg.cc/1XZVRdH7/me.png"
            alt="Chanda Sok"
            className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-center ml-2">
          <p className="text-gray-600 text-lg leading-relaxed">
            I am a passionate and detail-oriented software engineer with a
            strong foundation in both web and mobile development. I enjoy
            building clean, efficient, and user-friendly applications that solve
            real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}
