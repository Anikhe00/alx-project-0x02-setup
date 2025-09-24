import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
      </div>
    </div>
  );
};

export default Posts;
