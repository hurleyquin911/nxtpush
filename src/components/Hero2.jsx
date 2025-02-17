import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import assets
import Bell from "../assets/Frame1-Bell.png";
import Rocket from "../assets/Frame1-Rocket.png";
import Bell2 from "../assets/Frame2-Bell.png";
import Rocket2 from "../assets/Frame2-Rocket.png";
import Text from "../assets/Frame2-Text Evolved.png";
import SliderArea from "../assets/Frame1-Slider Area.png";
import SliderArea2 from "../assets/Frame2-Slider Area.png";
import SliderButton from "../assets/Frame1-Slider Button.png";
import SliderButton2 from "../assets/Frame2-Slider Button.png";
import OrnamentTop from "../assets/Frame2-Ornament Top.png";
import OrnamentBottom from "../assets/Frame2-Ornament Bottom.png";

const Hero = () => {
    const [isMoved, setIsMoved] = useState(false);
    const [isButton2, setIsButton2] = useState(false);
    const [isSliderArea2, setIsSliderArea2] = useState(false);
    const [isBell2, setIsBell2] = useState(false);
    const [isRocket2, setIsRocket2] = useState(false);
    const [background, setBackground] = useState('linear-gradient(#f5f7f7, #e0e0e0)');
    const [textStyle, setTextStyle] = useState(false);
    const [dots, setDots] = useState('...');
    const [isBlackHole, setIsBlackHole] = useState(false);
    const [blackHoleOpacity, setBlackHoleOpacity] = useState(0);

    const handleSliderButtonClick = () => {
        setIsMoved(!isMoved);
        setIsButton2(!isButton2);
        setIsSliderArea2(!isSliderArea2);
        setIsBell2(!isBell2);
        setIsRocket2(!isRocket2);
        setTextStyle(!textStyle);

        // Change background with fade effect
        setBackground('linear-gradient(to bottom, #f5f7f7 50%, #06b3d6 200%)');

        // Start black hole effect after 4 seconds
        setTimeout(() => {
            setIsBlackHole(true);
            // Mulai animasi opacity black hole
            const startTime = Date.now();
            const duration = 1000; // 1 detik untuk animasi menghitam

            const animateBlackHole = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                setBlackHoleOpacity(progress);

                if (progress < 1) {
                    requestAnimationFrame(animateBlackHole);
                }
            };

            requestAnimationFrame(animateBlackHole);
        }, 4000);

        // Redirect after 5 seconds
        setTimeout(() => {
            window.location.href = 'https://www.nxtpush.com/';
        }, 5000);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prevDots => {
                if (prevDots.length < 3) return prevDots + '.';
                return '.';
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='pb-2' style={{
            background: background,
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: 'hidden',
            transition: 'background 1s ease'
        }}>
            {/* Black Hole Overlay */}
            {isBlackHole && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, ${blackHoleOpacity}) 70%)`,
                        zIndex: 50,
                        pointerEvents: 'none',
                    }}
                />
            )}

            {/* Black Hole Container */}
            <motion.div
                className="black-hole-container"
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                    scale: isBlackHole ? 0 : 1,
                    opacity: isBlackHole ? 0 : 1,
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    scale: {
                        type: "spring",
                        stiffness: 100,
                        damping: 10
                    }
                }}
                style={{
                    transformOrigin: 'center',
                    position: 'relative',
                    zIndex: 40
                }}
            >
                {/* Bell Animation */}
                <div className=''>
                    <motion.img
                        src={isBell2 ? Bell2 : Bell}
                        alt=""
                        className='absolute overflow-hidden z-10'
                        style={{ top: '-75%', left: '76%' }}
                        initial={{ y: '-100%' }}
                        animate={{ y: 'calc(100vh - 150px)' }}
                        transition={{ duration: 2 }}
                    />
                </div>

                {/* Ornament Top */}
                <div className=''>
                    {isMoved && (
                        <motion.img
                            src={OrnamentTop}
                            alt=""
                            className='absolute overflow-hidden'
                            style={{ top: '-110%', left: '60%' }}
                            initial={{ y: '-100%' }}
                            animate={{ y: 'calc(100vh - 150px)' }}
                            transition={{ duration: 2 }}
                        />
                    )}
                </div>

                {/* Rocket Animation */}
                <div className=''>
                    <motion.img
                        src={isRocket2 ? Rocket2 : Rocket}
                        alt=""
                        className='absolute overflow-hidden z-10'
                        style={{ top: '77%', left: '10%' }}
                        initial={{ y: '100%' }}
                        animate={{ y: 'calc(-10vh - 150px)' }}
                        transition={{ duration: 2 }}
                    />
                </div>

                {/* Ornament Bottom */}
                <div className=''>
                    {isMoved && (
                        <motion.img
                            src={OrnamentBottom}
                            alt=""
                            className='absolute overflow-hidden'
                            style={{ top: '89%', left: '-4%' }}
                            initial={{ y: '100%' }}
                            animate={{ y: 'calc(-10vh - 150px)' }}
                            transition={{ duration: 2 }}
                        />
                    )}
                </div>

                {/* Text Content */}
                <motion.div
                    className='text-center z-40'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2 }}
                >
                    <div className='pt-[165px] font-costum1 flex items-center justify-center flex-col leading-none z-40'>
                        <span className='flex items-center flex-col lin leading-none z-40'>
                            <div className='flex'>
                                <h1 className='text-[45px] font-bold font-costum1 flex items-center'> We've
                                    <span className={`text-[75px] pl-2 font-costum2 pr-3 transition-all duration-500 ${textStyle ? 'bg-gradient-to-r from-[#06b3d6] to-[#8db23e] bg-clip-text text-transparent' : 'text-black'}`}>
                                        Evolved !
                                    </span>
                                </h1>
                            </div>

                            <div className='text-[50px] font-bold font-costum1'>
                                Exciting New Ad Technologies
                            </div>
                        </span> <br />
                        <h1 className='text-[45px] font-bold font-costum1 z-40'>& Services Await!</h1>
                        <h1 className='text-[20px] pt-6 font-costum3 z-40'>We've leveled up with expanded services designed just for you.</h1>
                        <h1 className='text-[20px] pt-6 font-costum3 z-40'>Click here to explore our transformation!</h1>

                        {/* Slider Section */}
                        <div className='z-40' style={{ position: 'relative' }}>
                            <img src={isSliderArea2 ? SliderArea2 : SliderArea} alt="" className='pt-10' />
                            <div className='cursor-pointer' onClick={handleSliderButtonClick}>
                                <motion.img
                                    src={isButton2 ? SliderButton2 : SliderButton2}
                                    alt=""
                                    className='absolute'
                                    style={{ top: '34%', left: '2%' }}
                                    animate={{ x: isMoved ? 220 : 0, opacity: isButton2 ? 1 : 0 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                />
                                <motion.img
                                    src={isButton2 ? SliderButton : SliderButton}
                                    alt=""
                                    className='absolute'
                                    style={{ top: '34%', left: '2%' }}
                                    animate={{ x: isMoved ? 200 : 0, opacity: isButton2 ? 0 : 1 }}
                                    transition={{ duration: 1.1, ease: "easeInOut" }}
                                />
                            </div>
                        </div>

                        {/* Redirect Message */}
                        {isMoved && (
                            <motion.h1
                                className='text-[14px] pt-3 font-costum3 z-40 text-blue-400'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                We are redirecting you to our new page{dots}
                            </motion.h1>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;