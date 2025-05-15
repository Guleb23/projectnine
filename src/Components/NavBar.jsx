import React, { useRef } from 'react';
import gsap from 'gsap';
import LogoComponent from '../Components/LogoComponent'
const NavItem = ({ name, link }) => {
    const underlineRef = useRef(null);
    const textRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(textRef.current, { opacity: 0.8, duration: 0.3, ease: 'power1.out' });
        gsap.to(underlineRef.current, { width: '100%', duration: 0.3, ease: 'power1.out' });
    };

    const handleMouseLeave = () => {
        gsap.to(textRef.current, { opacity: 1, duration: 0.3, ease: 'power1.out' });
        gsap.to(underlineRef.current, { width: '0%', duration: 0.3, ease: 'power1.out' });
    };

    const handleClick = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: link,
            ease: "power2.inOut",
        });
    };

    return (
        <span
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={textRef}
            className="cursor-pointer text-[12px] hidden xl:block px-2.5 leading-4 text-center
        text-transparent bg-[radial-gradient(circle_at_center,rgba(225,255,222,1)_0%,rgba(225,255,222,0.25)_100%)] bg-clip-text font-medium relative"
            style={{ opacity: 1 }}
        >
            {name}
            <span
                ref={underlineRef}
                className="absolute bottom-0 left-0 h-[2px] bg-[#E1FFDE]"
                style={{ width: '0%', transition: 'width 0.3s ease' }}
            />
        </span>
    );
};

const NavBar = ({ ref }) => {
    const items = [
        { name: "ABOUT", link: "#sec" },
        { name: "TECHNOLOGY", link: "#four" },
        { name: "OUR TEAM", link: "#house" },
        { name: "ROADMAP", link: "#diagramm" },
    ];

    return (
        <div
            ref={ref}
            className="fixed top-0 left-0 w-full flex items-center justify-center bg-gradient-to-b from-black to-transparent py-6 z-[100]"
        >
            <div className="hidden xl:flex w-full flex-wrap items-center justify-center 2xl:gap-4 gap-8">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <NavItem name={item.name} link={item.link} />

                        {/* Логотип и разделители */}
                        {index === 1 && (
                            <>
                                <div className="hidden lg:flex items-center gap-1 px-2">
                                    <div className="h-0.5 w-20 2xl:w-34 bg-[radial-gradient(circle_at_center,rgba(225,255,222,0.5)_0%,rgba(225,255,222,0)_100%)]" />
                                </div>
                                <LogoComponent />
                                <div className="hidden lg:flex items-center gap-1 px-2">
                                    <div className="h-0.5 w-20 2xl:w-34 bg-[radial-gradient(circle_at_center,rgba(225,255,222,0.5)_0%,rgba(225,255,222,0)_100%)]" />
                                </div>
                            </>
                        )}
                        {index !== items.length - 1 && index !== 1 && (
                            <div className="hidden lg:flex items-center gap-1 px-2">
                                <div className="h-0.5 w-26 2xl:w-34 bg-[radial-gradient(circle_at_center,rgba(225,255,222,0.5)_0%,rgba(225,255,222,0)_100%)]" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Картинки в начале и конце меню */}
            <img
                src="/Hero/left.png"
                width={150}
                className="absolute sm:left-2 -left-10 sm:top-26 top-24 transform -translate-y-1/2"
                alt="Start Image"
            />
            <img
                src="/Hero/right.png"
                width={150}
                className="absolute sm:right-2 -right-10 sm:top-26 top-24 transform -translate-y-1/2"
                alt="End Image"
            />
        </div>
    );
};

export default NavBar;
