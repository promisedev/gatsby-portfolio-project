import React, { useEffect,useRef } from "react";
import Modal from "./modal";
import Menu from "./menu";
import { StaticImage } from "gatsby-plugin-image";
import { nav, nav_logo, nav_logo_cont, nav_menu,float_nav } from "./home.module.css";
const Header =({ modalOpen, setmodalOpen })=> {
  
  const mynav = useRef(null)
 const floatNav = ()=>{
window.addEventListener("scroll",()=>{
  const navi = mynav.current
  const position = Math.abs(Math.floor(navi&&navi.getBoundingClientRect().top))
  const num = Number(`199`)
  console.log(position,num)
   
//    if(position > num){
// navi.classList.add(`${float_nav}`)
//   }


}) 
 }

 useEffect(()=>{
floatNav()

 },[])

  return (
    <>
      {modalOpen && <Modal modalOpen={modalOpen} setmodalOpen={setmodalOpen} />}
      <div className={nav} ref={mynav}>
        <div className={nav_logo_cont}>
          <StaticImage
            src="../assets/logo.png"
            alt="logo"
            className={nav_logo}
            placeholder="NONE"
            width={600}
          />
        </div>
        {/* ---------------------------menu */}
        <div className={nav_menu}>
          <Menu modalOpen={modalOpen} setmodalOpen={setmodalOpen} />
        </div>
      </div>
    </>
  )
}

export default Header
