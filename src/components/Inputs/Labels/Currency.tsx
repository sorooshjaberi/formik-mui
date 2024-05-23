import { Typography } from "@mui/material";

type Props = { currency?: string };

const Currency = (props: Props) => {
  const { currency = "ریال" } = props;
  return <Typography p={2}>{currency}</Typography>;
};

export { Currency };
