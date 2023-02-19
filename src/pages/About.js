import { Button } from "@material-ui/core";
import {
  Box,
  Card,
  Container,
  Grid,
  Grow,
  Paper,
  Typography,
} from "@mui/material";
// import Carousel from "react-material-ui-carousel";
import myCV from "./CV_ZaidAmeer.pdf";
import SkillBar from "../components/SkillBar";

function About() {
  return (
    <Container>
      <Box sx={{ paddingY: { xs: "1rem", md: "2rem", lg: "3rem" } }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            {" "}
            <Typography
              //   variant={{ xs: "h6", md: "h2" }}
              sx={{
                fontSize: { xs: "2rem", md: "3.5rem" },
                fontWeight: 500,
                textDecoration: "underline",
                textDecorationColor: "rgb(243, 191, 19) ",
              }}
            >
              About Me
            </Typography>
            <a
              href={myCV}
              style={{
                textDecoration: "none",
                marginTop: "3rem",
                marginLeft: "0.5rem",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "rgb(243, 191, 19)",
                  color: "white",
                  fontWeight: "bold",
                  padding: "0.5 rem",
                  width: "90%",
                  textDecoration: "none",
                  // borderRadius: "30px",
                }}
              >
                See Resume
              </Button>
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ marginTop: { xs: "2.3rem", md: "5rem" } }}
          >
            <Grow in timeout={1000}>
              <Card>
                <Paper
                  sx={{
                    padding: { xs: "1rem 0.7rem", md: "1rem 2rem" },
                    height: "100%",
                  }}
                >
                  <Grid container>
                    <Grid item xs={6} sx={{ display: "flex" }}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography
                            sx={{
                              fontSize: { xs: "0.8rem", md: "1rem" },
                              marginTop: { xs: "1.5rem", md: "1rem" },
                            }}
                          >
                            Name:
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "0.8rem",
                                md: "1rem",
                              },
                              marginY: { xs: "1.5rem", md: "1rem" },
                            }}
                          >
                            City:
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            sx={{
                              fontSize: { xs: "0.8rem", md: "1rem" },
                              marginBottom: { xs: "1.5rem", md: "1rem" },
                            }}
                          >
                            Date of Birth:
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography
                        sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                      ></Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography
                            sx={{
                              fontSize: { xs: "0.8rem", md: "1rem" },
                              marginTop: { xs: "1.5rem", md: "1rem" },
                            }}
                          >
                            Muhammad Zaid Amir
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "0.8rem",
                                md: "1rem",
                              },
                              marginY: { xs: "1.5rem", md: "1rem" },
                            }}
                          >
                            Faisalabad
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            sx={{
                              fontSize: { xs: "0.8rem", md: "1rem" },
                              marginBottom: { xs: "1.5rem", md: "1rem" },
                            }}
                          >
                            07/March/2022
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Card>
            </Grow>
          </Grid>
        </Grid>
        {/* ------------------------Technical skills-------------------------- */}
        <Grid
          container
          sx={{
            border: "1px solid black",
            borderRadius: "10px",
            marginTop: "3rem",
            padding: "2rem",
            paddingX: { xs: "1rem", md: "2rem" },
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2rem" },
                fontWeight: 500,
                textDecoration: "underline",
                textDecorationColor: "rgb(243, 191, 19) ",
              }}
            >
              Technical Skills
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillBar skill="HTML" value={90} />
            <SkillBar skill="CSS" value={87} />
            <SkillBar skill="JavaScript" value={85} />
            <SkillBar skill="React" value={80} />
            <SkillBar skill="C++" value={80} />
          </Grid>
        </Grid>
        {/* ------------------------Soft Skills------------------------------- */}
        <Grid
          container
          sx={{
            border: "1px solid black",
            borderRadius: "10px",
            marginTop: "3rem",
            padding: "2rem",
            paddingX: { xs: "1rem", md: "2rem" },
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2rem" },
                fontWeight: 500,
                textDecoration: "underline",
                textDecorationColor: "rgb(243, 191, 19) ",
              }}
            >
              Soft Skills
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillBar skill="English" value={90} />
            <SkillBar skill="Urdu" value={100} />
            <SkillBar skill="Adabtibility" value={85} />
            <SkillBar skill="Team Work" value={85} />
            <SkillBar skill="Leadership skills" value={84} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
