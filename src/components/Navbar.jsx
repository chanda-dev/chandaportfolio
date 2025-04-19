export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#hero" className="hover:text-gray-300 flex items-center">
            <img
              src="https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/492024771_1176679910625572_2879034579553018292_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHNs13ZvJIDeSkgQGWJxfEROAlo5Iqp_Js4CWjkiqn8mys6MIK3qavvyJKcXc1xzmHwbsbecvJxpuxtyVKM0Fyw&_nc_ohc=IpzT1xe_TlwQ7kNvwHEz1NM&_nc_oc=AdmzRx8tTHULocFea1AQcSzFwBVENqoSrPqgsbTmmuSQsuyRPQyR5uYV8iVmLLJvkX0&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&_nc_gid=OM3SLy191-2vKSkGYluhsw&oh=00_AfFrwSsgC2TuZN1A2W1c4iEoHrMoH70o0Qo779Rx8y8jBg&oe=6809058C"
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover" // Adjusted size and styling
            />
            <span className="ml-2">Chanda Portfolio</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a
            href="#hero"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#resume"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
