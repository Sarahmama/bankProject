import React from "react";
import { getAllUsers } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import User from "./User";

const AllUsers = () => {
  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["getAll"],
    queryFn: () => getAllUsers(),
  });

  const cleanData = data?.filter((user) => user !== null);
  const allusers = cleanData?.map((user) => (
    <User username={user.username} balance={user.balance} key={user.id} />
  ));

  return (
    <div className="App ">
      <div className="d-flex justify-content-around flex-wrap">{allusers}</div>
    </div>
  );
};

export default AllUsers;