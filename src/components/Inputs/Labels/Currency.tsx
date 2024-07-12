import { Typography } from "@mui/material";

type CurrencyProps = { currency?: string };

const Currency = (props: CurrencyProps) => {
  const { currency = "ریال" } = props;
  return <Typography p={2}>{currency}</Typography>;
};

export { Currency , type CurrencyProps};
