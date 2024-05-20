import "./MainContent.css";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Prayer from "./Pray/Prayer";
import { Container, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useContext, useEffect } from "react";
import moment from "moment";
import { PrayerContext } from "../App";

// MEDIA
const FontMedia = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "21px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "25px",
  },
}));

// == MEDIA ==

function MainContent() {
  const { timings , lightMode } = useContext(PrayerContext);
  // STATE

  const [selectCity, setseclectCity] = useState("Palestine - Gaza");

  const [today, setToday] = useState("");

  const [nextPrayerTimings, setNextPrayerTimings] = useState("");

  const [remaingTime, setRemaingTime] = useState("");

  // == STATE ==

  // ISO AND CITY NAME

  const iso = selectCity.substring(0, 2);
  var arr = selectCity.split("-");
  const city = arr[1];
  // console.log(iso);

  // == ISO AND CITY NAME

  // USE EFFECT

  useEffect(() => {
    const time = moment();
    setToday(time.format("MMMM Do YYYY, h:mm:ss a"));
  }, [selectCity]);

  useEffect(() => {
    let interval = setInterval(() => {
      setupCountDownTimer();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [selectCity, timings]);

  // == USE EFFECT ==

  // FUNCTION

  const handleCityChange = (event) => {
    setseclectCity(event.target.value);
  };

  const setupCountDownTimer = () => {
    const momentNow = moment();

    const prayerTimings = [
      "Fajr",
      "Sunrise",
      "Dhuhr",
      "Asr",
      "Maghrib",
      "Isha",
    ];

    let nextPrayer = null;
    for (let i = 0; i < prayerTimings.length; i++) {
      const currentPrayer = prayerTimings[i];
      const nextPrayerIndex = (i + 1) % prayerTimings.length;
      nextPrayer = prayerTimings[nextPrayerIndex];

      const currentPrayerMoment = moment(timings[currentPrayer], "hh:mm");
      const nextPrayerMoment = moment(timings[nextPrayer], "hh:mm");

      if (
        momentNow.isAfter(currentPrayerMoment) &&
        momentNow.isBefore(nextPrayerMoment)
      ) {
        // console.log(`Next prayer is ${nextPrayer}`);
        setNextPrayerTimings(nextPrayer);
        break;
      }
    }

    const nextPrayerTime = timings[nextPrayer];
    // console.log("the next time is " , nextPrayerTime)
    const newPrayerTimeMoment = moment(nextPrayer, "hh:mm");

    let remineTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);
    // console.log(remineTime);

    if (remineTime < 0) {
      const midNight = moment("23:59:59", "hh:mm:ss").diff(momentNow);
      const fajrTomidNightDiff = newPrayerTimeMoment.diff(
        moment("00:00:00", "hh:mm:ss")
      );

      const totalDiff = midNight + fajrTomidNightDiff;

      remineTime = totalDiff;
    }

    const durationRemeingTime = moment.duration(remineTime);

    setRemaingTime(
      `${durationRemeingTime._data.hours} : ${durationRemeingTime._data.minutes} :${durationRemeingTime._data.seconds}`
    );
  };

  // == FUNCTION ==
  return (
    <>
      {/* TOP ROW */}
      <Grid
        container
        spacing={2}
        style={{ width: "100%" }}
        className="container"
      >
        <Grid item xs={6} className="item">
          <div className="">
              <FontMedia>
                  <h2 className="date" style={{color : lightMode ?` black` : `rgba(255, 255, 255, 0.87)`}}>
                    {today}
                    </h2>
               </FontMedia>
            
              <FontMedia>
                  <h1 className="place"  style={{ color : lightMode ?`#fa0` : `rgb(255, 215, 141)`}}>
                      {selectCity}
                  </h1>
              </FontMedia>
          </div>
        </Grid>
        <Grid item xs={6} className="item">
          <div className="">
                <FontMedia >
                    <h2 className="remain" style={{color : lightMode ?` black` : `rgba(255, 255, 255, 0.87)`}}>
                        Remains until the {nextPrayerTimings} prayer
                    </h2>
                </FontMedia>
                <FontMedia style={{ direction: "ltr" }} >
                    <h1 className="time" style={{ color : lightMode ?`#fa0` : `rgb(255, 215, 141)`}}>
                        {remaingTime}
                    </h1>
                </FontMedia>
          </div>
        </Grid>
      </Grid>

      {/* == TOP ROW == */}

      {/* Divider */}

      <Divider
        variant="middle"
        component="li"
        style={{  borderColor: lightMode ? "rgba(0, 0, 0, 0.258" : "rgba(255, 255, 255, 0.2)" }}
      />

      {/* == Divider == */}

      {/* CARDS */}
      <Container maxWidth={"lg"}>
        <Stack direction={{ xs: "column", sm: "row" }} mt={4}>
          <Prayer selectCity={selectCity} iso={iso} city={city} />
        </Stack>
      </Container>
      {/* == CARDS == */}

      {/* LIST INPUTS CITY */}

      <FormControl sx={{ m: 1, minWidth: 300 }} style={{ margin: "8rem 0" }}>
        <InputLabel
          style={{ color: lightMode ? "black ": "rgba(255, 255, 255, 0.87)" }}
          id="select-Input-label"
        >
          City
        </InputLabel>
        <Select
          style={{
            color: lightMode ? "black ": "rgba(255, 255, 255, 0.87)" ,
            border: "1px solid rgba(255, 255, 255, 0.87)",
          }}
          labelId="select-Input-label"
          id="select-Input"
          value={selectCity}
          label="city"
          onChange={handleCityChange}
        >
          <MenuItem value={"Palestine - Jerusalem"}>PS - Jerusalem </MenuItem>
          <MenuItem value={"Palestine - Gaza"}>PS - Gaza</MenuItem>
          <MenuItem value={"Palestine - Nablus"}>PS - Nablus</MenuItem>
          <MenuItem value={"ASaudi - Makkah"}>AS - Makkah</MenuItem>
          <MenuItem value={"Qater - Doha"}>QA - Doha</MenuItem>
        </Select>
      </FormControl>

      {/* == LIST INPUTS CITY == */}
    </>
  );
}

export default MainContent;
