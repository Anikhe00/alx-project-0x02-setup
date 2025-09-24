import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";
import React from "react";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
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

// ✅ Use getStaticProps to fetch posts at build time
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const formattedPosts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts: formattedPosts,
    },
  };
}
