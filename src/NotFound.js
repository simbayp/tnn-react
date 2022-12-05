import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>Sorry 😪</h2>
      <p>This page cannot be found!</p>
      <Link to="/">Back to homepage ⏪</Link>
    </div>
  );
}

export default NotFound;
