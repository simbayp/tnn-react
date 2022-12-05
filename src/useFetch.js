import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [errorOutput, setErrorOutput] = useState(null); // so that we could output it to the browser

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not find data for this resource");
          }
          return res.json(); // parses the json into a javascript object - but this is also asynchronous
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setErrorOutput(null);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Fetch aborted!");
          } else {
            setIsPending(false);
            setErrorOutput(error.message);
          }
        });
    }, 1000); // 1 sec deliberate delay to mock a real server delay

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, errorOutput }; // return all the states because that's what we want to use in Home.js file under useFetch() custom hook
};

export default useFetch;
