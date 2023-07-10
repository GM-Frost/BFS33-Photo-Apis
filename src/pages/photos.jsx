import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const result = await response.json();
      setPhotos(result);
      console.log(result);
    }
    return () => {
      getPhotos();
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
          {photos.map((photo, index) => (
            <Grid item xs={8} sm={4} md={4} key={index}>
              <Item>
                <h2>{photo.id}</h2>

                <br />
                <h5>{photo.title}</h5>
                <br />
                <img src={photo.url} width="100px" height="100px" />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Photos;
