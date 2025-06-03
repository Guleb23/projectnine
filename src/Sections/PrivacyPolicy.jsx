import { useEffect } from "react";
import { gsap } from "gsap";
import NavBar from "../Components/NavBar";
import NineSection from "./NineSection/NineSection";
import PrivatePolicy from "./PrivatePolicy";

const PrivacyPolicy = () => {
    useEffect(() => {
        // Плавный скролл к верху страницы при монтировании компонента
        gsap.to(window, {
            duration: 0.5,
            scrollTo: 0,
            ease: "power2.out"
        });
    }, []);

    return (
        <div className="w-full h-full">
            <NavBar />
            <PrivatePolicy />
            <NineSection />
        </div>
    );
};

export default PrivacyPolicy;