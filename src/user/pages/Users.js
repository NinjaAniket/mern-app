import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const users = [
    {
      id: "u1",
      name: "Aniket",
      image:
        "https://cdn.pixabay.com/photo/2020/06/29/19/26/piano-5353974_960_720.jpg",
      places: 3,
    },
  ];
  return (
    <div>
      <UsersList items={users} />
    </div>
  );
};

export default Users;
