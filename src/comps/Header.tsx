import React from 'react'
import bellIcon from '../assets/bell.svg'
import searchIcon from '../assets/search2.svg'
import panel from '../assets/Panel.svg'
import chevron from '../assets/Chevron.svg'
import pic from '../assets/pic.svg'

const Header: React.FC = () => {
    return (
        <div className='h-[56px] w-full px-[16px] py-[8px] flex items-center text-center justify-between border-b-[1px] border-[#EEEEEE]'>
            <div className='w-[343px] flex items-center gap-[16px]'>
                <div>
                    <img src={panel} alt="panel" />
                </div>
                <div className='flex text-center justify-center items-center gap-[4px]'>
                    <p className='text-sm font-work font-medium leading-5 text-[#AFAFAF]'>Workspace</p>
                    <img src={chevron} alt="chevron" />
                    <p className='text-sm font-work font-medium leading-5 text-[#AFAFAF]'>Folder 2</p>
                    <img src={chevron} alt="chevron" />
                    <p className='flex items-center text-center text-sm font-work font-medium leading-5 text-[#121212] gap-1'>
                        Spreadsheet 3
                        <p className=" w-6 h-7 text-[#AFAFAF] px-2">...</p>
                    </p>
                </div>
            </div>
            <div className='flex items-center gap-[4px]'>
                <div className='flex items-center gap-[8px] rounded-md  p-[12px] bg-[#f6f6f6] '>
                    <img className='w-[16px] h-[16px]' src={searchIcon} alt="search" onClick={() => console.log('Search clicked')} />
                    <input className='bg-transparent w-[105px] text-xs border-none outline-none font-normal leading-4 text-[#757575] text-left' type="text" placeholder='Search within sheet' />
                </div>
                <img src={bellIcon} alt="Notifications" onClick={() => console.log('Notifications clicked')} />
                <div className='flex items-center gap-[8px] py-[6px] pr-[12px] pl-[8px]'>
                    <img src={pic} alt="" onClick={() => console.log('Profile clicked')} />
                    <div>
                        <p className='font-work leading-4 text-xs text-[#121212]'>John Doe</p>
                        <p className='font-work leading-4 text-xs text-[#757575]'>john.doe...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
