import {
  FacebookRounded,
  Instagram,
  Twitter,
  LocationCityRounded,
  LinkedIn,
} from "@mui/icons-material";
import "./Footer.css";
import {
  Box,
  Container,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";

const Badge = styled("div")({
  backgroundColor: "rgb(243, 191, 19)",
  padding: "0.5rem 1.5rem",
  borderRadius: "0.5rem",
  color: "black",
  fontWeight: "bold",
  fontSize: "1.2rem",
  maxWidth: "fit-content",
  textAlign: "center",
});

function Footer() {
  return (
    <>
      <Box
        px={{ xs: 3, md: 2 }}
        py={{ xs: 3, md: 7 }}
        sx={{
          backgroundColor: "black",
          color: "whitesmoke",
          marginTop: "5rem",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, lg: 4 }}>
            <Grid item xs={12} md={4} mt={2}>
              <Box>
                <Badge>Zaid Ameer</Badge>
                <Typography
                  component="p"
                  sx={{ marginTop: "2rem", fontSize: "0.9rem" }}
                >
                  "Create the things you wish existed"
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={2} mt={2}>
              <Box>
                <Typography sx={{ fontSize: "0.7rem" }}>Location</Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    marginTop: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                  }}
                >
                  <LocationCityRounded />
                  <span style={{ marginTop: 4 }}> Faisalabad</span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} mt={2}>
              <Box>
                <Typography sx={{ fontSize: "0.7rem" }}>Follow Us</Typography>
                <IconButton
                  sx={{ color: "white" }}
                  href="http://www.linkedin.com/in/zaid-ameer-7517831b2"
                >
                  {" "}
                  <LinkedIn />
                </IconButton>
                <IconButton
                  sx={{ color: "white" }}
                  href="https://instagram.com/zaid__ameer?igshid=NTE5MzUyOTU="
                >
                  {" "}
                  <Instagram />
                </IconButton>
                <IconButton
                  sx={{ color: "white" }}
                  href="https://www.facebook.com/zaid.ameer.71653?mibextid=ZbWKwL"
                >
                  {" "}
                  <FacebookRounded />
                </IconButton>
                <IconButton
                  sx={{ color: "white" }}
                  href="https://twitter.com/finisher717?t=5rMHys-QqT-N1ByVi3APVQ&s=09"
                >
                  {" "}
                  <Twitter />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} mt={2}>
              <Box>
                <Typography sx={{ fontSize: "0.7rem" }}>Call Us</Typography>
                <Typography mt={2} sx={{ fontSize: "1rem" }}>
                  {" "}
                  +92-315-7084024
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
export default Footer;
