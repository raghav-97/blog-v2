import { useState, useEffect } from "react";
import { getPosts } from "../services/postService";
import Card from "../components/card";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto w-full px-4 py-8">
      
      {blogs.map((blog) => (
        <Card
          key={blog._id}
          title={blog.title}
          content={blog.content}
          author={blog.author}
        />
      ))}
    </div>
  );
}
