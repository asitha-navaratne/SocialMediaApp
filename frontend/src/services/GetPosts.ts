import AxiosInstance from "../utils/Axios";

const GetAllPosts = () => {
  return AxiosInstance.get("/posts")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
};

export default GetAllPosts;
