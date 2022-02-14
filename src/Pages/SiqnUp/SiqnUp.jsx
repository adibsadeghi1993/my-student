import React from "react";

import * as Yup from "yup";
import * as api from "../../Services/Services";

import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../../Components/Input/Input";

const validationSchema = Yup.object({
  username: Yup.string().required("username is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: Yup.string().required("password is required").min(3),
});

const SiqnUp = ({ users, setUser }) => {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    // console.log("values", values); //{username: 'sara', email: 'sara@gmail.com', password: '123'} تازه = میخوام بقرستم سمت بک
    try {
      const response = await api.AddUsers(values);
      // console.log(response); //data: {username: 'sara', email: 'sara@gmail.com', password: '123', id: 4}
      console.log(response.data);
      setUser([...users, response.data]);
      navigate("/");
    } catch (error) {}
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <h1 className="text-center text-lg font-bold "></h1>

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
              Sign In
            </button>
            <NavLink
              to=""
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default SiqnUp;
