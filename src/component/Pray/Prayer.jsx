import "./Prayer.css";
import Fajr from "./../../assets/image/praying/fajr.png";
import Sunrise from "./../../assets/image/praying/sunrise.jpg";
import Dhhr from "./../../assets/image/praying/dhhr.png";
import Asr from "./../../assets/image/praying/asr.png";
import Maghrib from "./../../assets/image/praying/maghrib.png";
import Isha from "./../../assets/image/praying/night.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useContext, useEffect} from "react";
import { PrayerContext } from "../../App";



const Padding = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
    
  },
  [theme.breakpoints.up("sm")]: {
    padding: "1.6rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "3rem",
  },
}));

function Prayer({ selectCity, iso, city }) {

  const {timings , setTimings, lightMode} = useContext(PrayerContext);
  
  const FontMedia = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
      color : lightMode ? "black" : "white"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "25px",
    },
  }));
  


  const getTiming = async () => {
    const Response = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity/17-05-2024?country=${iso}&city=${city}`
    );
    setTimings(Response.data.data.timings);
  };

  useEffect(() => {
    getTiming();
  }, [selectCity]);



  const items = [
    { id: 1, image: Fajr, name: "Fajr", date: timings.Fajr },
    { id: 2, image: Sunrise, name: "Sunrise", date: timings.Sunrise },
    { id: 3, image: Dhhr, name: "Dhhr", date: timings.Dhuhr },
    { id: 4, image: Asr, name: "Asr", date: timings.Asr },
    { id: 5, image: Maghrib, name: "Maghrib", date: timings.Maghrib },
    { id: 6, image: Isha, name: "Isha", date: timings.Isha },
  ];

  const itemList = items.map((item) => {
    return (
      
      <Grid item xs={12} sm={6} ms={4} md={4} key={item.id} >
        <Card sx={{ maxWidth: 345 }} >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={item.image}
            
          />
          <Padding  style={{background : lightMode ? "white" : "#444"}}>
            <CardContent>
              <Typography gutterBottom variant="h5" >
                <FontMedia >
                  Prayers : <span>{item.name}</span>
                </FontMedia>
              </Typography>
              <Typography variant="h5">
                <FontMedia>
                  Date : <span>{item.date}</span>
                </FontMedia>
              </Typography>
            </CardContent>
          </Padding>
        </Card>
      </Grid>
     
    );
  });
  return (
    <>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
          {itemList}  
      </Grid>
    </>
  );
}

export default Prayer;
