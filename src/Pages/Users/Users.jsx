import React, { useEffect, useState } from "react";

import { FiTrash2 } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";


import * as api from "../../Services/Services"


const Users = ({ users, setUser }) => {
  const removeHandler = async (id) => {
    try {
      await api.deleteUsers(id);

      setUser(users.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await api.getAllUsers();
        // console.log(response);
        // console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUsers();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center flex-wrap">
        <div className="m-2 grid grid-cols-2 md:grid-cols-3 gap-4">
          {users.map((user) => {
            return (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-100"
                key={user.id}
              >
                <div className="px-10 py-8">
                  <div className="font-bold text-xl mb-2">{user.username}</div>
                  <p className="text-gray-700 text-base">{user.email}</p>
                </div>

                <div className="flex justify-between m-3 first:">
                  <button onClick={() => removeHandler(user.id)}>
                    <FiTrash2 />
                  </button>
                  <button>
                    <Link to={`/edituser/${user.id}`}>
                      <FiEdit />
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;

// axios.get(`http://localhost:4000/user/${id}`)
// .then(()=>{

// }).catch
// }
