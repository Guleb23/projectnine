import React, { useState } from 'react'
import Header from '../NewSecond/Header'
import ImageModal from '../../Components/ImageModal';
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

const NewSevenSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };
    return (
        <div className='w-screen h-screen bg-black flex justify-center items-center -mt-[2%] '>
            {isModalOpen && (
                <ImageModal
                    imageUrl={selectedImage}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
            <img src='/Nine/Fone.png' className='absolute bottom-[100vh] -left-[70%] z-0 ' />
            <img src='/Nine/Fone.png' className='absolute bottom-[70vh] -right-[45%] z-0 ' />
            <div className='w-full h-full flex px-[17.5%] gap-[50px] z-10'>
                <img width={400} height={610} className='w-[400px] h-[610px]' src='/NewSeven/house.png' />
                <div className='flex flex-col w-[400px] h-[610px]'>
                    <Header customStyles={`justify-start !text-left !w-[490px]`} top={`Israeli-Founded. Globally Oriented.`} mid={`SpinEdge: A Company<br/> Built for Impact`} bottom={`SpinEdge is an Israeli deep tech company founded in 2022, uniting industry leaders and scientific minds to drive innovation in AI hardware.
                    With expertise spanning spintronics, microelectronics, and systems engineering, the team blends technical depth with real-world execution.
                    The company is a graduate of the INNOFENSE Innovation Center (iHLS & Israeli MoD) and is supported by the European Innovation Council and the JU Chips Act.`} />
                    <div className='flex flex-col w-full h-full'>
                        <p className='text-[15px] font-bold gradient-text-green mt-auto pb-3.5'>
                            2 PCT patents granted,<br /> 5+ in pipeline:
                        </p>
                        <div className="flex gap-4">
                            {["/NewSeven/left.png", "/NewSeven/right.png"].map((src, index) => (
                                <div
                                    key={index}
                                    className="group relative cursor-pointer"
                                    onClick={() => openModal(src)}
                                >
                                    <img
                                        src={src}
                                        width={103}
                                        height={130}
                                        className="object-contain object-center"
                                        alt={`Preview ${index}`}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20  opacity-0 transition-opacity group-hover:opacity-100">
                                        <span className="text-white text-xl">
                                            <HiMagnifyingGlassPlus />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewSevenSection
