import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";
import React from "react";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <div className="min-h-screen p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              address={{
                street: user.address?.street ?? null,
                city: user.address?.city ?? null,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const formattedUsers: UserProps[] = data.map((user: any) => ({
    name: user.name ?? null,
    email: user.email ?? null,
    address: user.address ?? null,
  }));

  return {
    props: {
      users: formattedUsers,
    },
  };
}
