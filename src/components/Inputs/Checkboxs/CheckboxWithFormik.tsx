import { FormControl, FormHelperText } from "@mui/material";
import { CheckboxWithLabel, CheckboxWithLabelProps } from "./CheckboxWithLabel";
import { WithRequired } from "../../../models/utilTypes";
import { FormikProps } from "formik";

export type CheckboxWithFormikProps = WithRequired<CheckboxWithLabelProps, "name"> & {
    formik: FormikProps<any>
}

export function CheckboxWithFormik({
    formik,
    ...checkboxWithLabelProps
}: CheckboxWithFormikProps) {

    const name = checkboxWithLabelProps.name

    const {
        value = checkboxWithLabelProps.value,
        error,
        touched,
    } = formik.getFieldMeta(name);

    const { setValue } = formik.getFieldHelpers(name)

    const isTouchedAndError = !!(touched && error);


    return (
        <FormControl>
            <CheckboxWithLabel value={value} {...checkboxWithLabelProps}
                onFlattenedChange={(checked) => {
                    checkboxWithLabelProps.onFlattenedChange?.(checked)
                    setValue(checked)
                }}
                onBlur={formik.handleBlur}
            />
            {isTouchedAndError && <FormHelperText error>{error}</FormHelperText>}
        </FormControl>
    );
}