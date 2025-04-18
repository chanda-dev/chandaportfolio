import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Get in Touch
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Feel free to reach out through any of the following platforms:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Email */}
        <a
          href="mailto:sokda106@gmail.com"
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <FaEnvelope className="text-blue-600 text-4xl mb-4" />
          <p className="text-gray-800 font-semibold">Email</p>
          <p className="text-gray-600 text-sm">sokda106@gmail.com</p>
        </a>

        {/* Phone */}
        <a
          href="tel:+855964109534"
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <FaPhoneAlt className="text-green-600 text-4xl mb-4" />
          <p className="text-gray-800 font-semibold">Phone</p>
          <p className="text-gray-600 text-sm">+855 964109534</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/chanda-sok-9219622b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-blue-700 text-4xl mb-4" />
          <p className="text-gray-800 font-semibold">LinkedIn</p>
          <p className="text-gray-600 text-sm">View Profile</p>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/jame.hone.1?mibextid=ZbWKwL"
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-blue-500 text-4xl mb-4" />
          <p className="text-gray-800 font-semibold">Facebook</p>
          <p className="text-gray-600 text-sm">Visit Page</p>
        </a>
      </div>
    </section>
  );
}
