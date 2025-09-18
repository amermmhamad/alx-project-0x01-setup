import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="rounded-lg shadow-md p-7 mb-4 bg-white hover:shadow-lg transition">
      <p className="text-gra-400 font-bold mb-1 inline">{id}</p>
      <h2 className="text-xl font-bold mb-1">{name}</h2>
      <p className="text-gray-500">@{username}</p>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-700">{phone}</p>
      <p className="text-gray-700 font-semibold">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
      <a
        href={`http://${website}`}
        target="_blank"
        rel="noopener norefferer"
        className="text-blue-600 hover:underline block mt-2"
      >
        {website}
      </a>
      <p className="text-sm text-gray-500 mt-2">Company: {company.name}</p>
    </div>
  );
};

export default UserCard;
