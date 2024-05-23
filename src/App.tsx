import { useFormik } from "formik";
import LocalizationProvider from "./components/Inputs/DatePickers/LocalizationProvider";
import {
  CustomDatePicker,
  CustomTextField,
  DatePickerWithFormik,
  SelectBoxWithFormik,
  TextFieldWithFormik,
  TextFieldWithLabel,
} from "./components/Inputs";
import { Box } from "@mui/material";

function App() {
  const formik = useFormik({
    initialValues: { name: "" },
    onSubmit() {},
  });

  return (
    <LocalizationProvider>
      <Box width="400px">
        <TextFieldWithFormik
          enableInternalLable
          label="Name"
          formik={formik}
          name="name"
        />
        <CustomTextField seperateThousands />
        <TextFieldWithLabel label="helloWOrkd" />
        <DatePickerWithFormik
          label="Date of birth"
          formik={formik}
          name="date_of_birth"
        />
        <CustomDatePicker />
        <SelectBoxWithFormik
          label="Gender"
          multiple
          formik={formik}
          name="gender"
          options={[
            { label: "Male", value: "m" },
            {
              label: "Female",
              value: "f",
            },
          ]}
          virtualize
          enableInternalLable
        />
      </Box>
    </LocalizationProvider>
  );
}

export default App;
