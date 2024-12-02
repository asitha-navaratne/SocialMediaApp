import AxiosInstance from "../utils/Axios";

import CommentType from "../types/CommentType";

const CreateComment = (payload: CommentType) => {
  return AxiosInstance.post("/comment", payload).catch((err) =>
    console.error(err)
  );
};

export default CreateComment;
