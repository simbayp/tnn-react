import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
  const {
    data: blogs,
    isPending,
    errorOutput,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="Home">
      {errorOutput && <div>{errorOutput}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="📝 All Blogs!" />}
    </div>
  );
}

export default Home;

// function Home() {
//   const handleClick = (e) => {
//     console.log("Hello Vivek", e);
//   };

//   const handleClickAgain = (name, e) => {
//     console.log(`Hello ${name}`, e.target);
//   };

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <button onClick={handleClick}>Click me</button>
//       <button onClick={(e) => handleClickAgain("Jasmine", e)}>
//         Click me again
//       </button>
//     </div>
//   );
// }

// export default Home;
