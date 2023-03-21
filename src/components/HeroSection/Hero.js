import React from 'react'
import Header from "../Header/Header"
import "./Hero.css"
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from '../../assets/heart.png';
import Calories from "../../assets/calories.png"
import Figure from '../Figures/Figure';
import { useEffect ,useState} from 'react';

function Hero() {

  const [disableAnimation, setDisableAnimation] = useState("")


      const handleAnimation=()=>{
        setDisableAnimation("disable-animation")
      }

  useEffect(()=>{

    setTimeout(() => {
      handleAnimation()
    },3000);
   
   
  },[])

 
  return (

    <div className='hero'>
            
            {/*Start left-h*/}

            <div className='left-h'>

                <Header/>

                <div className='blur hero-blur'></div>

                {/*Start the best add*/}
                <div className='the-best-ad'>
                  <div></div>
                  <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>
                {/*End the best add*/}

                {/*Start Hero Landing*/}
                <div className='hero-text'>

                  <div>
                    <span className='stoke-text'>shape </span>
                    <span>your</span>
                  </div>

                  <div>ideal body</div>

                  <div>In here we will help you to shape and build your ideal body and live up your life to fullest </div>

                </div>
                {/*End Hero Landing*/}

                {/*Start Figures*/}

                  <Figure/>
                {/*End Figures*/}

                {/*Start Hero Buttons*/}

                <div className='hero-buttons'>

                <button type='text'>Get Started</button>
                
                <button type='text'>Learn More</button>

                </div>

                {/*End Hero Buttons*/}

                <div className='calories-burned'>
                  <img src={Calories}/>
                  <div className='calories-text'>
                    <div>Calories burned</div>
                    <span>220 kcal</span>
                  </div>
                </div>
            

            </div>

            {/*End left-h*/}



            {/*Start right-h*/}
            <div className='right-h'>

                <button><a href='#Join_Now'>Join Now</a></button>

                <div className='hero_img'>
                  <img src={hero_image}/>
                </div>

                <div className='heart-rate'>
                  <img src={Heart}/>
                  <div>Heart Rate</div>
                  <span>116 bmp</span>
                </div>

                <img className={`back_hero_img ${disableAnimation}`} src={hero_image_back}/>

          
            {/*End right-h*/}      
            </div>

    </div>

  )
}

export default Hero