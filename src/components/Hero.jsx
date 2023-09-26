import React, { useState, useRef, useEffect } from 'react'
import tvVideo from '../assets/netflixvideo.m4v';
import mobilePhoto from '../assets/strangerThings.jpg';
import mobilePhoto2 from '../assets/boxshot.png';
import {MdDownloading} from 'react-icons/md';
import monitorPhoto from '../assets/device-pile.png';
import netflixKids from '../assets/netflixkids.png';
import {AiOutlinePlus} from 'react-icons/ai';
import {LiaTimesSolid} from 'react-icons/lia';
import { VscError } from 'react-icons/vsc';

const Hero = () => {
    const [b1clicked, setB1Clicked] = useState(false);
    const [b2clicked, setB2Clicked] = useState(false);
    const [b3clicked, setB3Clicked] = useState(false);
    const [b4clicked, setB4Clicked] = useState(false);
    const [b5clicked, setB5Clicked] = useState(false);
    const [b6clicked, setB6Clicked] = useState(false);
    const [holderMove, setHolderMove] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const emailRef = useRef(null);

    const toggleB1 = () => {
        setB1Clicked(!b1clicked);
    }
    const toggleB2 = () => {
        setB2Clicked(!b2clicked);
    }
    const toggleB3 = () => {
        setB3Clicked(!b3clicked);
    }
    const toggleB4 = () => {
        setB4Clicked(!b4clicked);
    }
    const toggleB5 = () => {
        setB5Clicked(!b5clicked);
    }
    const toggleB6 = () => {
        setB6Clicked(!b6clicked);
    }

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
    <div className="sm:mt-[7rem] md:mt-[10rem] lg:mt-[8rem] 2xl:mt-[8rem] space-y-2" id="tables-wrapper">
    <div 
    className="
    justify-center flex bg-black mt-[3.3rem]
    h-[35rem] sm:h-[40rem] md:h-[45rem] lg:h-[31rem]
    2xl:h-[37.5rem] m-auto" 
    id="first-table">
        <div 
        className="
        flex flex-col m-auto w-[27rem] sm:w-[36rem] md:w-[45rem] space-y-6
        mt-[8.5rem] sm:mt-[7.5rem] md:mt-[8.2rem] lg:mt-[1.5rem] 2xl:mt-[4rem] 
        lg:w-[61rem] 2xl:w-[80rem]" 
        id="item-container-1">
            <div className="text-center lg:text-start mt-[-5rem] lg:mt-[0rem] lg:flex lg:flex-row" id="content-1">
                <div className="lg:flex-col lg:mt-[0rem] lg:ml-[1rem]" id="text-container-1">
                    <h1 
                    className='
                    font-bold text-white text-[32px] sm:text-[34px] md:text-[32px] lg:text-[48px]
                    lg:mt-[6rem] 2xl:mt-[11rem]'>Enjoy on your TV</h1>
                    <p className='text-white text-[18px] sm:text-[20px] md:text-[18.5px] lg:text-[24px]'>
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </p>
                </div>

                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                className='
                md:ml-[2.5rem] lg:mt-[0rem] lg:w-[32rem] 2xl:w-[39.4rem]
                '/>  
                
                <video 
                    src={tvVideo}
                    autoPlay loop
                    playsInline muted
                    className='
                    w-[19.8rem] sm:w-[26rem] md:w-[29rem] lg:w-[23rem] 2xl:w-[29rem] h-auto mt-[-16rem]  
                    sm:mt-[-21.3rem] md:mt-[-23.7rem] lg:mt-[5.1rem] 2xl:mt-[6rem] ml-[3.5rem] sm:ml-[4.8rem] md:ml-[7.8rem]
                    lg:ml-[33.4rem] 2xl:ml-[45.5rem] absolute'>
                </video> 
                
            </div>
        </div>
    </div>

    <div 
    className="
    justify-center flex bg-black mt-[.7rem] h-[35rem] sm:h-[40rem]
    md:h-[45rem] lg:h-[31rem] 2xl:h-[37.5rem] m-auto" 
    id="second-table">
        <div
        className="
        flex flex-col space-y-6 m-auto w-[27rem] sm:w-[36rem] md:w-[45rem]  
        lg:w-[61rem] 2xl:w-[80rem] sm:mt-[2rem] md:mt-[3.2rem] 2xl:mt-[4rem]" 
        id="item-container-2">
            <div 
            className="
            text-center md:pb-7 lg:pb-0 lg:flex lg:flex-row-reverse lg:h-[22rem]
            2xl:h-[29rem] lg:ml-[0rem]" id="content-2">
                <div 
                className="
                lg:text-start lg:flex-col w-[27rem] sm:w-[36rem] md:w-[45rem]
                lg:w-[30.9rem] 2xl:w-[40rem] lg:absolute" 
                id="text-container-2">
                    <h1 
                    className='
                    text-white font-bold text-[32px] sm:text-[34px] md:text-[32px] lg:text-[48px]
                    2xl:mt-[8rem]'>
                    Download your shows to watch offline
                    </h1>

                    <p 
                    className='
                    text-white text-[18px] sm:text-[20px] md:text-[18.5px] lg:text-[24px]'>
                    Save your favorites easily and always have something to watch.
                    </p>
                </div>
                

                <img src={mobilePhoto} 
                className='
                relative md:ml-[2.5rem] md:mt-6 lg:mt-0 lg:w-[30rem] 2xl:w-[50rem] lg:mr-[31rem]
                2xl:mr-[40rem]'/>

                <div 
                className="
                flex flex-row border-2 rounded-lg border-[#5b5b5b] 2xl:w-[22rem]
                border-solid w-[18rem] relative m-auto mt-[-6rem] 2xl:p-7
                left-[0rem] lg:left-[27rem] 2xl:left-[32.2rem] space-x-14 py-2
                bg-black sm:mt-[-7rem] lg:mt-[14rem] 2xl:mt-[20.5rem] lg:p-6 sm:w-[26rem]
                sm:p-2 lg:px-9 2xl:px-[2.5rem] lg:w-[19rem]" 
                id="downloading-table">
                    <div className="ml-[-.5rem] relative left-5 lg:top-[0.7rem] 2xl:top-[.3rem] lg:absolute" id="img">
                        <img src={mobilePhoto2} className='object-cover w-[2.2rem] sm:w-[3rem] lg:w-[3rem] 2xl:w-[3.7rem]'/>
                    </div>
                    
                    <div 
                    className="
                    text-start space-y-1 relative top-1 left-[-1.2rem] sm:left-[-1rem] lg:left-[-1rem]
                    2xl:left-[-.5rem] " 
                    id="mid-text">
                        <h4 
                        className='
                        text-white font-bold text-sm sm:text-[16px] lg:text-[15px] 2xl:text-[17px]
                        sm:mt-2 lg:mt-[-.1rem]'>
                            Stranger Things
                        </h4>
                        <h4 
                        className='
                        text-[#008cff] text-[12px] sm:text-[14px] lg:text-[14px] pr-[4.5rem] sm:pr-[10rem] lg:pr-[5rem]
                        '>
                            Downloading...
                        </h4>
                    </div>
                    
                    <div
                    className="
                    absolute left-[10rem] sm:left-[18rem] lg:left-[12rem] 2xl:left-[12rem] top-[.7rem] sm:top-[1.1rem]
                    lg:top-[1.4rem] 2xl:top-[1.8rem]" 
                    id="download-gif">
                        <img 
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                        className='
                        w-[3rem] h-[3rem]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div
    className="
    justify-center flex bg-black mt-[.7rem] h-[35rem] sm:h-[40rem]
    md:h-[45rem] lg:h-[31rem] 2xl:h-[37.5rem] m-auto" 
    id="third-table">
        <div 
        className="
        flex flex-col space-y-6 m-auto w-[27rem] sm:w-[36rem] md:w-[45rem]  
        lg:w-[61rem] 2xl:w-[80rem] mt-[4rem] sm:mt-[3rem] lg:mt-[4.5rem]
        2xl:mt-[3.5rem]" 
        id='item-container-3'>
            <div className="text-center md:pb-0 lg:flex lg:flex-row" id="content-3">
                <div className="mt-[-1.3rem] lg:m-0 2xl:text-start" id="text-conteiner-3">
                    <h1 
                    className='
                    text-white font-bold text-[32px] sm:text-[34px] md:text-[32px]
                    lg:text-[48px] lg:mt-[5rem] 2xl:mt-[10rem]'>Watch everywhere</h1>
                    <p 
                    className='
                    text-white text-[18px] sm:text-[20px] md:text-[18px]
                    lg:text-[24px] mt-[-.5rem] pb-3'>
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                    </p>
                </div>
                
                <img src={monitorPhoto} className='md:ml-[2.5rem] md:mt-6 lg:m-0 lg:w-[30rem] 2xl:w-[40rem]'/>
            </div>
        </div>
    </div>
    
    <div
    className="
    justify-center m-auto flex bg-black mt-[.7rem] h-[35rem] sm:h-[40rem]
    md:h-[45rem] lg:h-[31rem] 2xl:h-[37.5rem]"
    id="fourth-table">
        <div 
        className="
        flex flex-col m-auto space-y-6 w-[27rem] sm:w-[40rem] md:w-[45rem] 
        lg:w-[61rem] 2xl:w-[80rem] mt-[2rem] sm:mt-[0rem] lg:mt-[4.5rem]
        2xl:mt-[3.6rem]" 
        id="item-container-4">
            <div className="text-center lg:flex lg:flex-row-reverse" id="content-4">
                <div className="lg:text-start lg:flex lg:flex-col" id="text-container-4">
                    <h1
                    className='
                    text-white font-bold text-[32px] sm:text-[34px] md:text-[32px]
                    lg:text-[48px] 2xl:mt-[10rem]'>
                    Create profiles for kids
                    </h1>
                    <p
                    className='
                    text-white text-[18px] sm:text-[20px] md:text-[18px]
                    lg:text-[24px] mb-6'>
                    Send kids on adventures with their favorite characters
                    in a space made just for them—free with your membership.
                    </p>
                </div>
                 
                <img src={netflixKids} className='md:ml-[2.5rem] lg:m-0 lg:w-[30rem] 2xl:w-[40rem]' />
            </div>
        </div>
    </div>

    <div className="flex justify-center bg-black m-auto pb-5" id="faq-table">
        <div className="flex flex-col text-center h-[55rem] lg:h-[73rem] 2xl:h-[55rem]" id="item-container-5">
            <div className="mt-1" id="top-items-5">
                <h1
                className='text-white font-bold text-[32px] sm:text-[34px] md:text-[32px]
                lg:text-[50px] text-start lg:text-center'>
                    Frequently Asked Questions
                </h1>
                <div className="text-start flex flex-col" id="question-buttons">
                    <div className="flex flex-col lg:mt-[0rem]" id="btn-1">
                        <button 
                        className='
                        bg-[#313131] p-[1.7rem] w-[28rem] sm:w-[35rem] lg:w-[56.5rem] 2xl:w-[81rem] text-white text-[19px] 
                        lg:text-[25px] text-start font-medium hover:bg-[#3f3f3f]' onClick={toggleB1}>
                            What is netflix?
                        </button>
                        <div className="border-t-black border-t-[2px] border-t-solid" id="answer-1">
                            <p 
                            className={`
                            bg-[#313131] text-white w-[28rem] sm:w-[35rem] lg:w-[56.5rem] 2xl:w-[81rem] text-[18px] 
                            lg:text-[24px] leading-[1.4rem] lg:leading-[1.8rem] p-[1.7rem] ${b1clicked ? 'block' : 'hidden'}`}>
                            Netflix is a streaming service that offers a wide variety of award-winning
                            TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                            <br /><br />You can watch as much as you want, whenever you want without a single commercial
                            – all for one low monthly price. There's always something new to discover
                            and new TV shows and movies are added every week!
                            </p>

                            {b1clicked ? (
                                <LiaTimesSolid 
                                className='
                                relative text-white text-[1.2rem] lg:text-[2.5rem] top-[-20.3rem] sm:top-[-17.6rem]
                                lg:top-[-19.9rem] 2xl:top-[-16rem] left-[25rem] sm:left-[32rem] lg:left-[52rem] 2xl:left-[76.5rem]
                                '/>
                            ) : (
                                <AiOutlinePlus
                                className='
                                relative text-white text-[1.2rem] lg:text-[2.5rem] top-[-2.7rem] sm:top-[-3rem]
                                lg:top-[-3.9rem] left-[25rem] sm:left-[32rem] lg:left-[52rem] 2xl:left-[76.5rem] '/>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col lg:mt-[-2.1rem]" id="btn-2">
                        <button 
                        className='
                        bg-[#313131] text-white p-[1.7rem] w-[28rem] sm:w-[35rem] lg:w-[56.5rem] 2xl:w-[81rem]  text-[19px]
                        lg:text-[25px] text-start font-medium hover:bg-[#3f3f3f]' onClick={toggleB2}>
                            How much does Netflix cost?
                        </button>
                        <div className="border-t-black border-t-[2px] border-t-solid" id="answer-2">
                            <p 
                            className={`
                            bg-[#313131] text-white w-[28rem] sm:w-[35rem] lg:w-[56.5rem] 2xl:w-[81rem] text-[18px]
                            lg:text-[24px] leading-[1.4rem] lg:leading-[1.8rem] p-[1.7rem] 
                            ${b2clicked ? 'block' : 'hidden'}`}>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.
                            Plans range from $6.99 to $19.99 a month. No extra costs, no contracts.
                            </p>

                            {b2clicked ? (
                                <LiaTimesSolid 
                                className='
                                relative text-white text-[1.2rem] lg:text-[2.5rem] top-[-12rem] lg:top-[-12.6rem] 2xl:top-[-10.8rem] 
                                left-[25rem] sm:left-[32rem] lg:left-[52rem] 2xl:left-[76.5rem]'/>
                            ) : (
                                <AiOutlinePlus 
                                className='
                                relative text-[1.2rem] lg:text-[2.5rem] top-[-3rem] lg:top-[-3.8rem] left-[25rem] sm:left-[32rem]
                                lg:left-[52rem] 2xl:left-[76.5rem] text-white'/>
                            )}
                    </div>
                    
                    <div className="flex flex-col lg:mt-[-2.1rem]" id="btn-3">
                        <button 
                        className='
                        bg-[#313131] p-[1.7rem] w-[28rem] sm:w-[35rem] lg:w-[56.5rem] 2xl:w-[81rem] text-white text-[19px] 
                        lg:text-[24px] font-medium
                        text-start hover:bg-[#3f3f3f]' onClick={toggleB3}>
                            Where can I watch?
                        </button>
                        <div className="border-t-black border-t-[2px] border-t-solid" id="answer-3">
                            <p 
                            className={`
                            bg-[#313131] text-white w-[28rem] sm:w-[35rem] lg:w-[56.5rem] 2xl:w-[81rem] text-[18px] lg:text-[24px] 
                            leading-[1.4rem] lg:leading-[1.8rem] p-[1.7rem] ${b3clicked ? 'block' : 'hidden'}`}>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web
                            at netflix.com from your personal computer or on any internet-connected device that offers
                            the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            <br /><br />
                            You can also download your favorite shows with the iOS, Android, or Windows 10 app.
                            Use downloads to watch while you're on the go and without an internet connection.
                            Take Netflix with you anywhere.
                            </p>

                            {b3clicked ? (
                                <LiaTimesSolid 
                                className='
                                relative text-white text-[1.2rem] lg:text-[2.5rem] top-[-24.6rem] sm:top-[-20.4rem]
                                lg:top-[-21.5rem] 2xl:top-[-18rem] left-[25rem] sm:left-[32rem] lg:left-[52rem] 
                                2xl:left-[76.5rem]'/>
                            ) : (
                                <AiOutlinePlus 
                                className='
                                relative text-white text-[1.2rem] lg:text-[2.5rem] top-[-3rem] lg:top-[-3.8rem]
                                left-[25rem] sm:left-[32rem] lg:left-[52rem] 2xl:left-[76.5rem]'/>
                            )}
                    </div>

                    <div className="flex flex-col lg:mt-[-2.1rem]" id="btn-4">
                        <button 
                        className='
                        bg-[#313131] p-[1.7rem] w-[28rem] sm:w-[35rem] lg:w-[56.5rem] 2xl:w-[81rem] text-white text-[19px] lg:text-[24px] 
                        font-medium text-start hover:bg-[#3f3f3f]' onClick={toggleB4}>
                            How do I cancel?
                        </button>
                        <div className="border-t-black border-t-[2px] border-t-solid" id="answer-4">
                            <p 
                            className={`
                            bg-[#313131] text-white w-[28rem] sm:w-[35rem] lg:w-[56.5rem] 2xl:w-[81rem] text-[18px] lg:text-[24px] 
                            leading-[1.4rem] lg:leading-[1.8rem] p-[1.7rem] ${b4clicked ? 'block' : 'hidden'}`}>
                            Netflix is flexible. There are no pesky contracts and no commitments.
                            You can easily cancel your account online in two clicks.
                            There are no cancellation fees – start or stop your account anytime.
                            </p>

                            {b4clicked ? (
                                <LiaTimesSolid 
                                className='
                                relative text-[1.2rem] lg:text-[2.5rem] top-[-13.4rem] sm:top-[-12rem] lg:top-[-12.5rem]
                                2xl:top-[-10.7rem] left-[25rem] sm:left-[32rem] lg:left-[52rem] 2xl:left-[76.5rem] text-white'/>
                            ) : (
                                <AiOutlinePlus 
                                className='
                                relative text-[1.2rem] lg:text-[2.5rem] top-[-3rem] lg:top-[-3.8rem] left-[25rem]
                                sm:left-[32rem] lg:left-[52rem] 2xl:left-[76.5rem] text-white'/>
                            )}
                    </div>

                    <div className="flex flex-col lg:mt-[-2.1rem]" id="btn-5">
                        <button 
                        className='
                        bg-[#313131] p-[1.7rem] w-[28rem] sm:w-[35rem] lg:w-[56.5rem] 2xl:w-[81rem] text-white text-[19px] lg:text-[24px]
                        font-medium text-start hover:bg-[#3f3f3f]' onClick={toggleB5}>
                            What can I watch on Netflix?
                        </button>
                        <div className="border-t-black border-t-[2px] border-t-solid" id="answer-5">
                            <p 
                            className={`
                            bg-[#313131] text-white w-[28rem] sm:w-[35rem] lg:w-[56.5rem] 2xl:w-[81rem] text-[18px] lg:text-[24px] 
                            
                            leading-[1.4rem] lg:leading-[1.8rem] p-[1.7rem] ${b5clicked ? 'block' : 'hidden'}`}>
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning
                            Netflix originals, and more. Watch as much as you want, anytime you want.
                            </p>

                            {b5clicked ? (
                                <LiaTimesSolid 
                                className='
                                relative text-white text-[1.2rem] lg:text-[2.5rem] top-[-12rem] lg:top-[-12.5rem] 
                                2xl:top-[-10.8rem] left-[25rem] sm:left-[32rem] lg:left-[52rem] 2xl:left-[76.5rem] 
                                '/>
                            ) : (
                                <AiOutlinePlus 
                                className='
                                relative text-white text-[1.2rem] lg:text-[2.5rem] top-[-2.9rem] lg:top-[-3.8rem]
                                left-[25rem] sm:left-[32rem] lg:left-[52rem] 2xl:left-[76.5rem] '/>
                            )}
                    </div>

                    <div className="flex flex-col lg:mt-[-2.1rem]" id="btn-6">
                        <button 
                        className='
                        bg-[#313131] p-[1.7rem] w-[28rem] sm:w-[35rem] lg:w-[56.5rem] 2xl:w-[81rem] text-white text-[19px] lg:text-[24px]
                        font-medium text-start hover:bg-[#3f3f3f]' onClick={toggleB6}>
                            Is Netflix good for kids?
                        </button>
                        <div className="border-t-black border-t-[2px] border-t-solid" id="answer-6">
                            <p 
                            className={`
                            bg-[#313131] text-white w-[28rem] sm:w-[35rem] lg:w-[56.5rem] 2xl:w-[81rem] text-[18px] lg:text-[24px] font-medium
                            leading-[1.4rem] lg:leading-[1.8rem] p-[1.7rem] ${b6clicked ? 'block' : 'hidden'}`}>
                            The Netflix Kids experience is included in your membership to give parents
                            control while kids enjoy family-friendly TV shows and movies in their own space.
                            <br /><br />
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity
                            rating of content kids can watch and block specific titles you don’t want kids to see.
                            </p>

                            {b6clicked ? (
                                <LiaTimesSolid 
                                className='
                                relative text-white text-[1.2rem] lg:text-[2.5rem] top-[-18.9rem] sm:top-[-16.2rem]
                                lg:top-[-19.7rem] 2xl:top-[-16rem] left-[25rem] sm:left-[32rem] lg:left-[52rem] 2xl:left-[76.5rem]'/>
                            ) : (
                                <AiOutlinePlus
                                className='
                                relative text-white text-[1.2rem] lg:text-[2.5rem] top-[-2.9rem] lg:top-[-3.8rem]
                                left-[25rem] sm:left-[32rem] lg:left-[52rem] 2xl:left-[76.5rem]'/>
                            )}
                    </div>
                </div>
            <div 
            className="
            text-center justify-center w-[25rem] lg:w-[55rem] sm:mt-[2rem] lg:mt-[0] lg:ml-0 ml-6" 
            id="bottom-items">
                <div 
                className="
                space-y-7 flex flex-col justify-center w-[25rem] lg:w-[56.5rem] 2xl:w-[60rem] sm:w-[32rem] absolute
                2xl:left-[22rem]"
                id="content-table#">
                    <h4 className='text-white text-[19px]'>
                    Ready to watch? Enter your email to create or restart your membership.
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row justify-center" id="email&button">
                        <input ref={emailRef} onChange={handleEmailChange} type="text"
                        onFocus={emailClicked} className={`
                        bg-[#141414] border-[1px] border-[grey] border-solid pt-2
                        bg-opacity-70 rounded-[6px] h-[3rem] sm:h-[3.5rem] pl-[1.1rem]
                        lg:pl-[1.5rem] w-[25rem] sm:w-[30rem] md:w-[24rem] lg:w-[22rem] focus:border-[2px]
                        focus:border-white focus:border-solid text-white  
                        ${isValid ? 'border-green-500' : isEmpty ? 'border-red-600' : 'border-[grey]'}`}/> 
                        <h3
                        className={`
                        absolute text-[#c1c1c1] m-auto ml-[1.3rem] mt-[-5.5rem] sm:mt-[1.1rem]
                        sm:ml-[-24rem] md:ml-[-24rem] lg:ml-[-27rem]
                        ${holderMove ? 'translate-y-[-.9rem] translate-x-[-.2rem] text-sm' : null}`} id='placeholder'>
                        Email address
                        </h3>

                        {isEmpty && emailClicked ? (
                            <h4
                            className='
                            text-red-700 ml-[0rem] sm:ml-[-24rem] md:ml-[-24rem] lg:ml-[-27.2rem] mt-[-.8rem] 
                            sm:mt-[3.7rem] md:mt-[3.9rem] lg:mt-[3.8rem] absolute font-semibold text-sm flex flex-row
                            m-auto'>
                            <VscError size={20} className=''/> Email is required.</h4>
                        ) : null}
                    
                        {!isValid && emailRef.current?.value.length > 0 && (
                            <h4 
                            className='
                            text-red-700 absolute font-semibold text-sm flex flex-row ml-[0rem]
                            sm:ml-[-17rem] md:ml-[-17.3rem] lg:ml-[-20.5rem] m-auto mt-[-.8rem] sm:mt-[3.7rem]
                            md:mt-[3.9rem] lg:mt-[3.8rem]'>
                            <VscError size={20} className='mt-[0.05rem] mr-1'/>
                            Please enter a valid email address.</h4>
                        )}
                        <br /><br /><br />
                        <button type='submit'
                        className='
                        text-white text-lg sm:text-[1.6rem] font-semibold bg-red-700
                        w-[10rem] sm:w-[23rem] lg:w-[13rem] h-[3rem] sm:h-[3.5rem] ml-[7rem]
                        sm:ml-[0.5rem] mt-[-1rem] sm:mt-0 rounded-md'>
                        Get started
                        <span className='opacity-0'>...</span>{'>'}
                        </button>
                    </div>

                </div>
            </div>    
            </div>    
        </div>        
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>

    
  )
}

export default Hero;