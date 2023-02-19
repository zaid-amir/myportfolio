import {
  AppBar,
  Button,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
// import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { styled } from "@mui/material";
import { AccountBox } from "@mui/icons-material";
// import { BoltRounded } from "@mui/icons-material";
// import { yellow } from "@mui/material/colors";
import MobileDrawer from "../components/MobileDrawer";
// import { useEffect } from "react";
//   import { useDispatch } from "react-redux";
//   import { signOut } from "../store/actions/authActions";
// import { useNavigate } from "react-router-dom";
//   import { useSelector } from "react-redux";

// const Badge = styled("div")({
//   backgroundColor: "rgb(243, 191, 19)",
//   padding: "0.5rem 1rem",
//   borderRadius: "0.5rem",
//   color: "black",
//   fontWeight: "bold",
//   fontSize: "1.3rem",
// });
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const PagesButtons = styled(ListItemButton)({
  color: "rgb(8, 7, 7)",
  fontWeight: "bolder !important",
  padding: "0rem 0.5rem",
  borderRadius: "1rem",
  margin: "0rem 1.5rem",

  "&:hover": {
    backgroundColor: "rgb(243, 191, 19)",
  },
});
const List = styled("div")({
  display: "flex",
});

function MainNavigation() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const auth = useSelector((state) => state.auth);
  // useEffect(() => {}, []);
  // const handleSignOut = () => {
  //   dispatch(signOut());
  //   navigate("/");
  //   //<Navigate to="/"/>
  // };
  return (
    <>
      <AppBar position="static" color="transparent">
        <StyledToolbar>
          {/* <Badge sx={{ display: { xs: "none", sm: "block" } }}>
              Zaid Ameer
            </Badge> */}
          <Button
            className={styles.badgename}
            sx={{ display: { xs: "none", sm: "block" } }}
            component="a"
            href="/"
          >
            Zaid Ameer
          </Button>
          {/* <Button
            href="/"
            sx={{ margin: "0", padding: "0", maxWidth: "minContent" }}
          > */}
          <a href="/" style={{ color: "black" }}>
            <AccountBox
              sx={{ display: { xs: "block", sm: "none" } }}
            ></AccountBox>
          </a>
          {/* </Button> */}
          <List sx={{ display: { xs: "none", md: "flex" } }}>
            <PagesButtons component="a" href="/">
              <ListItemText primary="Home" />
            </PagesButtons>
            <PagesButtons component="a" href="/about">
              <ListItemText primary="About" />
            </PagesButtons>
            <PagesButtons component="a" href="/experience">
              <ListItemText
                sx={{
                  fontWeight: "bold",
                }}
                primary="Experience"
              />
            </PagesButtons>
            <PagesButtons component="a" href="/portfolio">
              <ListItemText primary="Portfolio" />
            </PagesButtons>
            {/* <PagesButtons component="a" href="/services">
                <ListItemText primary="Services" />
              </PagesButtons> */}
            <PagesButtons component="a" href="/contact">
              <ListItemText primary="Contact" />
            </PagesButtons>
            {/* {auth._id ? (
                <Button
                  className={styles.loginButton}
                  component="a"
                  onClick={handleSignOut}
                  variant="contained"
                  color="success"
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    className={styles.loginButton}
                    component="a"
                    href="/"
                    variant="contained"
                    color="success"
                  >
                    Login
                  </Button>
                  <Button
                    className={styles.loginButton}
                    component="a"
                    href="/signup"
                    variant="contained"
                    color="success"
                  >
                    Signup
                  </Button>
                </>
              )} */}
          </List>
          <MobileDrawer sx={{ display: { xs: "block", md: "none" } }} />
        </StyledToolbar>
      </AppBar>
      {/* <header className={styles.header}>
          <div className={styles.badge}>Zaid Ameer</div>
          <nav>
            <ul className={styles.list}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/experience">Experience</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header> */}
    </>
  );
}
export default MainNavigation;
