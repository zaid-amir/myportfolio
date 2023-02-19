import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

function Item({ item }) {
  console.log(item);
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          marginBottom: "0.3rem",
          marginLeft: "0.2rem",
          textDecoration: "underline",
          textDecorationColor: "rgb(243, 191, 19)",
        }}
      >
        Education
      </Typography>
      <Paper
        sx={{
          padding: { xs: "2rem 1rem", md: "2rem 4rem" },
          height: "12rem",
        }}
      >
        <Grid container gap={{ sx: 2, sm: 0 }}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} sm={7}>
                <Typography
                  sx={{
                    fontWeight: { xs: "600", sm: "300" },
                    fontSize: { xs: "1.4rem", sm: "3rem" },
                    paddingY: { xs: "0.2rem" },
                  }}
                >
                  {item?.education}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography
                  // variant="h4"
                  sx={{
                    fontWeight: "300",
                    marginTop: { sm: "0.8rem" },

                    fontSize: { xs: "1.4rem", sm: "2.1rem" },
                  }}
                >
                  Marks: {item?.marks}/{item?.total}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} pt={1}>
            <Grid container>
              <Grid item xs={12} sm={7}>
                <Typography
                  sx={{
                    fontWeight: { xs: "600", md: "300" },
                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
                    // paddinyY: { xs: "0.2rem", sm: "1.5rem" },
                    paddingY: { xs: "0.2rem" },
                  }}
                >
                  Institute: {item?.institute}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "300",
                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  }}
                >
                  {item?.board}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Item;
