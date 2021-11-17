import { FC } from "react";
import { Typography } from "@mui/material";
import styles from "../../../styles/Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Typography
        variant="h3"
        component="div"
        sx={{ flexGrow: 1, paddingTop: "1%", paddingBottom: "2%" }}
      >
        競馬予想掲示板
      </Typography>
      <Typography
        variant="h3"
        component="div"
        sx={{ flexGrow: 1, paddingBottom: "1%" }}
      >
        ©︎ Masaru Terada 2021
      </Typography>
    </footer>
  );
};

export default Footer;
