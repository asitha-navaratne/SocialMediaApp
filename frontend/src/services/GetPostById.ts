import AxiosInstance from "../utils/Axios";

const GetPostById = (id: number) => {
  return AxiosInstance.get(`/post/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
};

export default GetPostById;
