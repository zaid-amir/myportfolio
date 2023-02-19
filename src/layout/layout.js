import { Box } from "@mui/material";
import Footer from "../components/Footer";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
function Layout(props) {
  return (
    <div className={styles.main}>
      <MainNavigation />
      <Box>{props.children}</Box>
      <Footer />
    </div>
  );
}
export default Layout;
