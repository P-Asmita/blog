import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Author from './_child/author'
import fetcher from '../lib/fetcher'
import spinner from './_child/spinner'

export default function section2(){
    const{data, isLoading, isError}=fetcher('api/posts')
    if(isLoading) return <spinner></spinner>
    if(isError) return <div>Error</div>
    return(
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='font-bold text-4xl py-12 text-center'>Posts</h1>

            {/*grid columns*/}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                data.map((value,index)=>(
                    <Post data={value} key={index}></Post>
                ))
            }
            </div>
        </section>
    )
}

function Post({data}){
    const {id,title, category,img,published,subtitle,author}=data;
    return(
        <div className='item'>
            <div className='images'>
                <Link href={`/posts/${id}`} legacyBehavior><a><Image src={img} className="rounded" width={350} height={300}/></a></Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
            <div className='cat'>
                    <Link href={`/posts/${id}`} legacyBehavior><a className='text-orange-600 hover:text-orange-800'>{category}</a></Link>
                    <Link href={`/posts/${id}`} legacyBehavior><a className='text-gray-600 hover:text-gray-800'>{published}</a></Link>
                </div>
                <div className='title'>
                    <Link href={`/posts/${id}`} legacyBehavior><a className='md: font-bold text-gray-800 hover:text-gray-600'>{title}</a></Link>
                </div>
                <p className='text-gray-500 py-3'>{subtitle}
                </p>
                {author? <Author></Author>: <></>}
            </div>
        </div>
    )
}