import React from 'react'
import Layout from "../components/layout"
import Component from "../components/works"
import { graphql } from 'gatsby'
import { SEO } from '../components/seo'
const Works = ({data}) => {
  const projects = data.allContentfulPreciousSchema.nodes
  return (
    <Layout>
      <Component data={projects}/>
    </Layout>
  )
} 

export default Works


export const query = graphql`
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
`
export const Head = () => {
  return (
    <SEO
      title={"Projects | Precious Dappa"}
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