import React from 'react';
import LogoComponent from './LogoComponent';
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
const NavBar = ({ ref }) => {
    const items = [
        {
            name: "ABOUT",
            link: "#main",
        },
        {
            name: "TECHNOLOGY",
            link: "#second",
        },
        {
            name: "OUR TEAM",
            link: "#three",
        },
        {
            name: "ROADMAP",
            link: "#four",
        }
    ];
    '', '', '', ''
    return (
        <div ref={ref} className="fixed top-0 left-0 w-full flex items-center justify-center bg-gradient-to-b from-black to-transparent py-6 z-[100]">

            <div className="flex w-full flex-wrap items-center justify-center 2xl:gap-4 gap-8">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        {/* Текст пункта меню */}

                        <span
                            onClick={() => {
                                gsap.to(window, {
                                    duration: 1,
                                    scrollTo: item.link,
                                    ease: "power2.inOut",
                                });
                            }}
                            className="cursor-pointer text-[12px] hidden xl:block px-2.5 leading-4 text-center text-transparent bg-[radial-gradient(circle_at_center,rgba(225,255,222,1)_0%,rgba(225,255,222,0.25)_100%)] bg-clip-text font-medium"
                        >
                            {item.name}
                        </span>

                        {/* Вставка логотипа после TECHNOLOGY */}
                        {index === 1 && (
                            <>
                                <div className="hidden lg:flex items-center gap-1 px-2">
                                    <div className="h-0.5 w-20 2xl:w-34 bg-[radial-gradient(circle_at_center,rgba(225,255,222,0.5)_0%,rgba(225,255,222,0)_100%)]" />
                                </div>
                                <LogoComponent />
                                <div className="hidden lg:flex items-center gap-1 px-2">
                                    <div className=" h-0.5 w-20 2xl:w-34 bg-[radial-gradient(circle_at_center,rgba(225,255,222,0.5)_0%,rgba(225,255,222,0)_100%)]" />
                                </div>
                            </>
                        )}

                        {/* Разделители между остальными пунктами */}
                        {index !== items.length - 1 && index !== 1 && (
                            <div className=" hidden lg:flex items-center gap-1 px-2">
                                <div className="h-0.5 w-26 2xl:w-34 bg-[radial-gradient(circle_at_center,rgba(225,255,222,0.5)_0%,rgba(225,255,222,0)_100%)]" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Картинка в начале меню (абсолютное позиционирование) */}
            <img
                src='/Hero/left.png' width={150}
                className="absolute left-2 top-36 transform -translate-y-1/2"
                alt="Start Image"
            />

            {/* Картинка в конце меню (абсолютное позиционирование) */}
            <img
                src='/Hero/right.png' width={150}
                className="absolute right-2 top-36 transform -translate-y-1/2"
                alt="End Image"
            />
        </div>
    );
};

export default NavBar;
