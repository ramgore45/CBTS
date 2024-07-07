import React from 'react'
import { FaDownload } from 'react-icons/fa'
import  resume  from '../Resume/resume.pdf'
import { SlSocialInstagram } from 'react-icons/sl'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'

const icons = [
    {
        icon: <TiSocialFacebook  className='self-center'/>
    },
    {
        icon: <TiSocialTwitter  className='self-center'/>
    },
    {
        icon: <TiSocialLinkedin  className='self-center'/>
    },
    {
        icon: <SlSocialInstagram  className='self-center'/>
    },
]

export const Home = () => {
  return (
    <div className='pt-5 pb-5'>
        <div className='flex justify-center w-[950px] mx-auto my-10 content-center'>
            <div className='text-white self-center font-bold gap-y-3 flex flex-col w-[70%]'>
                <p className='text-3xl'>Hi, Myself</p>
                <p className='text-6xl text-orange-500'>Ram Gore</p>
                <p className='text-3xl'>I am <span className='text-blue-500 '>Web Developer</span></p>
                <p className='text-gray-200'>
                Seeking a challenging position in a reputed organization to expand and utilize my
                learning, skills and knowledge. Flexible to work in any environment as required.
                </p>
                <div className='text-green-500 text-xl'>
                    Connect me 
                </div>
                <div className='flex gap-x-5 text-blue-600 mt-1'>
                    {
                        icons.map((item)=>(
                            <p key={item.index} className='h-8 w-8 rounded-full border border-blue-600 flex justify-center hover:bg-blue-600 hover:text-white hover:border:white'>
                                    {item.icon}
                            </p>
                        ))
                    }
                </div>
                <div>
                    
                        <button className='text-yellow-500 font-medium bg-transparent border border-yellow-500 hover:bg-yellow-500 rounded-lg p-2 hover:border-white hover:text-white hover:scale-105 '>
                            <a href={resume} download="Ram_Gore_Resume.pdf" className='flex gap-x-2 '>
                                Download Resume <FaDownload className='self-center'/> 
                            </a>
                        </button>
                   
                </div>
            </div>
            <div className='w-[500px] '>
                <img src='https://surajmgr-portfolio.netlify.app/assets/dummy.png'/>
            </div>
        </div>
    </div>
  )
}
