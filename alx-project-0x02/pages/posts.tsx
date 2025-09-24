import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";
import React, { useEffect, useState } from "react";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: Response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      const formattedPosts: PostProps[] = data.map((post) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));
      setPosts(formattedPosts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Header />
      <div className="min-h-screen p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
