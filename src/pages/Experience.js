import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CarouselItem from "../components/CarouselItem";
// import CarouselItem from "../components/CarouselItem";

function Experience() {
  return (
    <>
      <Container sx={{ marginTop: 5 }}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={12}>
                <Typography variant="h4">My Experience</Typography>
              </Grid>
              <Grid item xs={12}>
                <CarouselItem />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Experience;
