import React, { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import { type Post } from "@/interfaces";

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAddPost = (post: Post) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <div className="flex flex-col gap-2">
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 px-4 py-2 bg-purple-600 text-white rounded-md"
        >
          + Add Post
        </button>

        <div className="space-y-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddPost={handleAddPost}
        />
      </div>
    </div>
  );
};

export default HomePage;
