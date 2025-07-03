import React from 'react'
import doubleChevron from '../assets/Chevron Double.svg'
import eye from '../assets/Eye.svg'
import downArrow from '../assets/Arrow Download.svg'
import upArrow from '../assets/Arrow Upload.svg'
import share from '../assets/Share.svg'
import arrowSplit from '../assets/Arrow Split.svg'
import autofit from '../assets/Arrow Autofit.svg'
import sort from '../assets/Arrow Sort.svg'
import filter from '../assets/Filter.svg'

const SubHeader = () => {
    return (
        <div className='flex items-center w-full h-[48px] gap-[8px] px-[8px] py-[6px] bg-white'>
            <button className='flex items-center gap-1 px-2 py-2 text-sm font-normal font-work text-[#121212] border border-[#EEEEEE] rounded-[4px] bg-white'>
                Tool bar
                <img src={doubleChevron} alt="" className="ml-1" />
            </button>
            <span className='w-[1px] h-[24px] bg-[#EEEEEE]'></span>
            <div className='flex items-center gap-[4px] ml-2'>
                <div className='gap-[4px] font-work text-sm font-normal flex items-center py-[8px] pl-[8px] pr-[12px] rounded-[4px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <img src={eye} alt="" />
                    <p>Hide fields</p>
                </div>
                <div className='gap-[4px] font-work text-sm font-normal flex items-center py-[8px] pl-[8px] pr-[12px] rounded-[4px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <img src={sort} alt="" />
                    <p>Sort</p>
                </div>
                <div className='gap-[4px] font-work text-sm font-normal flex items-center py-[8px] pl-[8px] pr-[12px] rounded-[4px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <img src={filter} alt="" />
                    <p>Filter</p>
                </div>
                <div className='gap-[4px] font-work text-sm font-normal flex items-center py-[8px] pl-[8px] pr-[12px] rounded-[4px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <img src={autofit} alt="" />
                    <p>Cell view</p>
                </div>
            </div>
            <div className='flex items-center gap-[8px] ml-auto'>
                <div className='flex items-center gap-[8px]'>
                    <button className='flex items-center gap-1 px-2 py-2 text-sm font-normal font-work text-[#545454] border border-[#EEEEEE] rounded-[4px] bg-white'>
                        <img src={downArrow} alt="" className="w-[20px] h-[20px]" />
                        Import
                    </button>
                    <button className='flex items-center gap-1 px-2 py-2 text-sm font-normal font-work text-[#545454] border border-[#EEEEEE] rounded-[4px] bg-white'>
                        <img src={upArrow} alt="" className="w-[20px] h-[20px]" />
                        Export
                    </button>
                    <button className='flex items-center gap-1 px-2 py-2 text-sm font-normal font-work text-[#545454] border border-[#EEEEEE] rounded-[4px] bg-white'>
                        <img src={share} alt="" className="w-[20px] h-[20px]" />
                        Share
                    </button>
                </div>
                <button className='flex items-center gap-1 py-[8px] px-[24px] text-sm font-medium font-work text-[#fff] border border-[#EEEEEE] rounded-[6px] bg-[#4B6A4F]'>
                    <img src={arrowSplit} alt="" className="w-[20px] h-[20px] filter invert brightness-0" />
                    New Action
                </button>
            </div>
        </div>
    )
}

export default SubHeader
