import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Stack, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

import styles from "./HomePage.module.scss";

import ContentCard from "../components/ContentCard/ContentCard";

import PostType from "../types/PostType";
import StateType from "../types/StateType";

import GetAllPosts from "../services/GetAllPosts";

import { modalActions } from "../store/modal/modalSlice";

const HomePage = () => {
  const [postsList, setPostsList] = useState<PostType[]>([]);

  const isCreatePostModalOpen = useSelector(
    (state: StateType) => state.modal.isCreatePostModalOpen
  );

  const isViewPostModalOpen = useSelector(
    (state: StateType) => state.modal.isViewPostModalOpen
  );

  const dispatch = useDispatch();

  useEffect(() => {
    GetAllPosts().then((res) => {
      setPostsList(res);
    });
  }, [isCreatePostModalOpen.valueOf, isViewPostModalOpen]);

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
        {postsList.length > 0 ? (
          postsList.map((post) => (
            <ContentCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              upvotes={post.upvotes}
              downvotes={post.downvotes}
              commentCount={post.commentCount ?? 0}
            />
          ))
        ) : (
          <Typography sx={{ fontWeight: 100 }}>No posts yet!</Typography>
        )}
      </Stack>
    </Box>
  );
};

export default HomePage;
