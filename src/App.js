import React from "react";
import * as Yup from "yup";
import Select from "react-select";
import { useFormik } from "formik";
import { customStyles } from "./SelectStyle";
const stationOptions = [
  { label: "Lahore,PK", value: "lhr" },
  { label: "Karachi,PK", value: "khi" },
  { label: "Islamabad,PK", value: "isb" },
];
function App() {
  const formik = useFormik({
    initialValues: {
      Select: null,
    },
    validationSchema: Yup.object({
      Select: Yup.object().required("Select is required"),
    }),
    onSubmit: (values) => {
      // Handle submission logic
      console.log(values);
    },
  });
  console.log("success")
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label
          htmlFor="multiSelectOptions"
          className="block text-[#151515] mb-5 font-[600] ml-6"
        >
          Select
        </label>
        <Select
          className="basic-single"
          name="Select"
          placeholder="Please Select"
          menuPlacement="auto"
          options={stationOptions}
          value={formik.values.Select}
          styles={customStyles}
          onChange={(selectedOptions) => {
            formik.setFieldValue("Select", selectedOptions);
          }}
          error={formik.errors.Select && formik.touched.Select}
        />
        {formik.errors.Select && formik.touched.Select && (
          <div className="text-error ml-3 text-xs">{formik.errors.Select}</div>
        )}
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
