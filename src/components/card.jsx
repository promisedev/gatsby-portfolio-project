import React from 'react'
import {
  writing_item,
  writing_img,
   
} from "./styles/projects.module.css";
const Card = () => {
  return (
    <div className={writing_item}>
<div className={writing_img}></div>
<h3>Set up your macahine </h3>
<p>Some dummy text about how to set up machine learning mode </p>

    </div> 
  )
}

export default Card