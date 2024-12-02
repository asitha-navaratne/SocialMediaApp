import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Backdrop,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import styles from "./CreatePostModal.module.scss";

import StateType from "../../types/StateType";

import CreatePost from "../../services/CreatePost";

import { modalActions } from "../../store/modal/modalSlice";

const CreatePostModal = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const [helperText, setHelperText] = useState<string>("");

  const isModalOpen = useSelector(
    (state: StateType) => state.modal.isCreatePostModalOpen
  );

  const dispatch = useDispatch();

  const handleSaveClick = function () {
    if (titleRef.current && descriptionRef.current) {
      if (titleRef.current.value !== "") {
        setHelperText("");
        CreatePost({
          id: 0,
          title: titleRef.current.value,
          description: descriptionRef.current.value,
          upvotes: 1,
          downvotes: 0,
        });

        dispatch(modalActions.closeCreatePostModal());
      } else {
        setHelperText("Enter a title for your post!");
      }
    }
  };

  const handleModalClose = function () {
    dispatch(modalActions.closeCreatePostModal());
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
      <Box className={styles["create-post-modal"]}>
        <Typography gutterBottom variant="h5" component="div" sx={{ mb: 2 }}>
          Create Post
        </Typography>
        <TextField
          id="title"
          label="Title"
          inputRef={titleRef}
          error={helperText !== ""}
          helperText={helperText}
        />
        <TextField
          id="description"
          label="Description"
          multiline
          rows={4}
          sx={{ mt: 2 }}
          inputRef={descriptionRef}
        />
        <Box className={styles["create-post-modal__actions"]}>
          <Button
            variant="contained"
            startIcon={<CheckIcon />}
            onClick={handleSaveClick}
          >
            Save Post
          </Button>
        </Box>
      </Box>
    </Modal>,
    document.getElementById("create-modal")!
  );
};

export default CreatePostModal;
