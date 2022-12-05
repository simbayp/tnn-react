import { Link } from "react-router-dom"; // this is exactly what makes React CSR library and change anchor tags to <Link /> tags and 'href' attribute to 'to' attribute

function Navbar() {
  const projectTitle = "💻 Developer's Den ";
  return (
    <nav className="navbar">
      <h1>{projectTitle}</h1>
      <div className="links">
        <Link to="/">Home🏡</Link>
        <Link to="/create">New Blog🔥</Link>
      </div>
    </nav>
  );
}

export default Navbar;
