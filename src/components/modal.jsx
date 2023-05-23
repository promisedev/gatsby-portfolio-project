import React, {useRef,useEffect}from "react"
import {modal,modal_ele,show_modal_ele,hide_modal_ele,modal_parent,modal_social,modal_pages,page_link,active_page} from "./styles/modal.module.css"
import {Link} from "gatsby"
import { Pages,Social } from "../utils/metadata"
import { LinkedIn, Twitter, Instagram, GitHub } from "@mui/icons-material";
//import DrawIcon from "@mui/icons-material/Draw";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
const Modal=({modalOpen})=>{
    const body =useRef(null) 

   

    return (
      <section className={modal}>
        <article className={modal_ele}>
          <article className={modal_parent}>
            <div className={modal_social}>
              {Social().map((social, index) => (
                <a href={social.link}>
                  {(index == 0 && (
                    <Twitter
                      style={{ fontSize: "15px", color: "rgb(7, 169, 234)" }}
                    />
                  )) ||
                    (index == 1 && (
                      <LinkedIn
                        style={{ fontSize: "15px", color: "rgb(7, 169, 234)" }}
                      />
                    )) ||
                    (index == 2 && (
                      <GitHub
                        style={{ fontSize: "15px", color: "rgb(7, 169, 234)" }}
                      />
                    )) ||
                    (index == 3 && (
                      <HistoryEduIcon
                        style={{ fontSize: "15px", color: "rgb(7, 169, 234)" }}
                      />
                    ))}{" "}
                </a>
              ))}
            </div>
            {/* ---------------------------------------- */}
            <div className={modal_pages}>
              {Pages().map((page, index) => (
                <Link
                  to={`/${page.link}`}
                  className={page_link}
                  activeClassName={active_page}
                  key={index}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </article>
        </article>
      </section>
    );
}

export default Modal