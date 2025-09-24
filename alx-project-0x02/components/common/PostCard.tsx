import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
