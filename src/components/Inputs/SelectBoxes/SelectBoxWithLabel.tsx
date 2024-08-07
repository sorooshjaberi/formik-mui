import { Box, BoxProps } from "@mui/material";
import { ComponentProps } from "react";
import { LabelPrimary } from "../Labels/LabelPrimary";
import { CustomSelectBox } from "./CustomSelectBox";

type SelectBoxWithLabelProps = ComponentProps<typeof CustomSelectBox> & {
  label?: string;
  labelProps?: ComponentProps<typeof LabelPrimary>;
  containerProps?: BoxProps;
  enableInternalLable?: boolean;
};

const SelectBoxWithLabel = (props: SelectBoxWithLabelProps) => {
  const {
    label,
    labelProps,
    containerProps,
    enableInternalLable,
    ...selectBoxProps
  } = props;
  return (
    <Box {...containerProps}>
      {label && !enableInternalLable && (
        <LabelPrimary
          required={selectBoxProps.required}
          htmlFor={selectBoxProps.name}
          {...labelProps}
        >
          {label}
        </LabelPrimary>
      )}
      <CustomSelectBox
        {...selectBoxProps}
        label={enableInternalLable ? label : undefined}
      />
    </Box>
  );
};

export { SelectBoxWithLabel , type SelectBoxWithLabelProps};
