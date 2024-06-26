import { FormikProps } from "formik";
import { ComponentProps, FC } from "react";
import { TextFieldWithLabel } from "./TextFieldWithLabel";
import { WithRequired } from "../../../models/utilTypes";

export type TextFieldWithFormikProps = WithRequired<
  ComponentProps<typeof TextFieldWithLabel>,
  "name"
> & {
  formik: FormikProps<any>;
};

const TextFieldWithFormik: FC<TextFieldWithFormikProps> = (
  props
) => {
  const { formik, ...textFieldProps } = props;
  const name = textFieldProps.name;

  const {
    value = textFieldProps.value,
    error,
    touched,
  } = formik.getFieldMeta(name);

  const isTouchedAndError = !!(touched && error);

  return (
    <TextFieldWithLabel
      error={isTouchedAndError}
      helperText={isTouchedAndError && <>{error}</>}
      value={value}
      {...textFieldProps}
      onChange={(event) => {
        formik.handleChange(event);
        props.onChange?.(event);
      }}
      onBlur={(event) => {
        formik.handleBlur(event);
        props.onBlur?.(event);
      }}
    />
  );
};
export { TextFieldWithFormik };
