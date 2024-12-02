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

import { modalActions } from "../../store/modal/modalSlice";

const CreatePostModal = () => {
  const isModalOpen = useSelector(
    (state: StateType) => state.modal.isCreatePostModalOpen
  );

  const dispatch = useDispatch();

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
        <TextField id="title" label="Title" />
        <TextField
          id="description"
          label="Description"
          multiline
          rows={4}
          sx={{ mt: 2 }}
        />
        <Box className={styles["create-post-modal__actions"]}>
          <Button variant="contained" startIcon={<CheckIcon />}>
            Save Post
          </Button>
        </Box>
      </Box>
    </Modal>,
    document.getElementById("create-modal")!
  );
};

export default CreatePostModal;
