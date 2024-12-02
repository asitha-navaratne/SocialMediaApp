import CommentType from "./CommentType";

type PostType = {
  id: number;
  title: string;
  description: string;
  upvotes: number;
  downvotes: number;
  comments?: CommentType[];
};

export default PostType;
