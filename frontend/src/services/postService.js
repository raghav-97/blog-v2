import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("http://localhost:3000/user/blog");
  return response.data;
};

export const createPost = async (title, content) => {
  const response = await axios.post("http://localhost:3000/user/create-blog", {
    title,
    content,
  });
  return response.data;
};