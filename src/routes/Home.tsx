import { useEffect, useState } from "react";
import CustomeCard from "../components/CustomeCard";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";

const API = `https://hn.algolia.com/api/v1/search_by_date?tags=story&page`;

function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [userVal, setUserVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [noDataFound, setnoDataFound] = useState(false);

  const fetchApi = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API}=${pageNumber}`);
      const data = await res.json();

      if (res.ok) {
        setPosts((prevPosts) => [
          ...prevPosts,
          ...data.hits,
        ]);
        
    }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
    const apicall = setTimeout(() => {
      setPageNumber((c) => c + 1);
    }, 3000);

    return () => {
      clearTimeout(apicall);
    };
  }, [pageNumber]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;

      console.log("isLoading", isLoading);
      if (!isLoading) {
        setPageNumber((c) => c + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const userInput = e.target.value;
    setUserVal(userInput); // <-- update user input here
    setnoDataFound(results.length === 0);
}

  // results <-- temp posts
  const results = posts.filter((each) => {
    return each.title.toLowerCase().includes(userVal.toLowerCase());
  });

  return (
    <Box>
      <Typography variant="h4" fontWeight={500} textAlign={"center"}>
        Infinite Scrolling
      </Typography>
      <Grid container justifyContent="center" mt={2}>
        <TextField
          id="outlined-basic"
          label="Search title"
          variant="outlined"
          onChange={inputHandler}
          autoComplete="off"
          value={userVal}
        />
      </Grid>

      <Grid container spacing={2} py={4} px={2}>
        {results.map((each, index) => {
          return <CustomeCard post={each} key={index} />;
        })}
      </Grid>

      {results.length === 0 && noDataFound && (
        <Box mt={2}>
          <Typography
            variant="h6"
            fontWeight={500}
            style={{ textAlign: "center" }}
          >
            No Data Found
          </Typography>
        </Box>
      )}

      {isLoading && (
        <Box mt={2}>
          <Typography
            variant="h6"
            fontWeight={500}
            style={{ textAlign: "center" }}
          >
            Loading...
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default Home;
