import {
  Badge,
  ContactPage,
  Home,
  Info,
  Menu,
  Work,
} from "@mui/icons-material";
import {
  Drawer,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import styles from "./MobileDrawer.module.css";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { signOut } from "../store/actions/authActions";

function MobileDrawer() {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  //   const auth = useSelector((state) => state.auth);
  //   const handleSignOut = () => {
  //     dispatch(signOut());
  //     navigate("/");
  //     setStatus(false);
  //     //<Navigate to="/"/>
  //   };
  return (
    <>
      <Drawer
        open={status}
        onClose={() => {
          setStatus(false);
        }}
        PaperProps={{
          sx: { width: "50%" },
        }}
      >
        <List>
          <ListItemButton component="a" href="/" className={styles.button}>
            <Home />
            <ListItemText primary="Home" className={styles.text} />
          </ListItemButton>
          <ListItemButton component="a" href="/about" className={styles.button}>
            <Info />
            <ListItemText className={styles.text} primary="About" />
          </ListItemButton>
          <ListItemButton
            component="a"
            href="/experience"
            className={styles.button}
          >
            <Work />
            <ListItemText
              className={styles.text}
              sx={{
                fontWeight: "bold",
              }}
              primary="Experience"
            />
          </ListItemButton>
          <ListItemButton
            component="a"
            href="/portfolio"
            className={styles.button}
          >
            <Badge />
            <ListItemText className={styles.text} primary="Portfolio" />
          </ListItemButton>
          {/* <ListItemButton
            component="a"
            href="/services"
            className={styles.button}
          >
            <ListItemText  className={styles.text} primary="Services" />
          </ListItemButton> */}
          <ListItemButton
            component="a"
            href="/contact"
            className={styles.button}
          >
            <ContactPage />
            <ListItemText className={styles.text} primary="Contact" />
          </ListItemButton>
          <Grid container>
            {/* {auth._id ? (
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  className={styles.loginButton}
                  component="a"
                  onClick={handleSignOut}
                  sx={{ marginTop: "0.2rem" }}
                  variant="contained"
                >
                  Logout
                </Button>
              </Grid>
            ) : (
              <>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    className={styles.loginButton}
                    component="a"
                    href="/"
                    variant="contained"
                    color="success"
                    sx={{ marginBottom: "0.4rem", marginTop: "0.2rem" }}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    className={styles.loginButton}
                    component="a"
                    href="/signup"
                    variant="contained"
                    color="success"
                  >
                    Signup
                  </Button>
                </Grid>
              </>
            )} */}
          </Grid>
        </List>
      </Drawer>
      <IconButton
        sx={{ display: { sx: "block", md: "none" } }}
        onClick={() => {
          setStatus(!status);
        }}
      >
        <Menu />
      </IconButton>
    </>
  );
}
export default MobileDrawer;
