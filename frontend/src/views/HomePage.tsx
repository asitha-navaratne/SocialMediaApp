import { Box, Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <Box className={styles["home-page"]}>
      <Button variant="contained" startIcon={<CreateIcon />}>
        Create Post
      </Button>
    </Box>
  );
};

export default HomePage;
