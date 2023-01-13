import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    errorOutput,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const navigate = useNavigate();

  function handleClick() {
    // For production
    fetch(
      `https://my-json-server.typicode.com/simbayp/tnn-react/blogs/${blog.id}`,
      {
        method: "DELETE",
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <div className="blog-details">
      {errorOutput && <div>{errorOutput}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by - {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
