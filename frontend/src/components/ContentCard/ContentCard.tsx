import { FC } from "react";
import { useDispatch } from "react-redux";
import {
  Badge,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

import styles from "./ContentCard.module.scss";

import PropTypes from "./types/PropTypes";

import { modalActions } from "../../store/modal/modalSlice";

const ContentCard: FC<PropTypes> = (props) => {
  const dispatch = useDispatch();

  const handleCardClick = function () {
    dispatch(modalActions.openViewPostModal(props.id));
  };

  return (
    <Card className={styles["content-card"]}>
      <CardActionArea onClick={handleCardClick}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2">{props.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton>
          <ArrowUpwardIcon />
        </IconButton>
        <IconButton>
          <ArrowDownwardIcon />
        </IconButton>
        <IconButton>
          <Badge badgeContent={props.commentCount} max={99} color="primary">
            <InsertCommentIcon />
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ContentCard;
