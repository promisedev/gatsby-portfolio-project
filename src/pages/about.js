import * as React from 'react'
import Layout from "../components/layout"
import Component from "../components/about"
import { SEO } from '../components/seo'
const About = () => {
  return (
    
<Layout>
<Component/>
</Layout>
    
  )
} 

export default About

export const Head = () => {
  return (
    <SEO
      title={"About Me | Precious Dappa"}
      description={
        "I am an adapt Backend developer, proficient in nodejs, express, fastapi, sql, python, JavaScript, bash, mongodb, postgresql, with a track record of products and solutions in the industry and community."
      }
      image={"../assets/avatar.png"}
      keywords={[
        "nodejs",
        "express",
        "fastapi",
        "sql",
        "python",
        "JavaScript",
        "bash",
        "mongodb",
        "postgresql",
        "Software engineer",
        "Data science",
        "sklearn",
        "pandas",
        "numpy",
        "matplotlb",
      ]}
    />
  );
};