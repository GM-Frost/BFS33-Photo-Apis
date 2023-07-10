import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  async function getComments() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const result = await response.json();
      setComments(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getComments();
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
          {comments.map((comment, index) => (
            <Grid item xs={8} sm={4} md={4} key={index}>
              <Item>
                <h2>{comment.id}</h2>
                <h4>{comment.name}</h4>
                <br />
                <p>{comment.email}</p>
                <br />
                <p>{comment.body}</p>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Comments;
