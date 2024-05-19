import "./MainContent.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Prayer from "./Pray/Prayer";


function MainContent() {

  
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
            <h2 className="date">سبتمبر 9 2024 |4:30 </h2>
            <h1 className="place">مكه المكرمه</h1>
          </div>
        </Grid>
        <Grid item xs={6} className="item">
          <div className="">
            <h2 className="remain">متبقي حتى صلاه العصر</h2>
            <h1 className="time"> 1 : 14 : 5</h1>
          </div>
        </Grid>
      </Grid>

      {/* == TOP ROW == */}

      {/* Divider */}

      <Divider
        variant="middle"
        component="li"
        style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
      />

      {/* == Divider == */}


      {/* CARDS */}
      <Prayer />
      {/* == CARDS == */}
    </>
  );
}

export default MainContent;
