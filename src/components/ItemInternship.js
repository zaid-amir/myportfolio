import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

function ItemInternship({ item }) {
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
        Internships
      </Typography>
      <Paper
        sx={{
          padding: { xs: "2rem 1rem", md: "2rem 4rem" },
          height: { xs: "15rem", md: "13rem", lg: "12rem" },
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} sm={7}>
                <Typography
                  // variant="h4"
                  sx={{
                    fontWeight: { xs: "600", sm: "300" },
                    fontSize: { xs: "1.4rem", sm: "2.15rem" },
                    paddingY: { xs: "0.2rem" },
                  }}
                >
                  Company: {item?.company}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography
                  // variant="h5"
                  sx={{
                    fontWeight: "300",
                    marginTop: { sm: "0.5rem" },

                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  }}
                >
                  From {item?.from} to {item?.to}{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} pt={1}>
            <Grid container>
              <Grid item xs={12} sm={7}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: { xs: "600", sm: "300" },
                    fontSize: { xs: "1.3rem", sm: "1.5rem" },
                    paddingY: { xs: "0.2rem" },
                  }}
                >
                  Role: {item?.role}
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
                  {item.details}{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ItemInternship;
