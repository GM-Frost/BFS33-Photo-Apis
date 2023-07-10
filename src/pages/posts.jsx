import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";

const Posts = () => {
  const [posts, setposts] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setposts(result);
      console.log(result);
    }
    return () => {
      getPosts();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {posts.map((post, index) => (
            <Grid item xs={8} sm={4} md={4} key={index}>
              <Item>
                <h2>{post.id}</h2>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Posts;
