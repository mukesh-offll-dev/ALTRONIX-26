import React from 'react'
import tCardFront from './../assets/t_frontcard.png'
import tCardBack from './../assets/t_back.png'
import ntCardFront from './../assets/nt_frontcard.png'
import ntCardBack from './../assets/nt_back.png'

import './../App.css'
import { useNavigate } from 'react-router-dom'

const CardFrontSide = ({event}) => {   
  const navigate = useNavigate();
  return (
    <div className='w-full h-full flex justify-center items-center cursor-pointer'>
        <div className='card-container' onClick={()=>navigate('/events/presentation')}>
            <div className='card mx-5'>
                <img className='card-face card-front' src={ event === "technical" ? tCardFront : ntCardFront} alt="" />
                <img className='card-face card-back' src={ event === "technical" ? tCardBack : ntCardBack} alt="" />   
            </div>
        </div>

    </div>
  )
}

export default CardFrontSide