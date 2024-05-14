import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { DropdownLink } from "./DropdownLink";
import { CartLink } from "./CartLink";
import styles from "./Header.module.scss";

const SkeletonHeader = ({
  logoImg = "",
  userName = "testHB",
}: {
  logoImg?: string;
  userName?: string;
}) => {
  return (
    <AppBar>
      <Toolbar className={styles.header_toolbar}>
        <Link to="/" className={styles.header_link}>
          <img src={logoImg} alt="Logo" className={styles.header_logo} />
          <Typography variant="h6">{userName}</Typography>
        </Link>
        <Link to="/link1" className={styles.header_link}>
          <Button color="inherit">Link 1</Button>
        </Link>
        <Link to="/link2" className={styles.header_link}>
          <Button color="inherit">Link 2</Button>
        </Link>
        <Link to="/link3" className={styles.header_link}>
          <Button color="inherit">Link 3</Button>
        </Link>
        <Link to="/link4" className={styles.header_link}>
          <Button color="inherit">Link 4</Button>
        </Link>
        <DropdownLink />
        <Link to="/cart" className={styles.header_link}>
          <CartLink />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default SkeletonHeader;
