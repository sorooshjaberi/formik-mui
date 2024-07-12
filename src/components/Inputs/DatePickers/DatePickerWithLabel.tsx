import { ComponentProps } from "react";
import { CustomDatePicker } from "./CustomDatePicker";
import { BoxProps, Box } from "@mui/material";
import { LabelPrimary } from "../Labels/LabelPrimary";

type DatePickerWithLabelProps = ComponentProps<typeof CustomDatePicker> & {
  label?: string;
  labelProps?: ComponentProps<typeof LabelPrimary>;
  containerProps?: BoxProps;
  enableInternalLable?: boolean;
};

const DatePickerWithLabel = (props: DatePickerWithLabelProps) => {
  const {
    label,
    labelProps,
    containerProps,
    enableInternalLable,
    ...datePickerProps
  } = props;

  return (
    <Box {...containerProps}>
      {label && !enableInternalLable && (
        <LabelPrimary required={datePickerProps.required} {...labelProps}>
          {label}
        </LabelPrimary>
      )}
      <CustomDatePicker
        label={enableInternalLable ? label : undefined}
        {...datePickerProps}
      />
    </Box>
  );
};

export { DatePickerWithLabel, type DatePickerWithLabelProps };
