import React from 'react'

export const About = () => {
  return (
    <div className='py-10'>
        <p className='text-5xl text-indigo-400 font-mono font-bold border-b-2 w-fit border-indigo-500'>About Me</p>
        <div className='flex gap-x-5 justify-center content-center '>
            <div className='text-white self-center font-bold gap-y-2 flex flex-col w-[70%]'>
                <p className='text-3xl'>Hi, Myself</p>
                <p className='text-5xl text-orange-300'>Ram Gore</p>
                <p className='text-xl'>I am <span className='text-blue-300 '>Web Developer / Front-End Developer</span> , </p>
                <p>I have completed graduation from <span className='text-yellow-400'>Bachelor's Of Technology</span>.</p>
                <p className='text-gray-400 text-md'>
                I am a skilled front-end developer with a strong background in creating user-friendly web applications. 
                Proficient in HTML, CSS, JavaScript, and librarys such as React, 
                I have passion for creating seamless user experiences. 
                I enjoy collaborating with cross-functional teams to bring innovative ideas to life and continuously strive to stay updated with the latest industry trends and technologies. 
                My goal is to deliver high-quality, responsive, and accessible web solutions that meet client needs and enhance user engagement.


                </p>
            </div>
            <div>
                <div className='w-[450px] '>
                    <img src='https://surajmgr-portfolio.netlify.app/assets/dummy.png'/>
                </div>
            </div>
        </div>
    </div>
  )
}
