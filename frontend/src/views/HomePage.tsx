import { useDispatch } from "react-redux";
import { Box, Button, Stack } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

import styles from "./HomePage.module.scss";

import ContentCard from "../components/ContentCard/ContentCard";

import { modalActions } from "../store/modal/modalSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const handleCreatePostClick = function () {
    dispatch(modalActions.openCreatePostModal());
  };

  return (
    <Box className={styles["home-page"]}>
      <Button
        variant="contained"
        startIcon={<CreateIcon />}
        onClick={handleCreatePostClick}
      >
        Create Post
      </Button>
      <Stack spacing={5} className={styles["home-page__content-section"]}>
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </Stack>
    </Box>
  );
};

export default HomePage;
