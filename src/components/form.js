import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "Sailab",
  email: "",
  channel: ""
};

const onSubmit = (values) => {
  debugger;
  console.log("Form Data:", values);
};

// const validation = (values) => {
//   const errors = {};
//   debugger;
//   if (!values.name) {
//     errors.name = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   }
//   if (!values.channel) {
//     errors.channel = "Required";
//   }
//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Required!!"),
  email: Yup.string().required("Required!!"),
  channel: Yup.string().required("Required!!")
});

const Form = () => {
  debugger;
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });
  // values = "";
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <div className="ui label">Name</div>
          <div className="ui input">
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
            />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <div className="ui label">Email</div>
          <div className="ui input">
            <input
              type="text"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <div className="ui label">Channel</div>
          <div className="ui input">
            <input
              type="text"
              name="channel"
              id="channel"
              value={formik.values.channel}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
            />
          </div>
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};
export default Form;
