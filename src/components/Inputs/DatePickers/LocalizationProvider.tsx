import { FC, PropsWithChildren } from "react";
import { LocalizationProvider as MuiLocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";

const LocalizationProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MuiLocalizationProvider adapterLocale={AdapterDateFnsJalali}>
      {children}
    </MuiLocalizationProvider>
  );
};

export default LocalizationProvider;
