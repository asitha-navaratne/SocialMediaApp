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

const ContentCard = () => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae
            quia sapiente, ipsum rerum ullam vero commodi aut aperiam aliquid
            dolores voluptatem adipisci itaque enim eum aliquam, expedita illo
            libero!
          </Typography>
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
          <Badge badgeContent={5} max={99} color="primary">
            <InsertCommentIcon />
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ContentCard;