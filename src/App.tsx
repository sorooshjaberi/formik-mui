import { useFormik } from "formik";
import {
  CustomDatePicker,
  CustomTextField,
  DatePickerWithFormik,
  LocalizationProvider,
  SelectBoxWithFormik,
  TextFieldWithFormik,
  TextFieldWithLabel,
} from "./components/Inputs";
import { Stack } from "@mui/material";
import { CheckboxWithFormik } from "./components/Inputs/Checkboxs";

function App() {
  const formik = useFormik({
    initialValues: { name: "", consent: "" },
    onSubmit() { },
  });

  return (
    <LocalizationProvider>
      <Stack spacing={2} width="400px">
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
      </Stack>
      <CheckboxWithFormik formik={formik} name="consent" label="heheheheh" />
    </LocalizationProvider>
  );
}

export default App;
