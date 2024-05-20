import "@fontsource/roboto";
import MainContent from "./MainContent";
import { Container, CssBaseline } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import Downbar from "./Global/Dwonbar/Downbar";
import Topbar from "./Global/Topbar/Topbar";
import { createTheme , ThemeProvider } from "@mui/material";

export const PrayerContext = createContext();

function App() {

  // STATE
  const [timings, setTimings] = useState({
    Fajr: "04:55",
    Sunrise: "06:17",
    Dhuhr: "11:46",
    Asr: "14:53",
    Maghrib: "17:15",
    Isha: "18:45",
  });

  const [lightMode , setLightMode] = useState(false);


  // == STATE ==

  const timingValue = { timings, setTimings };

  const theme = createTheme({
        palette: {
          mode : lightMode ? "light" : "dark",
          primary : {
            main: "#444"
          }
        },
      });
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      
     {/* HEADER */}
     <Topbar change={() => {setLightMode(!lightMode)}} checked={lightMode}/>
     {/* == HEADER == */}

      {/* MAIN CONTENT */}
      <div className="main-content">
        <Container maxWidth={"xl"}>
          <PrayerContext.Provider value={timingValue}>
            <MainContent />
          </PrayerContext.Provider>
        </Container>
      </div>

      {/* == MAIN CONTENT == */}

      {/* FOOTER */}
      <Downbar />
      {/* == FOOTER == */}

      </ThemeProvider>
    </>
  );
}

export default App;
