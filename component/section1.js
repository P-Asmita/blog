import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Author from './_child/author'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper'
import fetcher from '../lib/fetcher'
import spinner from './_child/spinner'


export default function section1(){
    const{data, isLoading, isError}=fetcher('api/posts')
    if(isLoading) return <spinner></spinner>
    if(isError) return <div>Error</div>
    SwiperCore.use([Autoplay])
    return(
        <section className="py-16">
            <div className='container mx-auto md:px-20'>
                <h1 className='font-bold text-4xl pd-12 text-center'>Trending</h1>

    <Swiper slidesPerView={1} autoplay={{ delay:3000 }}>
    {
        data.map((value,index)=>(
            <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
        ))
    }

    </Swiper>

            </div>
        </section>
    )
}

function Slide({data}){
    const {id,title, category,img,published,subtitle,author}=data;
    return(
        <div className='grid md:grid-cols-2' id="trending_page">
            <div className='image'>
                <Link href={`/posts/${id}`} legacyBehavior><a><Image src={img} width={400} height={400}/></a></Link>
            </div>
            <div className='info flex justify-center flex-col'>
                <div className='cat'>
                    <Link href={`/posts/${id}`} legacyBehavior><a className='text-orange-600 hover:text-orange-800'>{category}</a></Link>
                    <Link href={`/posts/${id}`} legacyBehavior><a className='text-gray-600 hover:text-gray-800'>{published}</a></Link>
                </div>
                <div className='title'>
                    <Link href={`/posts/${id}`} legacyBehavior><a className='text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>{title}</a></Link>
                </div>
                <p className='text-gray-500 py-3'>{subtitle}
                </p>
                <Author></Author>
            </div>
        </div>
    )
}