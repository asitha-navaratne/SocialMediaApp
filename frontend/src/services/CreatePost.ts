import AxiosInstance from "../utils/Axios";

import PostType from "../types/PostType";

const CreatePost = (payload: PostType) => {
  return AxiosInstance.post("/post", payload).catch((err) =>
    console.error(err)
  );
};

export default CreatePost;
