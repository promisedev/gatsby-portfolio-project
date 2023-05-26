import React ,{useState,useRef,useEffect}from 'react'
import {body,hero,hero_avatar, hero_item,hero_about,hero_btn, hero_name, hero_name1, hero_name2, hero_social, hero_social_cont,hero_social_icon,show_n1,show_n2} from "./home.module.css"
// import Menu from './menu'
// import {StaticImage} from "gatsby-plugin-image"
import { LinkedIn,Twitter, Instagram,GitHub } from '@mui/icons-material'
//import DrawIcon from "@mui/icons-material/Draw";

import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Firstname,Lastname, Intro, About,myFooter } from '../utils/metadata'
import Stacks from "./stack"
import Projects from "./projects"
import { Mystacks, Myfeatured,Social} from '../utils/metadata'
//import Modal from "./modal"
import {Link} from "gatsby"
import Layout from './layout';
import {useStaticQuery, graphql} from "gatsby"

const Home = () => {
const n1 = useRef(null) 
const n2 = useRef(null)

useEffect(()=>{
const name_1 = n1.current
const name_2 = n2.current

name_1&&name_1.classList.add(`${show_n1}`)
name_2&&name_2.classList.add(`${show_n2}`)
},[])

const data = useStaticQuery( graphql`
  query {
    allContentfulPreciousSchema(sort: {createdAt: ASC}) {
      nodes {
        projectTitle
        slug
        projectDescription
        githubRepo
        projectImage {
          gatsbyImage(placeholder: BLURRED, quality: 100, width: 1000)
        }
      }
    }
  }
`)
const result = data.allContentfulPreciousSchema.nodes

  return (
    <Layout>
      <main className={body}>
        {/* ------------------------------------------------------ */}
        <section className={hero}>
          {/* <div className={hero_avatar}></div> */}

          <article className={hero_item}>
            <div className={hero_name}>
              <h2 className={hero_name1} ref={n1}>{Firstname()}</h2>
              <h2 className={hero_name2} ref={n2}>{Lastname()}</h2>
            </div>
  
            <div className={hero_about}>
              <h2>{Intro()}</h2>
              <p>{About()}</p>
              <Link to="/about" className={hero_btn}>Learn more</Link>
            </div> 
          </article>

          <div className={hero_social}>
            <div className={hero_social_cont}>
              {Social().map((social, index) => (
                <a href={social.link} className={hero_social_icon} key={index}>
                  {(index == 0 && (
                    <Twitter style={{ fontSize: "17px", color: "black" }} />
                  )) ||
                    (index == 1 && (
                      <LinkedIn style={{ fontSize: "17px", color: "black" }} />
                    )) ||
                    (index == 2 && (
                      <GitHub style={{ fontSize: "17px", color: "black" }} />
                    )) ||
                    (index == 3 && (
                      <HistoryEduIcon
                        style={{ fontSize: "17px", color: "black" }}
                      />
                    ))}
                </a>
              ))}
            </div>
          </div>
        </section>
        {/* --------------third component--------------------------- */}

        <Stacks name={"what i do"} data={Mystacks()} />
        {/* --------------------fourth component----------------------- */}
        {/* <Stacks name={"featured work"} data={Myfeatured()} /> */}

        <Projects name={"Projects"} data={result} />

        {/* -------------------------------------------------- */}
      </main>
    </Layout>
  );
}

export default Home
