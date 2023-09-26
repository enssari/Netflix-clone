import React from 'react'
import {LuLanguages} from 'react-icons/lu';

export const Footer = () => {
  return (
    <div className="bg-black flex justify-center mt-2 pb-8" id='container-wrapper'>
        <div className="flex text-start flex-col w-[27.5rem] lg:w-[60rem] xl:w-[70rem] 2xl:w-[80rem] p-2" id="item-container">
            <h1 className='text-[#c0bfbf] underline text-[16px]'>Questions? Contact us.</h1>
            <div className="" id="links-wrapper">
                <ul 
                className='
                list-none space-y-4 lg:space-y-2 grid grid-cols-2 lg:grid-cols-4 xl:space-y-4 text-[#c0bfbf]
                underline text-[14.5px]'>
                    <li className='mt-4'>FAQ</li>
                    <li className='hover:cursor-pointer'>Account</li>
                    <li className='hover:cursor-pointer'>Investor Relations</li>
                    <li className='hover:cursor-pointer'>Redeem Gift Cards</li>
                    <li className='hover:cursor-pointer'>Terms of Use</li>
                    <li className='hover:cursor-pointer'>Cookie preferences</li>
                    <li className='hover:cursor-pointer'>Contact Us</li>
                    <li className='hover:cursor-pointer'>Legal notices</li>
                    <li className='hover:cursor-pointer'>Help center</li>
                    <li className='hover:cursor-pointer'>Media Center</li>
                    <li className='hover:cursor-pointer'>Jobs</li>
                    <li className='hover:cursor-pointer'>Ways to Watch</li>
                    <li className='hover:cursor-pointer'>Privacy</li>
                    <li className='hover:cursor-pointer'>Corporate Information</li>
                    <li className='hover:cursor-pointer'>Speed Test</li>
                    <li className='hover:cursor-pointer'>Only on Netflix</li>
                </ul>
            <div className="flex ml-[-1rem] mt-6" id="lang-selector">
                <LuLanguages className='text-white relative left-7 top-2'/>
                <select name="Langselect" id="languages" 
                className='
                w-[8rem] h-[2rem] focus:border-[2px] focus:border-white
                rounded-[4px] justify-between text-end pr-3 bg-[#141414]
                border-[1px] border-[grey] border-solid bg-opacity-70
                font-semibold text-white 
                focus:border-solid'>
                    <option lang='tr' className='bg-white text-[15px]'>Türkçe</option>
                    <option selected lang='en' className='bg-white text-[15px]'>English</option>
                </select>
            </div>  
            <h4 className='text-[#b2b1b1] mt-5 text-[15px]'>Netflix Turkey</h4>
            </div>
        </div>
    </div>
  )
}
