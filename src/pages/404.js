import React from "react";
import Layout from "../components/layout";
import {SEO} from "../components/seo"
const Pagenotfound = () => {
  return (
    <Layout>
      <section style={{width:"100%", height:"90vh", background:"black", color:"#fff",display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px", fontFamily:"Arial Black"}}>404</section>
    </Layout>
  );
};

export default Pagenotfound;


export const Head=()=>{
  return(<SEO  title={"404"} description={"The resquested page was not found"} image={""} keywords={""}/>)
}