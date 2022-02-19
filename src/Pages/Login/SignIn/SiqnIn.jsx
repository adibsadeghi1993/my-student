import React from "react";

import * as Yup from "yup";

import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../../../Components/Input/Input";
import { useSpring, animated } from "react-spring"; // react-spring


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object({
    phoneNumber:Yup.string().matches(phoneRegExp, 'Phone number is not valid') ,
  password: Yup.string().required("password is required").min(3),
});

const SiqnIn = () => {
  const navigate = useNavigate();
  const initialValues = {
    phoneNumber:"",
    password: "",
  };

  const onSubmit = async (values) => {
   console.log(values)
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <h1 className="text-center text-lg font-bold ">Sign In</h1>

      <div className="w-full max-w-xs m-auto mt-9">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <Input name="phoneNumber" formik={formik} label="phoneNumber" />
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
          </div>
          <div>
            <NavLink
              to="/login"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              SignUp!!!
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default SiqnIn;
