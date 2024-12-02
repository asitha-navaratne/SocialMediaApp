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

import { modalActions } from "../../store/modal/modalSlice";

const ViewPostModal = () => {
  const isModalOpen = useSelector(
    (state: StateType) => state.modal.isViewPostModalOpen
  );

  const dispatch = useDispatch();

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
          Title
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae quia
          sapiente, ipsum rerum ullam vero commodi aut aperiam aliquid dolores
          voluptatem adipisci itaque enim eum aliquam, expedita illo libero!
        </Typography>
        <Box className={styles["view-post-modal__comment-section"]}>
          <Typography sx={{ fontWeight: "bold" }}>Comments</Typography>
          <Box className={styles["view-post-modal__comments-list"]}>
            <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae
              quia sapiente, ipsum rerum ullam vero commodi aut aperiam aliquid
              dolores voluptatem adipisci itaque enim eum aliquam, expedita illo
              libero!
            </Typography>
            <Divider />
            <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae
              quia sapiente, ipsum rerum ullam vero commodi aut aperiam aliquid
              dolores voluptatem adipisci itaque enim eum aliquam, expedita illo
              libero!
            </Typography>
            <Divider />
            <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae
              quia sapiente, ipsum rerum ullam vero commodi aut aperiam aliquid
              dolores voluptatem adipisci itaque enim eum aliquam, expedita illo
              libero!
            </Typography>
            <Divider />
            <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae
              quia sapiente, ipsum rerum ullam vero commodi aut aperiam aliquid
              dolores voluptatem adipisci itaque enim eum aliquam, expedita illo
              libero!
            </Typography>
            <Divider />
            <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae
              quia sapiente, ipsum rerum ullam vero commodi aut aperiam aliquid
              dolores voluptatem adipisci itaque enim eum aliquam, expedita illo
              libero!
            </Typography>
            <Divider />
          </Box>
        </Box>
        <Box className={styles["view-post-modal__actions"]}>
          Add Comment
          <TextField />
          <Box sx={{ alignSelf: "flex-end" }}>
            <Button
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
