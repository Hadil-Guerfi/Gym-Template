import React, { useState } from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"
import bars from"../../assets/bars.png"
import useWindowSize from '../../hooks/useWindowSize'
import { useEffect } from 'react'

function Header() {


    const [navClass,setNavClass]=useState("closed")

    const [burger_class,setBurgerClass]=useState(undefined)
    
    const [isMobile, setIsMobile] = useState(window.innerWidth);

    const [largeUnclicked, setLargeUnclicked] = useState("")
    
    const handleClickBurger=()=>{
        if(burger_class===undefined){
            setBurgerClass("clicked")
            setNavClass("opened")

        }
        
         if(burger_class==="clicked"){
            setBurgerClass("unclicked")
            setNavClass("closed")     
            setLargeUnclicked("")

            }
        
        if(burger_class==="unclicked"){
            setBurgerClass("clicked")
            setNavClass("opened")
        }         
    }
   

    useEffect(() => {
        
        const handleSize=()=>{
                        
            setIsMobile(window.innerWidth);

            if(isMobile>768){
                setNavClass("Hidden")
                setBurgerClass("unclicked")
                setLargeUnclicked("from-large-unclicked")
            }
        }
        window.addEventListener("resize",handleSize)

        return () => {
            window.removeEventListener("resize",handleSize)
        }

        }, [isMobile])
    
        useEffect(() => {
            setNavClass("Hidden")
          
        }, [])
        

    
    return(
    <div className='header'>

        <div className='logo'>
            <img src={logo}/>
        </div>

        {isMobile<=768 &&
            <div className='burger-menu' onClick={handleClickBurger}>
                <div className={`${burger_class} ${largeUnclicked}`} ></div>
                <div className={`${burger_class} ${largeUnclicked}`} ></div>
                <div className={`${burger_class} ${largeUnclicked}`}></div>
            </div>
            
        }

        <nav className={navClass}>
            <ul >
                <li><a>Home</a></li>
                <li><a>Programs</a></li>
                <li><a>Why Us</a></li>
                <li><a>Plans</a></li>
                <li><a>Testimonials</a></li>
            </ul>
        </nav>
      

    </div>
    )
}

export default Header