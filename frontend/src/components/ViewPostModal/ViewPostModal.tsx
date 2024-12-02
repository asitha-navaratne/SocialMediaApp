import { Fragment, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Backdrop,
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import styles from "./ViewPostModal.module.scss";

import StateType from "../../types/StateType";
import PostType from "../../types/PostType";

import GetPostById from "../../services/GetPostById";

import { modalActions } from "../../store/modal/modalSlice";
import CreateComment from "../../services/CreateComment";

const ViewPostModal = () => {
  const [post, setPost] = useState<PostType>();

  const commentRef = useRef<HTMLInputElement>(null);

  const isModalOpen = useSelector(
    (state: StateType) => state.modal.isViewPostModalOpen
  );
  const openPost = useSelector((state: StateType) => state.modal.openPost);

  const dispatch = useDispatch();

  useEffect(() => {
    if (openPost) {
      GetPostById(openPost).then((res) => setPost(res));
    }
  }, [openPost]);

  const handleAddComment = function () {
    if (commentRef.current) {
      CreateComment({
        id: 0,
        content: commentRef.current.value,
        postId: openPost,
      })
        .then(() => {
          return GetPostById(openPost);
        })
        .then((res) => {
          commentRef.current!.value = "";
          setPost(res);
        });
    }
  };

  const handleModalClose = function () {
    dispatch(modalActions.closeViewPostModal());
  };

  return createPortal(
    <Modal
      open={isModalOpen}
      onClose={handleModalClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Box className={styles["view-post-modal"]}>
        <Typography gutterBottom variant="h5" component="div" sx={{ mb: 2 }}>
          {post?.title}
        </Typography>
        <Typography variant="body2" sx={{ alignSelf: "flex-start" }}>
          {post?.description}
        </Typography>
        <Box className={styles["view-post-modal__comment-section"]}>
          <Typography sx={{ fontWeight: "bold" }}>Comments</Typography>
          <Box className={styles["view-post-modal__comments-list"]}>
            {post?.comments && post.comments.length > 0 ? (
              post?.comments.map((comment) => (
                <Fragment key={comment.id}>
                  <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
                    {comment.content}
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                </Fragment>
              ))
            ) : (
              <Typography
                sx={{ alignSelf: "center", fontWeight: 100, fontSize: "80%" }}
              >
                No comments yet!
              </Typography>
            )}
          </Box>
        </Box>
        <Box className={styles["view-post-modal__actions"]}>
          Add Comment
          <TextField inputRef={commentRef} />
          <Box sx={{ alignSelf: "flex-end" }}>
            <Button
              onClick={handleAddComment}
              variant="contained"
              startIcon={<CheckIcon />}
              sx={{ mt: 2 }}
              size="small"
            >
              Save Comment
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>,
    document.getElementById("view-modal")!
  );
};

export default ViewPostModal;
