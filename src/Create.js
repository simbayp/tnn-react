import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("vivek");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  function handleTitleChange(event) {
    const { value } = event.target;
    setTitle(value);
  }

  function handleBodyChange(event) {
    const { value } = event.target;
    setBody(value);
  }

  function handleAuthorChange(event) {
    const { value } = event.target;
    setAuthor(value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // prevents the default submit behavior which is 'refresh the page'
    const blog = { title, body, author };

    setIsPending(true);

    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        setIsPending(false);
        // history.go(-1);
        navigate("/"); // to redirect to the homepage after new blog has been added
      });
    }, 1000);
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <label>Blog Body:</label>
        <textarea value={body} onChange={handleBodyChange} required></textarea>
        <label>Blog Author:</label>
        <label>Blog Author:</label>
        <input
          type="text"
          value={author}
          onChange={handleAuthorChange}
          required
        />
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}

export default Create;
