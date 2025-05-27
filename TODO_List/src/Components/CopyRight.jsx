import React from 'react'

const Copyright = () => {
    return (
        <div className='xl:mx-12 flex flex-col md:flex-row justify-between bg-white border-t-[0.81px] border-black px-5 md:px-0'>
            <p className=''>© 2025 Osumare. All rights reserved.</p>
            <ul className='flex  flex--wrap gap-[19.5px] mt-[26px]'>
                <li className='cursor-pointer'>Privacy Policy</li>
                <li className='cursor-pointer'>Terms of Service</li>
                <li className='cursor-pointer'>Cookies Settings</li>
            </ul>
        </div>
    )
}

export default Copyright;