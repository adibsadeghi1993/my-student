import { createContext, useMemo, useState,useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

import { purple,green,grey,amber ,deepOrange} from '@mui/material/colors';

export const ColorModeContext = createContext();



export const ColorContextProvider = ({ children }) => {
  const [mode, setMode] = useState(`light`);


  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    []
  );

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            text: {
              primary: grey[800],
              secondary: grey[800],
            },
              //divider: green[700],
            
            }
        : {
            // palette values for dark mode
           // primary: green,
            //divider: green[700],
            background: {
              default: grey[800],
              paper: grey[800],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });
 

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  

  return (
    <ColorModeContext.Provider value={{colorMode,name:"adib",mode}}>
      
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
