import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/Postmodal";
import { PostProps, PostData } from "@/interfaces";
import { useState } from "react";
import type { GetStaticProps } from "next";

type PostsPageProps = { posts: PostProps[] };

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState<PostData | null>(null);

  const handleAddPost = (p: PostData) => {
    setNewPost({ ...p, id: posts.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
          {newPost && (
            <PostCard
              id={newPost.id!}
              title={newPost.title}
              body={newPost.body}
              userId={newPost.userId}
            />
          )}

          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await response.json();
  return { props: { posts } };
};

export default Posts;
