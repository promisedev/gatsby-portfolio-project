
import React from "react"


export const Firstname =()=>{
const txt = "precious"
    return txt
}
export const Lastname =()=>{
const txt = "dappa"
    return txt
}

export const Intro =()=>{
const txt = "Hi I am Precious Dappa"
    return txt
}

export const About =()=>{
const txt =
  "I am an adapt Data Scientist,proficient in Machine Learaning, Deep Learaning, and Software Engineering for Data Science, with a track record of products and solutions in the industry and community.";
    return txt
}

export const aboutJson =()=>{
    const aJson = `<p>Hi, I’m Precious Dappa, Software Engineer currently based in Nigeria and I love what I do. In all my years as a Developer and Designer I've craved to reconnect with craftsmanship, to make well designed and efficent systems.</p>

<p>I started my career as a freelance designer where I built my fundamentals in the design space. Then I went on to do Frontend development with Angular and then Mobile development with Ionic framework. Right now I'm building Web2/3 applications with NodeJS and Solidity as a Backend and Smart Contract Engineer.</p>

<p>I'm currently exploring the Web3 space hoping to make a full switch. And on the side I'm also playing around with Golang</p>

<p>I'm thrilled by design and logic; and I solve problems for fun. When I'm not working I'm either playing badminton 🏸, whipping my friends on FIFA 🎮, sharing memes 🤡, doing some art work 🎨 or working out at the gym 🏋🏽‍♂️.</p>

<p>Because I'm a huge Angular fan ❤️ this site was built with Angular and without any CSS/animation libraries.</p>`;

    return aJson
}

export const Mystacks =()=>{
    const data =[{title:"data science", description:""},{title:"machine learning", description:""},{title:"software engineering", description:""},{title:"others", description:""}]

    return data
}

export const Stacks =()=>{
    const data = [
      {
        name: "flask",
        image:
          "https://assets.cdn.prod.twilio.com/original_images/flask-oauth.png",
      },
      {
        name: "nodejs",
        image:
          "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
      },
      {
        name: "express",
        image:
          "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
      },
      {
        name: "fastapi",
        image: "https://cdn.worldvectorlogo.com/logos/fastapi.svg",
      },
      {
        name: "sql",
        image:
          "https://db.cs.uni-tuebingen.de/teaching/ws2223/sql-is-a-programming-language/logo.svg",
      },
      {
        name: "python",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
      },
      {
        name: "javascript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "bash",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVHxDxpFx6R4N6v5Z2SCRkUzqVlFRKmak3BwW67Y45raKeMS5OEGi74xkwOceRRf52Qc&usqp=CAU",
      },
      {
        name: "mongodb",
        image:
          "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg",
      },
      {
        name: "postgresql",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
      },
      {
        name: "pandas",
        image:
          "https://www.cilans.net/wp-content/uploads/2019/12/Python-Pandas-logo.png",
      },
      {
        name: "numpy",
        image:
          "https://seeklogo.com/images/N/numpy-logo-479C24EC79-seeklogo.com.png",
      },
      {
        name: "matplotlb",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/1024px-Created_with_Matplotlib-logo.svg.png",
      },
    ];

    return data
}

export const Myfeatured =()=>{
    const data =[{title:"some dummy lorem ipsum", description:""},{title:"another dummy text", description:""},{title:"whaat lorem is", description:""},{title:"others", description:""}]

    return data
}

export const Social =()=>{
    const social = [
      { title: "twitter", link: "https:twitter.com/" },
      { title: "linkedin", link: "https:linkedin.com/" },
      { title: "github", link: "https:github.com/" },
      { title: "medium", link: "https:medium.com/" }
    ];

    return social
}

export const Pages =()=>{
    const data = [{name:"home", link:""},{name:"about", link:"about"},{name:"works", link:"works"}]

    return data
}


export const myFooter=()=>{
const data = {email:"useremail@gmail.com", social:Social() }
return data
}