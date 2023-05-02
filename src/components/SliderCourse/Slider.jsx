'use client'
import React from 'react'
// import './Slider.css'
// import {Swiper , SwiperSlider } from "swiper/react"
// import 'swiper/css'
// import 'swiper/css/effect-coverflow'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
import Link from "next/link";

// import { EffectCoverflow , Pagination , Navigation } from 'swiper'
const Slider = () => {
  return (
    <div className='flex justify-center'>
      <Link href='/Home' className='py-4 px-8 bg-indigo-600 hover:bg-indigo-800 rounded-md'>Visitanos</Link>
    </div>
  )
}

export default Slider