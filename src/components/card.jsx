import React from 'react'
import {
  writing_item,
  writing_img,
   
} from "./styles/projects.module.css";
import { GatsbyImage ,getImage} from 'gatsby-plugin-image';



const Card = ({data}) => {
  const {projectTitle, slug, projectDescription, githubRepo, projectImage:{gatsbyImage}}=data;
const image =getImage(gatsbyImage)
  return (
    <a className={writing_item} href={githubRepo}>
<div className={writing_img}>
<GatsbyImage image={image} alt="" style={{width:"100%",height:"100%"}}/>
</div>
<h3>{projectTitle}</h3>
<p>{projectDescription}</p>

    </a> 
  )
}

export default Card