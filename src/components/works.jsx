import React from 'react'
import {project_desc,project_cont} from "./styles/works.module.css"
import {
  about, 
  about_title,
} from "./styles/about.module.css";
import Card from "./card"
const Works = ({data}) => {
  return (
   <section className={about}> 
      <div className={about_title}>
        <span>~/</span>
        <h3>Projects</h3>
      </div>
      {/* -------------projects items--------------------- */}
      <div className={project_desc}><p>These are some of the projects i have worked on</p></div>
      <article className={project_cont}>
{data?.map((data,index)=>(<Card data={data}/>))}

      </article>



    
    </section>
  )
}

export default Works