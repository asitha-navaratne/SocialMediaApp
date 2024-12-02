import CommentType from "./CommentType";

type PostType = {
  id: number;
  title: string;
  description: string;
  upvotes: number;
  downvotes: number;
  commentId: number;
  commentContent: string;
};

export default PostType;
