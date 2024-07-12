import { Typography, TypographyProps } from "@mui/material";
import clsx from "clsx";
import { RequiredAstrics } from "./RequiredAstrics";

type LabelPrimaryProps = TypographyProps<"label"> & {
  required?: boolean;
};

const LabelPrimary = (props: LabelPrimaryProps) => {
  const { required } = props;
  return (
    <Typography
      variant="h6"
      component="label"
      fontSize={".9rem"}
      {...props}
      className={clsx(
        "!mb-1 inline-block cursor-pointer select-none",
        props?.className
      )}
    >
      {props.children}
      {required && <RequiredAstrics />}
    </Typography>
  );
};

export { LabelPrimary, type LabelPrimaryProps };
