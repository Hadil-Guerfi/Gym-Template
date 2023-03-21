
import React, { useState,useEffect } from 'react'

function useOnscreen(ref,options) {

    const [isVisible,setIsVisible]=useState(false)

    useEffect(() => {

        //create intersection observer

        const observer = new IntersectionObserver(([entry])=>{
            //return true if the element targeting is showen
            setIsVisible(entry.isIntersecting)
            // console.log(options)
        },options)

        /* === à :
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
          }, options);*/

        const currentElement=ref?.current

        if(currentElement){
            observer.observe(currentElement)

        }
    
      return () => {
        observer.unobserve(currentElement)
      }
    })
    

    return isVisible
}

export default useOnscreen