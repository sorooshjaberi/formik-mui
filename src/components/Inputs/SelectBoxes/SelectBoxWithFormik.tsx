import { WithRequired } from "../../../models/utilTypes";
import { ComponentProps } from "react";
import { SelectBoxWithLabel } from "./SelectBoxWithLabel";
import { FormikProps } from "formik";
import formikUrlValueResolver from "./utils/urlInjectionHelper";
type SelectBoxWithFormikProps = WithRequired<ComponentProps<typeof SelectBoxWithLabel>, "name"> & {
  formik: FormikProps<any>;
};

const SelectBoxWithFormik = (props: SelectBoxWithFormikProps) => {
  const { formik, ...selectBoxProps } = props;
  const name = selectBoxProps.name;

  const { touched, error, value: formikValue } = formik.getFieldMeta(name);
  const { setValue, setTouched } = formik.getFieldHelpers(name);

  let value = selectBoxProps.value || [];

  value = formikUrlValueResolver(formikValue, selectBoxProps).value || value;

  selectBoxProps.options = formikUrlValueResolver(
    formikValue,
    selectBoxProps
  ).options;

  const isTouchedAndError = !!(error && touched);

  return (
    <SelectBoxWithLabel
      textFieldProps={{
        error: isTouchedAndError,
        helperText: isTouchedAndError && <>{error}</>,
      }}
      {...selectBoxProps}
      {...{
        onInputChange(event, value, reason) {
          if (reason === "clear") {
            setValue("");
          }
        },
        onChange: (event, value, reason, details) => {
          ///@ts-ignore
          props.onChange?.(event, value, reason, details, flattenedValue);
        },
        onFlattenedChange(...args) {
          const [flattenedValue] = args;
          setValue(flattenedValue);
          selectBoxProps.onFlattenedChange?.(...args);
        },
        onBlur: (event: any) => {
          setTouched(true, false);
          props.onBlur?.(event);
        },
        value,
      }}
    />
  );
};

export { SelectBoxWithFormik, type SelectBoxWithFormikProps };
