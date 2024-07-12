import { ReactNode } from "react";
import { CustomChecbox, CustomCheckboxProps } from "./CustomCheckbox";
import { LabelPrimary, LabelPrimaryProps } from "..";
import { Stack, StackProps } from "@mui/material";

export type CheckboxWithLabelProps = CustomCheckboxProps & {
    label?: ReactNode;
    labelProps?: LabelPrimaryProps;
    containerProps?: StackProps;
    labelReverseOrder?: boolean
}

export function CheckboxWithLabel({
    label,
    labelProps,
    containerProps,
    labelReverseOrder,
    ...checkboxProps
}: CheckboxWithLabelProps) {

    return (
        <Stack direction="row" {...(labelReverseOrder && {direction : "row-reverse"})} alignItems="center" {...containerProps}>
            <CustomChecbox {...checkboxProps} />
            {label && (
                <LabelPrimary
                    required={checkboxProps.required}
                    htmlFor={checkboxProps.name}
                    {...labelProps}
                >
                    {label}
                </LabelPrimary>
            )}
        </Stack>
    );
}