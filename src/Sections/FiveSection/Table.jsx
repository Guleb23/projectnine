import React from 'react'

const Table = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 w-[950px] h-[180px]">
            {/* Ячейка 1-1 */}
            <div className="border-[0.5px] font-medium text-[19px] gradient-text-green px-[15px] py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                Benchmark
            </div>

            {/* Ячейка 1-2 */}
            <div className="border-[0.5px] px-[15px] font-medium text-[19px] gradient-text-green py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                GB200 Superchip
            </div>

            {/* Ячейка 1-3 */}
            <div className="border-[0.5px] px-[15px] font-medium text-[19px] gradient-text-green py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                Jetson Orin Nano 4GB
            </div>

            {/* Ячейка 2-1 */}
            <div className="border-[0.5px] mono gradient-text-green text-[15px] font-bold  px-[15px] py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                Llama 3.1 8B
            </div>

            {/* Ячейка 2-2 */}
            <div className="border-[0.5px] mono text-[23px] font-bold px-[15px] bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text mono py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                x236
            </div>

            {/* Ячейка 2-3 */}
            <div className="border-[0.5px] text-[23px] font-bold px-[15px] bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text mono py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                x205
            </div>

            {/* Ячейка 3-1 */}
            <div className="border-[0.5px] mono text-[15px] gradient-text-green font-bold px-[15px] py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                ViT-B/16 384x384
            </div>

            {/* Ячейка 3-2 */}
            <div className=" relative border-[0.5px] text-[23px] font-bold px-[15px] bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text mono py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                x145
                <img src='/Five/first.png' className='absolute z-50 right-0 -bottom-4' />
            </div>

            {/* Ячейка 3-3 */}
            <div className="border-[0.5px] relative text-[23px] font-bold bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text mono px-[15px] py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                x115
                <img src='/Five/sec.png' className='absolute z-50 right-0 -bottom-4' />
            </div>
        </div>
    )
}

export default Table
