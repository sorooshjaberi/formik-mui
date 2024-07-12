import { Box, CircularProgress, CircularProgressProps } from "@mui/material";

type LoadingAdornmentProps = CircularProgressProps;

const LoadingAdornment = (props: LoadingAdornmentProps) => {
  return (
    <Box className="flex items-center justify-center p-5 h-full">
      <CircularProgress color="inherit" size={18} {...props} />
    </Box>
  );
};

export { LoadingAdornment , type LoadingAdornmentProps};
