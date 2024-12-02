import CommentType from "./CommentType";

type PostType = {
  id: number;
  title: string;
  description: string;
  upvotes: number;
  downvotes: number;
  comment_id: number;
  comment_content: string;
};

export default PostType;
