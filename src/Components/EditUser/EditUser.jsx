import React, { useEffect, useState } from "react";

import * as Yup from "yup";
// import axios from "axios";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../Components/Input/Input";

import * as api from "../../Services/Services"

const validationSchema = Yup.object({
  username: Yup.string().required("username is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: Yup.string().required("password is required").min(3),
});

const EditUser = ({ users, setUser }) => {
  const [editUser, setEditUser] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  //   console.log(params); //{id: '3'}
  const id = params.id;

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        //{username: 'sara', email: 'sara@gmail.com', password: '123', id: 3} اینو میخوام تعییر بدم پس اول گت کردم گرفتمش
        const response = await api.getOneUsers(id);
        //   console.log(response.data);
        setEditUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  },[]);

  const onSubmit = async (values) => {
    //   جدید تعییر یافته رو گرفتم
    //   console.log("edit on submit" ,values);{id: 3, username: 'sami', email: 'sami@gmail.com', password: '987'}
    try {
      const bodyRequest = {
        id: id,
        username: values.username,
        email: values.email,
        password: values.password,
      };
      const response = await api.editUsers(bodyRequest, id)
      console.log(response);

      const responseTwo = await api.getAllUsers();
      console.log(responseTwo);
      setUser(responseTwo.data);

           
 // setUser(users.map((user)=>{
            //     if(user.id ===parseInt(id)){
            //         return {...response.data}
            //     }else{
            //         return users
            //     }
            // }))

      navigate("/");
    } catch (error) {}
  };

  const formik = useFormik({
    initialValues: editUser || initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <>
      <div className="w-full max-w-xs m-auto mt-9">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <Input name="username" formik={formik} label="username" />
          <Input name="email" formik={formik} label="email" />
          <Input
            name="password"
            formik={formik}
            label="password"
            type="password"
            placeholder="******************"
          />

          <div className="flex items-center justify-between">
            <button
              disabled={!formik.isValid}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditUser;
