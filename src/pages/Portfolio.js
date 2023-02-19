import { Add, Delete } from "@mui/icons-material";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
import data from "../components/Data";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Grow,
  Modal,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
// import axios from "axios";
import { useState } from "react";
import resumeData from "../components/Data";
import styles from "./Portfolio.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function Portfolio() {
  //   const auth = useSelector((state) => state.auth);
  const pData = data.portfolioProjects;
  const [tabValue, setTabValue] = useState("All");
  const [dialog, setDialog] = useState(false);
  const [modal, setModal] = useState(false);
  const [fetchData, setFetchData] = useState(true);
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    language: "",
    image:
      "https://i.pinimg.com/736x/3f/f3/76/3ff3761db32f85756bda47251b1230a3.jpg",
    socialLinks: {
      youtube: "",
      github: "",
      website: "",
    },
  });

  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={6}>
              <Typography variant="h4">Portfolio</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            ></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={4}>
          <Tabs
            value={tabValue}
            indicatorColor="white"
            className={styles.tabs}
            onChange={(e, newValue) => {
              setTabValue(newValue);
            }}
          >
            <Tab
              label="All"
              value="All"
              className={
                tabValue === "All" ? styles.tabsItem_active : styles.tabsItem
              }
            ></Tab>
            {[...new Set(pData.map((item) => item.language))].map((tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue === tag ? styles.tabsItem_active : styles.tabsItem
                }
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {pData.length === 0 ? (
              <Grow in timeout={1000}>
                <Typography
                  sx={{ padding: "2rem", margin: "2rem" }}
                  variant="p"
                >
                  No Projects Yet
                </Typography>
              </Grow>
            ) : null}
            {pData.map((projects) => (
              <>
                {tabValue === projects.language || tabValue === "All" ? (
                  <Grid item xs={12} md={6} lg={4} mt={3} key={projects}>
                    <Grow in timeout={1000}>
                      <Card className={styles.card}>
                        <CardActionArea>
                          <CardMedia
                            className={styles.cardImg}
                            image={projects.image}
                            onClick={() => setDialog(projects)}
                          />
                          <CardContent>
                            <Grid container>
                              <Grid item>
                                <Typography
                                  //   sx={{ fontWeight: "900" }}
                                  className={styles.cardTitle}
                                >
                                  {projects.title}
                                </Typography>
                                <Typography className={styles.cardCaption}>
                                  {projects.description}
                                </Typography>
                              </Grid>

                              <Grid item></Grid>
                            </Grid>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      {/* <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {projects.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {projects.language}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {projects.description}
                          </Typography>
                        </CardContent>
                      </Card> */}
                    </Grow>
                  </Grid>
                ) : null}
              </>
            ))}
          </Grid>
        </Grid>
        <Dialog open={dialog} onClose={() => setDialog(false)}>
          <DialogTitle>{dialog.title}</DialogTitle>
          <img
            style={{ maxHeight: "50vh", objectFit: "contain" }}
            src={dialog.image}
            alt="Project"
          />
          <DialogContent>
            <DialogContentText>{dialog.description}</DialogContentText>
          </DialogContent>
          <DialogActions>
            {dialog?.links?.map((link) => (
              <a href={link.link} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            ))}
          </DialogActions>
        </Dialog>
      </Grid>
    </Container>
  );
}

export default Portfolio;
