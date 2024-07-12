import { TextFieldProps } from "@mui/material";
import { FC } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { CoreTextField } from "./CoreTextField";

export type CustomTextFieldProps = TextFieldProps & {
  notAffectedRtl?: boolean;
  loading?: boolean;
  seperateThousands?: boolean;
  numericFormatProps?: NumericFormatProps;
};

const CustomTextField: FC<CustomTextFieldProps> = (props) => {
  const {
    notAffectedRtl,
    seperateThousands,
    numericFormatProps,
    ...textFieldProps
  } = props;
  if (seperateThousands) {
    return (
      <NumericFormat
        {...(textFieldProps as any)}
        {...numericFormatProps}
        customInput={CoreTextField}
        notAffectedRtl={notAffectedRtl}
        thousandSeparator
        onValueChange={(values) => {
          props.onChange?.({
            target: {
              value: values.value,
              name: props.name,
            },
          } as any);
        }}
        onChange={() => {}}
      />
    );
  }
  return <CoreTextField notAffectedRtl={notAffectedRtl} {...textFieldProps} />;
};

export { CustomTextField };
