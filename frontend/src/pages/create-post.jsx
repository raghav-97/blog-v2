import { useState } from "react";
import { createPost } from "../services/postService";
import Form from "../components/form";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fields = [
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Enter title",
    },
    {
      name: "content",
      label: "Content",
      type: "textarea",
      placeholder: "Enter content",
    },
  ];

  const handleSubmit = async (e) => {
    const response = await createPost(title, content);
    console.log(response);
  };
  return (
    <div>
      <Form fields={fields} onSubmit={handleSubmit} buttonText="Create Post" />
    </div>
  );
}
