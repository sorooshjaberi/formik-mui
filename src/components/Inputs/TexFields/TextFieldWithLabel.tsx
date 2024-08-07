import { Box, BoxProps } from "@mui/material";
import { ComponentProps, ReactNode } from "react";
import { CustomTextField } from "./CustomTextField";
import { LabelPrimary } from "../Labels/LabelPrimary";

export type TextFieldWithLabelProps = {
  label?: ReactNode;
  labelProps?: ComponentProps<typeof LabelPrimary>;
  containerProps?: BoxProps;
  enableInternalLable?: boolean;
} & Omit<ComponentProps<typeof CustomTextField>, "label">;

const TextFieldWithLabel = (props: TextFieldWithLabelProps) => {
  const {
    label,
    labelProps,
    containerProps,
    enableInternalLable,
    ...textFieldProps
  } = props;

  return (
    <Box {...containerProps}>
      {label && !enableInternalLable && (
        <LabelPrimary
          required={textFieldProps.required}
          htmlFor={textFieldProps.name}
          {...labelProps}
        >
          {label}
        </LabelPrimary>
      )}
      <CustomTextField
        fullWidth
        {...textFieldProps}
        label={enableInternalLable ? label : undefined}
      />
    </Box>
  );
};
export { TextFieldWithLabel };
