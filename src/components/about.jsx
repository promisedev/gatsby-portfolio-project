import React from "react";
import {
  about,
  about_title,
  about_body,
  about_desc, 
  about_avatar,
  a_title,
  a_desc,
  a_button,
  a_tag,
  about_stack,
  stack_cont,
  stack_title,
  stack_body,stack_item,avatar_img
} from "./styles/about.module.css";
import { aboutJson,Stacks } from "../utils/metadata";
import Button from "./button";
import {StaticImage} from "gatsby-plugin-image"
import avatar from "../assets/avatar.png"
const About = () => {
  return (
    <section className={about}>
      <div className={about_title}>
        <span>~/</span> 
        <h3>About</h3>
      </div>
      {/* -------------about description--------------------- */}
      <article className={about_body}>
        <div className={about_avatar}>
<StaticImage src="../assets/avatar.png" placeholder="BLURRED" width={900} alt="avatar" className={avatar_img} />
        </div>
        {/* ------------ */}
        <div className={about_desc}>
          <div className={a_title}>
            <h2>Hello World</h2>
            <span>{`(){`}</span>
          </div>
          {/* -------------description------------ */}
          <div
            className={a_desc}
            dangerouslySetInnerHTML={{ __html: aboutJson() }}
          />

          {/* ---------button------------ */}
          <div className={a_button}>
            <Button
              icon={"job"}
              title={"my resume"}
              link={""}
              type={"anchor"}
            />
          </div>
          {/* -------------------tag----------- */}
          <div className={a_tag}>
            <span>{`}`}</span>
          </div>
        </div>
      </article>

      {/* --------stacks----------------------------- */}
      <article className={about_stack}>
        <div className={a_title}> 
          <h2>my recipes</h2>
          <span>{`(){`}</span>
        </div>
        {/* -------------stacks------------ */}
        <article className={stack_cont}>
          <div className={stack_title}>
            <span>languages</span>
          </div>
          <div className={stack_body}>

{Stacks().map((stack,index)=>(
  <div className={stack_item} key={index}>
  <img src={stack?.image} alt=""/><span>{stack?.name}</span>
  </div>
))}
          </div>
        </article>
        {/* -------------------tag----------- */}
        <div className={a_tag}>
          <span>{`}`}</span>
        </div>
      </article>
    </section>
  );
};

export default About;
