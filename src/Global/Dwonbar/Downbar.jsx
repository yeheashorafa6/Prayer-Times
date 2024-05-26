import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp,} from "@fortawesome/free-brands-svg-icons";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

import "./Downbar.css"
const FontSoical = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "25px",
  },
}));

const FontMedia = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
  },
}));

function Downbar() {
  const icons = [
    { id: 1, icon: faFacebook , src : "https://www.facebook.com/profile.php?id=61556157676426"},
    { id: 2, icon: faInstagram , src : "https://www.instagram.com/yehea__sh/" },
    { id: 3, icon: faWhatsapp , src : "+972569353191" },
  ];

  const iconList = icons.map((icon) => {
    return (
      <li className="soical-item" key={icon.id}>
        <a href={icon.src} className="soical-link">
          <FontSoical><FontAwesomeIcon icon={icon.icon} className="icon" /></FontSoical>
        </a>
      </li>
    );
  });
  return (
    <footer className="footer" >
      <Stack direction="row" justifyContent="space-around" alignItems={"center"}>
      <div className="copyright">
      <h4>
        <FontMedia>
          Copyright © 2024 | Desing By <span>Yehea Fayez Shorafa</span>
          
        </FontMedia>
        </h4>
      </div>
      <div className="soical-list">
        <ul className="soical-items">{iconList}</ul>
      </div>
      </Stack>
    </footer>
  );
}

export default Downbar;
