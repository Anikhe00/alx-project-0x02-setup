import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-700">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
