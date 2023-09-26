import React, { useEffect, useRef, useState } from 'react'
import netflixIcon from 'C:/Users/Huawei/Desktop/netflix-mainpage-clone/src/assets/netflix (2).png';
import {LuLanguages} from 'react-icons/lu';
import {BsCaretDown} from 'react-icons/bs';
import {VscError} from 'react-icons/vsc';

export const Header = () => {
  const [holderMove, setHolderMove] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const emailRef = useRef(null);
  
  const emailClicked = () => {
    if (!(emailRef.current.value.length > 0)) {
        setHolderMove(!holderMove);
    }
  }

  const handleClickOutside = (event) => {
    if(
        emailRef.current && 
        !emailRef.current.contains(event.target) &&
        !(emailRef.current.value.length > 0)
    ) {
        setHolderMove(false);
    }
  };

  const checkEmailLength = () => {
    if (!(emailRef.current.value.length > 0)) {
        setIsEmpty(!isEmpty);
    } else {
        setIsEmpty(false);
    }
  }

  const handleEmailChange = () => {
    isValidEmail();
    checkEmailLength();
  }

  const isValidEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const checkValid = emailRegex.test(emailRef.current.value);
    setIsValid(checkValid); 
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
        document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])


  return (
    <>
    <div className="flex space-x-8 justify-center" id="top-header">
        <div className="flex justify-between z-[2] ml-1" id="items-container">
            <div className="
            object-cover relative sm:left-3 lg:left-2 
            lg:top-3 mr-[10rem] sm:mr-[15rem] md:mr-[25rem] lg:mr-[37rem]
            lg:mt-[-2.5rem] xl:mr-[35rem] 2xl:mr-[55rem] 2xl:top-5" id="icon">
                <img src={netflixIcon} className='w-[5.5rem] h-[5.5rem] lg:w-[10rem] lg:h-[9rem]'/>
            </div>
            
            <div className='flex flex-row lg:ml-2' id='top-right'>
                <div className="mt-[-.2rem] sm:p-[.7rem]" id="lang-picker">
                    <LuLanguages size={17} className='text-white relative top-[2.4rem] sm:top-[1.6rem] left-2'/>
                    <BsCaretDown className='sm:hidden relative top-6 left-12 text-white' size={13}/>
                    <select name="Langselect" id="languages" 
                    className='
                    w-[4.2rem] sm:w-[8rem] h-[2rem] sm:p-[.1rem]
                    rounded-md justify-between text-center bg-[#141414]
                    border-[1px] border-[grey] border-solid bg-opacity-70
                    text-[0px] font-semibold sm:text-white sm:text-[15px]
                    focus:border-[2px] focus:border-white focus:border-solid'>
                        <option lang='tr' className='bg-white text-[15px]'>Türkçe</option>
                        <option selected lang='en' className='bg-white text-[15px]'>English</option>
                    </select>
                </div>
                <div className="p-[1.7rem] md:p-[1.65rem]" id="sign-btn">
                    <button type='submit'
                    className='
                    text-white bg-red-700 rounded-md p-[.4rem] lg:ml-[-1.6rem]
                    px-[.9rem] font-arial font-semibold'>Sign in</button>
                </div>
            </div>
        </div>
    </div>
    <div className="" id="bot-header">
        <div className="mt-[-5.6rem] sm:mt-[-13rem] lg:mt-[-15rem] 2xl:mt-[-25rem] m-auto" id="background-img">
            <picture >
            <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/58fd707b-dc9a-464a-a10d-b2874adb2b2e/TR-en-20230918-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            className='
            object-cover z-[-2] w-[40rem] sm:w-[60rem] md:w-[65rem] lg:w-[81rem]
            xl:w-[95rem] 2xl:w-[110rem] h-[30rem] sm:h-[40rem] lg:h-[51rem]
            2xl:h-[60rem] flex brightness-[38%] m-auto'/>
            </picture>
        </div>
        <div 
        className="
        flex flex-col text-center z-[3] relative mt-[-24rem] lg:mt-[-26rem]
        left-[-.2rem] sm:left-[-.1rem] space-y-4 m-auto w-[28.2rem]
        sm:w-[36.5rem] md:w-[40rem] lg:w-[58.6rem]" id="content">
            <h1 className='font-bold text-white text-[2rem] lg:text-[3.2rem]'>Unlimited movies, TV shows, and more</h1>
            <h4 className='text-white text-[18px] lg:text-[26px] relative top-[-1rem]'>Watch anywhere. Cancel anytime</h4>
            <div className="" id="bottom-content">
                <div className="space-y-4 relative left-0 m-auto w-[25rem] sm:w-[33rem] md:w-[38rem] lg:w-[55rem]" id="input-table">
                    <h4 className='text-white text-[18px] lg:text-[22px]'>Ready to watch? Enter your email to create or restart your membership.</h4>
                    <div className="flex flex-col sm:flex-row lg:justify-center md:pt-2 2xl:pt-2" id='email&button'>
                        <input ref={emailRef} onChange={handleEmailChange} onFocus={emailClicked} type="text"
                        className={`
                        bg-[#141414] border-[1px] border-[grey] border-solid pt-1
                        bg-opacity-70 rounded-[6px] w-[25rem] h-[3rem] sm:h-[3.5rem] pl-3
                        sm:w-[18.5rem] md:w-[24rem] focus:border-[2px] focus:border-white
                        focus:border-solid text-white lg:pl-4 
                        ${isValid ? 'border-green-500' : isEmpty ? 'border-red-600' : 'border-[grey]'}`}/> 
                        <h3
                        className={`
                        absolute text-[#c1c1c1] m-auto top-[4.4rem] left-4
                        sm:top-[4.7rem] md:top-[3.9rem] lg:top-[4.2rem] lg:left-[9.5rem]
                        ${holderMove ? 'translate-y-[-.9rem] translate-x-[-.2rem] text-sm' : null}`} id='placeholder'>
                        Email address
                        </h3>

                        {isEmpty && emailClicked ? (
                            <h4
                            className='
                            text-red-700 top-[6.5rem] sm:top-[7.1rem] md:top-[6.4rem] lg:left-[8.3rem]
                            lg:top-[6.6rem] sm:w-[15rem] absolute font-semibold text-sm flex flex-row
                            m-auto'>
                            <VscError size={20} className='mt-[0.05rem] mr-1'/> Email is required.</h4>
                        ) : null}

                        {!isValid && emailRef.current?.value.length > 0 && (
                            <h4 className='text-red-700 top-[6.5rem] sm:top-[7.1rem] md:top-[6.4rem] lg:left-[8.3rem]
                            lg:top-[6.6rem] sm:w-[18.5rem] absolute font-semibold text-sm flex flex-row
                            m-auto'><VscError size={20} className='mt-[0.05rem] mr-1'/>Please enter a valid email address.</h4>
                        )}

                        <button type='submit'
                        className='
                        text-white text-lg sm:text-[1.6rem] font-semibold bg-red-700
                        w-[10rem] sm:w-[14rem] h-[3rem] sm:h-[3.5rem] ml-[7.2rem]
                        sm:ml-[0.5rem] mt-5 sm:mt-0 rounded-md'>
                        Get started
                        <span className='opacity-0'>...</span>{'>'}
                        </button>

                    </div>     
                </div>
            </div>
        </div>
    </div>
        
    </>
   )
}
