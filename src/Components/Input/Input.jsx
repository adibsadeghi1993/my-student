import React from "react";

const Input = ({label ,formik,name,type="text"}) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-700">{formik.errors[name]}</div>
      )}

      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        type={type}
        // value={formik.values[name]}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        {...formik.getFieldProps(name)}


        // placeholder="username"
      />
    </div>
  );
};

export default Input;
