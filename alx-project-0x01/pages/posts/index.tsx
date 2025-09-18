import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl font-bold">Posts Page</h1>
      </main>
    </div>
  );
};

export default Posts;
