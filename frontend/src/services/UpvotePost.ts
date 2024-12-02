import AxiosInstance from "../utils/Axios";

const UpvotePost = (id: number) => {
  return AxiosInstance.get(`/post/upvote/${id}`).catch((err) =>
    console.error(err)
  );
};

export default UpvotePost;
