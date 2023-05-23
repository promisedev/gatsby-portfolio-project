
import  React,{useState} from "react"
import Header from "./header"
import Footer from "./footer"
import { myFooter } from "../utils/metadata";
import {
  body
} from "./home.module.css";
const Layout =({children})=>{
const [modalOpen,setmodalOpen] = useState(false)
    return(
        <main className={body}>
        <Header modalOpen={modalOpen} setmodalOpen={setmodalOpen} />
        {children}
        <Footer data={myFooter()}/>
        </main>
    )
}

export default Layout