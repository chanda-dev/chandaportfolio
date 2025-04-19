export default function Resume() {
  return (
    <section className="p-10 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Resume</h2>
      <p className="text-gray-600 text-lg mb-8">
        Download my CV and cover letter to learn more about my skills and
        experience.
      </p>
      <div className="flex justify-center space-x-6">
        {/* Download CV */}
        <a
          href="public/Chanda_Sok_CV.pdf"
          download="Chanda_Sok_CV.pdf"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          Download CV
        </a>

        {/* Download Cover Letter */}
        <a
          href="public/Chanda_Sok_Cover_Letter.pdf"
          download="Chanda_Sok_Cover_Letter.pdf"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
        >
          Download Cover Letter
        </a>
      </div>
    </section>
  );
}
