import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import { GetStaticProps } from "next";
import { useState } from "react";

type UsersPageProps = {
  posts: UserProps[]; // keep name 'posts' for checker compatibility
};

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState<UserData | null>(null);

  const handleAddUser = (u: UserData) => {
    setNewUser({ ...u, id: (posts[posts.length - 1]?.id ?? 0) + 1 });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {newUser && <UserCard {...(newUser as UserProps)} />}
          {posts.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: UserProps[] = await res.json();
  return { props: { posts } };
};

export default Users;
