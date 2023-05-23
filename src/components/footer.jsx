 import React,{useState} from "react"
import { myFooter ,Social,Lastname} from "../utils/metadata"
import {footer, footer1,footer2,footer3,footer2_desc,footer2_email,footer_social,footer_copy,copied,copied_txt} from "./styles/footer.module.css"
import { LinkedIn, Twitter, Instagram, GitHub } from "@mui/icons-material";
//import DrawIcon from "@mui/icons-material/Draw";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
 const Footer=()=>{
const date = new Date().getFullYear()
const [iscopy,setIscopy]=useState(false)
const copyClipboard=()=>{
  navigator.clipboard.writeText(myFooter().email);
  setIscopy(true)
  setTimeout(() => {
   setIscopy(false) 
  }, 3000);
}
 
    return (
      <article className={footer}>
        <div className={footer1}>
          <h2>Get In Touch!</h2>
        </div> 
        <div className={footer2}>
          <p className={footer2_desc}>
            You have an awesome idea you want me to jump on? Feel free to
            contact me. However, if you have other request or question, I'm
            still up for it.
          </p>
          <p className={footer2_email} onClick={copyClipboard} onPress={copyClipboard}>{iscopy&&<span className={copied}><span className={copied_txt}>Email copied</span></span>}{myFooter().email}</p>
        </div>
        <div className={footer3}>
          <div className={footer_social}>
            {Social().map((social, index) => (
              <a href={social.link}>
                {(index == 0 && (
                  <Twitter style={{ fontSize: "15px", color: "black" }} />
                )) ||
                  (index == 1 && (
                    <LinkedIn style={{ fontSize: "15px", color: "black" }} />
                  )) ||
                  (index == 2 && (
                    <GitHub style={{ fontSize: "15px", color: "black" }} />
                  )) ||
                  (index == 3 && (
                    <HistoryEduIcon
                      style={{ fontSize: "15px", color: "black" }}
                    />
                  ))}
              </a>
            ))}
          </div>
          <div className={footer_copy}>
            {Lastname() + " "}&copy;{" " + date + " All rights reserved"}
          </div>
        </div>
      </article>
    );
 }

 export default Footer