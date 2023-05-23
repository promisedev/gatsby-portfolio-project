import React ,{useEffect,useRef}from "react"
import {
  menu,
  menu_bar1,
  menu_bar2,
  menu_bar3, 
  show_menu, 
  r_menu_bar1,
  r_menu_bar2,
  r_menu_bar3,
} from "./styles/menu.module.css";
import Modal from './modal'
const Menu = ({ modalOpen, setmodalOpen }) => {

  const openModal = (e) => {
    setmodalOpen(!modalOpen);
e.currentTarget.classList.toggle(`${show_menu}`)
e.currentTarget.children[0].classList.toggle(`${r_menu_bar1}`)
e.currentTarget.children[1].classList.toggle(`${r_menu_bar2}`)
e.currentTarget.children[2].classList.toggle(`${r_menu_bar3}`)

  };
const bar1 = useRef(null)
const bar2 = useRef(null)
const bar3 = useRef(null)

 const closeModal=()=>{
    window.addEventListener("scroll",()=>{
setmodalOpen(false)
const b1 = bar1.current
const b2 = bar2.current
const b3 = bar3.current
b1&&b1.classList.remove(`${r_menu_bar1}`)
b2&&b2.classList.remove(`${r_menu_bar2}`)
b3&&b3.classList.remove(`${r_menu_bar3}`);

    })
  }

  useEffect(()=>{
closeModal()
  },[]) 

  return (
    <div className={menu} onClick={openModal}>
      <span className={menu_bar1} ref={bar1}></span>
      <span className={menu_bar2} ref={bar2}></span>
      <span className={menu_bar3} ref={bar3}></span>
      
    </div>
  );
}

export default Menu