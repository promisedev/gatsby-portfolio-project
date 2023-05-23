import React from "react"
import {writing_body,writing_title,writing_cont,writing_items,writing_item,writing_img,more_page,} from "./styles/projects.module.css"
import Button from "./button"
import Card from "./card"
  
const Writing=({name,data})=>{

    return ( 
      <section className={writing_body}>
        <div className={writing_title}>
          <span>~/</span>
          <h2>{name}</h2>
        </div>
        <article className={writing_cont}> 
          <article className={writing_items}>
            {data?.map((data, index) => (
              <Card data={data} />
            ))}
          </article>
        </article>
        <article className={more_page}>
          <Button
            icon={"grass"}
            title={"more projects"}
            link={"works"}
            type={"link"}
          />
        </article>
      </section>
    );
}

export default Writing