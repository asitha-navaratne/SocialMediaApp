import AxiosInstance from "../utils/Axios";

const DownvotePost = (id: number) => {
  return AxiosInstance.get(`/post/downvote/${id}`).catch((err) =>
    console.error(err)
  );
};

export default DownvotePost;
