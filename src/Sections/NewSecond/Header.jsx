import React from 'react'

const Header = ({ top, mid, bottom }) => {
    return (
        <div className='flex flex-col text-center gap-6 items-center justify-between'>
            <p className='bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text mono text-sm font-normal'
                dangerouslySetInnerHTML={{ __html: top }} />
            <h1 className='text-[37px] leading-[120%] font-bold gradient-text-green'
                dangerouslySetInnerHTML={{ __html: mid }} />
            <p className='mono text-[15px] gradient-text-green'
                dangerouslySetInnerHTML={{ __html: bottom }} />
        </div>
    )
}

export default Header
