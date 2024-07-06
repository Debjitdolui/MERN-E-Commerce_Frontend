import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const Profile = () => {
     const { user, userOrder } = useContext(AppContext);
  return (
    <>
      <div className="container text-center my-3">
        <h1>Welcome , {user?.name}</h1>
        <h3>{user?.email}</h3>
        <h1>Total Order :- {userOrder?.length}</h1>
      </div>
    </>
  );
};

export default Profile;
