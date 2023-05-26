import React ,{useRef,useEffect}from "react"
import {stack_body, stack_title,stack_items,stack_item,s_id,s_title,s_button,s_btn,pointer,h_id,h_title,h_btn,h_pa,stack_drop,drop_title,s_dp,n_dp} from "./styles/stack.module.css"
import { ArrowBackIos } from "@mui/icons-material"
import { IconButton } from "@mui/material"
const Stack =({name,data})=>{

const pointers = useRef(null)

const Animate=()=>{
 

window.addEventListener("scroll",()=>{

  const point = pointers.current   
const ref = Math.floor(point&&point.getBoundingClientRect().top)

const ref1 = point&&point.parentElement.children[1]
const ref2 = point&&point.parentElement.children[2]
const ref3 = point&&point.parentElement.children[3]
const ref4 = point&&point.parentElement.children[4]
// --------------------------------------
// -----------------------------------------
const po1 =Math.floor(ref1&&ref1.getBoundingClientRect().top)
const po2 =Math.floor(ref2&&ref2.getBoundingClientRect().top)
const po3 =Math.floor(ref3&&ref3.getBoundingClientRect().top)
const po4 =Math.floor(ref4&&ref4.getBoundingClientRect().top)

 
const r1 = ref


console.log(po1,po2,po3,po4, r1);
if(ref>=po1){
  ref1.classList.add(`${h_pa}`)
ref1.children[0].classList.add(`${h_id}`)
ref1.children[1].classList.add(`${h_title}`)
ref1.children[2].classList.add(`${h_btn}`)
//console.log("gat you")
}else if(ref<po1){
  ref1.classList.remove(`${h_pa}`)
ref1.children[0].classList.remove(`${h_id}`)
ref1.children[1].classList.remove(`${h_title}`)
ref1.children[2].classList.remove(`${h_btn}`)
//console.log("gat you")
}
// -------------------------------------------

if (ref >= po2) {
  ref2.classList.add(`${h_pa}`);
  ref2.children[0].classList.add(`${h_id}`);
  ref2.children[1].classList.add(`${h_title}`);
  ref2.children[2].classList.add(`${h_btn}`);
  //console.log("gat you")
} else if (ref < po2) {
  ref2.classList.remove(`${h_pa}`);
  ref2.children[0].classList.remove(`${h_id}`);
  ref2.children[1].classList.remove(`${h_title}`);
  ref2.children[2].classList.remove(`${h_btn}`);
  //console.log("gat you")
}
// -----------------------------------------------------

if (ref >= po3) {
  ref3.classList.add(`${h_pa}`);
  ref3.children[0].classList.add(`${h_id}`);
  ref3.children[1].classList.add(`${h_title}`);
  ref3.children[2].classList.add(`${h_btn}`);
  //console.log("gat you")
} else if (ref < po3) {
  ref3.classList.remove(`${h_pa}`);
  ref3.children[0].classList.remove(`${h_id}`);
  ref3.children[1].classList.remove(`${h_title}`);
  ref3.children[2].classList.remove(`${h_btn}`);
  //console.log("gat you")
}
// ------------------------------------------------
if (ref >= po4) {
  ref4.classList.add(`${h_pa}`)
  ref4.children[0].classList.add(`${h_id}`);
  ref4.children[1].classList.add(`${h_title}`);
  ref4.children[2].classList.add(`${h_btn}`);
  //console.log("gat you")
} else if (ref < po4) {
  ref4.classList.remove(`${h_pa}`)
  ref4.children[0].classList.remove(`${h_id}`);
  ref4.children[1].classList.remove(`${h_title}`);
  ref4.children[2].classList.remove(`${h_btn}`);
  //console.log("gat you")
}

});
}
 
useEffect(()=>{
  Animate()
//window.removeEventListener('scroll',Animate())

},[])

const drop=(e)=>{
const all = e.currentTarget.parentElement.parentElement.parentElement.children;
const ele = e.currentTarget.parentElement.parentElement.children[3];
const num = all.length
for(let x =1; x< num ;x++){
  const element = all[x].children[3]

if( element == ele ){
  element.classList.toggle(`${s_dp}`)
}
else {
  element.classList.remove(`${s_dp}`)
}

  
}

// const ele = e.currentTarget.parentElement.parentElement.children[3];
// // console.log(ele)
// ele.classList.toggle(`${s_dp}`)
}
    return (
      <section className={stack_body}>
        <article className={stack_title}> 
          <span>~/</span>
          <h2>{name}</h2>
        </article>
        <article className={stack_items}>
          <div className={pointer} ref={pointers}></div>
          {data?.map((stack, index) => (
            <article className={stack_item}>
              <div className={s_id}>{index + 1}</div>
              <h4 className={s_title}>{stack.title}</h4>
              <div className={s_button}>
               <IconButton onClick={drop}> <ArrowBackIos style={{ fontSize: "15px" }} className={s_btn}  /></IconButton>
              </div >
              <div className={stack_drop}><p className={drop_title}>{stack.description}</p></div>
            </article>
          ))}
        </article>
      </section>
    );
}

export default Stack