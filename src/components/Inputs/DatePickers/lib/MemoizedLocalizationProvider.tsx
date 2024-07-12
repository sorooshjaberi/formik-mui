import {
  LocalizationProvider as MLocalizationProvider,
  LocalizationProviderProps,
} from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { memo } from "react";

type Props = LocalizationProviderProps<any, any>;

const LocalizationProvider = (props: Props) => {
  return <MLocalizationProvider dateAdapter={AdapterDateFnsJalali} {...props} />;
};

export default memo(LocalizationProvider);
