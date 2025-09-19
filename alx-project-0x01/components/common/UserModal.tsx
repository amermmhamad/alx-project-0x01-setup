import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: { street: "", suite: "", city: "", zipcode: "" },
    phone: "",
    website: "",
    company: { name: "" },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Support nested address/company fields via dot notation (e.g., address.street)
    if (name.startsWith("address.")) {
      const field = name.split(".")[1] as keyof UserData["address"];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else if (name.startsWith("company.")) {
      const field = name.split(".")[1] as keyof UserData["company"];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [field]: value },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value } as UserData));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            name="website"
            value={user.website}
            onChange={handleChange}
            placeholder="Website"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              name="address.street"
              value={user.address.street}
              onChange={handleChange}
              placeholder="Street"
              className="px-4 py-2 border rounded-lg"
            />
            <input
              name="address.suite"
              value={user.address.suite}
              onChange={handleChange}
              placeholder="Suite"
              className="px-4 py-2 border rounded-lg"
            />
            <input
              name="address.city"
              value={user.address.city}
              onChange={handleChange}
              placeholder="City"
              className="px-4 py-2 border rounded-lg"
            />
            <input
              name="address.zipcode"
              value={user.address.zipcode}
              onChange={handleChange}
              placeholder="Zipcode"
              className="px-4 py-2 border rounded-lg"
            />
          </div>

          <input
            name="company.name"
            value={user.company.name}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <div className="flex justify-between pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
