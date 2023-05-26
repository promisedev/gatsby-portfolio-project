import React from "react"


export const SEO=({title, description, image,keywords})=>{

    return (
      <>
      <title>{title}|| {"Precious Dappa"}</title>
        <meta property="og:image" content={image} />
        <meta
          name="description"
          content={description}
        />
        <meta
          name="twitter:card"
          content={description}
        />
        <meta
          name="keywords"
          content={keywords}
        />

        
      </>
    );
}