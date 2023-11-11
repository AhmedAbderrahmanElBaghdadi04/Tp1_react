import React, { useState,useRef } from 'react'
import {motion} from 'framer-motion'
import imgs from './imgs'
import './Carousel.css'

export default function Slider() {
  const carouselRef = useRef();
  const [width,setWidth] = useState

  return (
    <div>
      
      <motion.div className='carousel'>
        <motion.div drag='x' dragConstraints={{right:0}} className='inner_carousel'>
          {imgs.map((image)=>(
            <motion.div className='item' ><img src={image} alt="car" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}



