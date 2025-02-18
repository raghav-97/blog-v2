import { useState } from "react";
import { createPost } from "../services/postService";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createPost(title, content);
    console.log(response);
  };
  return (
    <div>
      Create Post
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
