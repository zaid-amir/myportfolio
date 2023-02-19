import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import styles from "./Contact.module.css";
import { makeStyles } from "@material-ui/core";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const useStyles = makeStyles({
  input: {
    marginBottom: "10px",
    "&:focus": {
      borderColor: "rgb(243, 191, 19)",
    },
  },
});

function Contact() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_pm04g6x",
        "template_69x38wg",
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "2Jvh-9mIwn5gwez73"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Do something after the email is sent successfully
        },
        (error) => {
          console.log(error.text);
          // Do something after an error occurs while sending the email
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Container>
        <Grid container sx={{ marginTop: 5 }}>
          <Typography
            variant="h4"
            sx={{ textDecoration: "underline", color: "rgb(243, 191, 19)" }}
          >
            <span style={{ color: "black" }}>Contact Us</span>
          </Typography>
        </Grid>
        <Grid
          container
          sx={{
            padding: { xs: "0rem", sm: "1.5rem", lg: "3rem" },
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              paddingX: { xs: "1rem", sm: "0rem" },
              paddingY: { xs: "2rem", sm: "0rem" },
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem", lg: "3rem" },
                color: "black",
                // color: "rgb(243, 191, 19)",
                fontWeight: "600",
              }}
            >
              Feedback
            </Typography>
            <Typography sx={{ fontFamily: "monospace" }}>
              Your{" "}
              <span style={{ color: "rgb(243, 191, 19)", fontWeight: "700" }}>
                feedback
              </span>{" "}
              is always welcomed !
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              border: "solid 2px rgb(243, 191, 19)",
              borderRadius: "3rem",
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              //   marginTop: "1rem",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "400px",
              }}
            >
              <TextField
                label="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: "10px" }}
                className={classes.inputUnderline}
              />
              <TextField
                label="Your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={classes.input}
              />
              <TextField
                label="Message"
                multiline
                minRows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <Button
                variant="contained"
                type="submit"
                className={styles.submitButton}
              >
                Send
              </Button>
            </form>
          </Grid>
        </Grid>
        <Grid
          sx={{
            paddingX: { xs: "0rem", sm: "1.5rem", lg: "3rem" },
            paddingTop: { xs: "3rem", sm: "1.5rem", lg: "1rem" },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "1.2rem" }}>Social Media:</Typography>
            <IconButton
              sx={{
                color: "rgb(243, 191, 19)",
                paddingX: { xs: "0.4rem", md: "1rem", lg: "2rem" },
                // fontSize: { xs: "1rem", md: "2rem" },
              }}
              href="http://www.linkedin.com/in/zaid-ameer-7517831b2"
            >
              {" "}
              <LinkedIn sx={{ fontSize: { xs: "1.6rem", md: "2.4rem" } }} />
            </IconButton>
            <IconButton
              sx={{
                color: "rgb(243, 191, 19)",
                paddingX: { xs: "0.4rem", md: "1rem", lg: "2rem" },
                // fontSize: { xs: "1rem", md: "2rem" },
              }}
              href="https://instagram.com/zaid__ameer?igshid=NTE5MzUyOTU="
            >
              {" "}
              <Instagram sx={{ fontSize: { xs: "1.6rem", md: "2.4rem" } }} />
            </IconButton>
            <IconButton
              sx={{
                color: "rgb(243, 191, 19)",
                paddingX: { xs: "0.4rem", md: "1rem", lg: "2rem" },
                // fontSize: { xs: "1rem", md: "2rem" },
              }}
              href="https://www.facebook.com/zaid.ameer.71653?mibextid=ZbWKwL"
            >
              {" "}
              <FacebookRounded
                sx={{ fontSize: { xs: "1.6rem", md: "2.4rem" } }}
              />
            </IconButton>
            <IconButton
              sx={{
                color: "rgb(243, 191, 19)",
                paddingX: { xs: "0.4rem", md: "1rem", lg: "2rem" },
                // fontSize: { xs: 5, md: 10 },
              }}
              href="https://twitter.com/finisher717?t=5rMHys-QqT-N1ByVi3APVQ&s=09"
            >
              {" "}
              <Twitter sx={{ fontSize: { xs: "1.6rem", md: "2.4rem" } }} />
            </IconButton>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Contact;
