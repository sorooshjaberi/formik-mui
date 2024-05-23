import { FC, PropsWithChildren } from "react";
import {
  LocalizationProviderProps as MuiLocalizationProviderProps,
  LocalizationProvider as MuiLocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";

export type LocalizationProviderProps = PropsWithChildren<
  MuiLocalizationProviderProps<any, unknown>
>;

const LocalizationProvider: FC<LocalizationProviderProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <MuiLocalizationProvider
      adapterLocale={AdapterDateFnsJalali}
      {...otherProps}
    >
      {children}
    </MuiLocalizationProvider>
  );
};

export { LocalizationProvider };
