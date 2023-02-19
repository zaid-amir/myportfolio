import styles from "./Home.module.css";
import Button from "@mui/material/Button";
import Contact from "@mui/icons-material/CallTwoTone";
import { Grid, Typography } from "@mui/material";
import image from "../components/zaid.png";
// import { AppBar, Toolbar } from "@mui/material";

function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={styles.content}>
            <Typography
              sx={{
                fontSize: { xs: "2rem", lg: "4rem" },
                fontWeight: "700",
                paddingTop: { xs: "2rem", sm: "1.7rem", lg: "2.5rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Hi! I am <span className={styles.red}>Zaid</span>
            </Typography>
            {/* <h3>
              Hi! I am <span className={styles.red}>Zaid</span>
            </h3> */}

            <Typography
              sx={{
                fontSize: { xs: "1.5rem", lg: "2rem" },
                fontWeight: "600",
                textAlign: { xs: "center", md: "left" },
                paddingTop: { xs: "2rem", sm: "1.7rem" },
                paddingBottom: { xs: "2rem", sm: "1.7rem" },
              }}
            >
              I am an <span className={styles.red}>Web</span> Developer
            </Typography>
            <Typography
              className={styles.intro}
              sx={{
                textAlign: { xs: "center", md: "left" },
                paddingBottom: { xs: "1rem" },
              }}
            >
              I am a dedicated and passionate Front-End Developer with a keen
              eye for detail and design. As a recent graduate, I am eager to
              bring my skills and enthusiasm to a new challenge and make a real
              impact in the industry.
            </Typography>
            <Button
              className={styles.contactButton}
              variant="contained"
              href="/contact"
              endIcon={<Contact />}
            >
              Contact Us
            </Button>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <div className={styles.imagediv}>
            <img
              width="50%"
              className={styles.image}
              // src="https://cdn-icons-png.flaticon.com/512/57/57081.png?w=360"
              src={image}
              alt="Persony"
            ></img>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
