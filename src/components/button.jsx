import React from "react"
import {
  more_btn,
  swip_1,
  swip_2,
  swip_txt,
  icr_swip1,
  icr_swip2,
  txt,
} from "./styles/projects.module.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
const Button=({icon,title,link,type})=>{
const addSwip = (e) => {
  e.currentTarget.children[0].classList.add(`${icr_swip1}`);
  e.currentTarget.children[1].classList.add(`${icr_swip2}`);
};
const removeSwip = (e) => {
  e.currentTarget.children[0].classList.remove(`${icr_swip1}`);
  e.currentTarget.children[1].classList.remove(`${icr_swip2}`);
};
    return (
      <div className={more_btn} onMouseOver={addSwip} onMouseOut={removeSwip}>
        <span className={swip_1}></span>
        <span className={swip_2}></span>
        <span className={swip_txt}>
          {(icon == "grass" && ( 
            <GrassOutlinedIcon
              style={{
                color: "rgb(7, 169, 234)",
                fonstSize: "30px",
                marginLeft: "30px", 
              }}
            />
          )) ||
            (icon == "job" && (
              <WorkOutlineIcon
                style={{
                  color: "rgb(7, 169, 234)",
                  fonstSize: "30px",
                  marginLeft: "30px",
                }}
              />
            ))}
          <span style={{ marginRight: "50px" }} className={txt}>
            {title}
          </span>
        </span>
      </div>
    );
}

export default Button