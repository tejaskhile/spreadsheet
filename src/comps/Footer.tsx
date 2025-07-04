import React from "react";
import plusIcon from "../assets/plus.svg";

const Footer = () => {
    return (
        <div className="flex items-center fixed bottom-0 w-full h-[48px] gap-[24px] pl-[32px] pr-[16px] pt-[4px] border-t-[1px] border-[#E8F0E9] z-10 bg-[#fff]">
            <p
                className="font-semibold font-work text-base bg-[#E8F0E9] text-[#4B6A4F] border-t-[2px] border-[#3E5741] px-[16px] py-[10px] "
                onClick={() => console.log("All Orders btn clicked")}
            >
                All Orders
            </p>
            <p
                className="font-medium font-work text-base text-[#757575]"
                onClick={() => console.log("Pending btn clicked")}
            >
                Pending
            </p>
            <p
                className="font-medium font-work text-base text-[#757575]"
                onClick={() => console.log("Reviewed btn clicked")}
            >
                Reviewed
            </p>
            <p
                className="font-medium font-work text-base text-[#757575]"
                onClick={() => console.log("Arrived btn clicked")}
            >
                Arrived
            </p>
            <img src={plusIcon} alt="" className="w-[20px] h-[20px]" />
        </div>
    );
};

export default Footer;
