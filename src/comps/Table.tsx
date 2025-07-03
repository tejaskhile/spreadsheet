import React from "react";
import split from "../assets/Arrow Split.svg";
import Link from "../assets/Link.svg";
import sync from "../assets/Arrow Sync.svg";
import briefcase from "../assets/Briefcase.svg";
import dropdown from "../assets/Dropdown.svg";
import globe from "../assets/Globe.svg";
import hash from "../assets/hash.svg";
import add from "../assets/Add.svg";
import more from "../assets/More.svg";
import user from "../assets/user.svg";
import chevronCircle from "../assets/Chevron Circle.svg";
import emoji from "../assets/Emoji.svg";
import calender from "../assets/Calendar.svg";



const Table = () => {
    const rows = [
        {
            id: 1,
            job: "Launch social media campaign",
            submitted: "15-11-2024",
            status: "In-process",
            submitter: "Aisha Patel",
            url: "https://example.com/campaign",
            assigned: "John Doe",
            priority: "High",
            "due date": "30-11-2024",
            "ext value": "340000",
        },
        {
            id: 2,
            job: "Update website banner",
            submitted: "12-11-2024",
            status: "Complete",
            submitter: "Brian Lee",
            url: "https://example.com/banner",
            assigned: "Sara Kim",
            priority: "Medium",
            "due date": "18-11-2024",
            "ext value": "2240000",
        },
        {
            id: 3,
            job: "Prepare Q4 report",
            submitted: "10-11-2024",
            status: "Need to start",
            submitter: "Carlos Gomez",
            url: "https://example.com/report",
            assigned: "Emily Chen",
            priority: "High",
            "due date": "25-11-2024",
            "ext value": "7840000",
        },
        {
            id: 4,
            job: "Design new logo",
            submitted: "09-11-2024",
            status: "In-process",
            submitter: "Diana Smith",
            url: "https://example.com/logo",
            assigned: "Alex Brown",
            priority: "Low",
            "due date": "20-11-2024",
            "ext value": "100000",
        },
        {
            id: 5,
            job: "Client feedback review",
            submitted: "13-11-2024",
            status: "Blocked",
            submitter: "Ethan Clark",
            url: "https://example.com/feedback",
            assigned: "Maya Singh",
            priority: "Medium",
            "due date": "22-11-2024",
            "ext value": "40000",
        },
        {
            id: 6,
        },
        { id: 7, },
        { id: 8, },
        { id: 9, },
        { id: 10, },
        { id: 11, },
        { id: 12, },
        { id: 13, },
        { id: 14, },
        { id: 15, },
        { id: 16, },
        { id: 17, },
    ]

    return (
        <div className="">
            <table className="min-w-full h-screen text-left border-t-[1px] border-[#EEEEEE]" style={{ tableLayout: "auto" }}>
                <thead className="">
                    <tr className="text-xs h-[32px]">
                        <th className="bg-white px-4 py-2 w-[32px]"></th>
                        <th className="bg-[#E2E2E2] px-2 py-[4px] gap-2" colSpan={4}>
                            <div className=" rounded-[4px]  flex items-center gap-2 text-xs font-normal leading-[16px] font-work text-[#545454]">
                                <div className="flex items-center gap-1 p-[6px] bg-[#eeeeee] rounded-[4px]">
                                    <img src={Link} alt="link" className="w-4 h-4" />
                                    Q3 Financial Overview
                                </div>
                                <img src={sync} alt="sync" className="w-4 h-4" />
                            </div>
                        </th>
                        <th className="px-4 py-2 bg-[#fff]" colSpan={1}></th>
                        <th
                            className="bg-[#D2E0D4] px-4 py-2 border border-[#fff]"
                            colSpan={1}
                        >
                            <div className="flex justify-center items-center gap-1 text-[#505450] leading-5 font-work text-sm font-medium">
                                <img src={split} alt="split" className="w-4 h-4" />
                                ABC
                                <img src={more} alt="more" className="w-5 h-5" />
                            </div>
                        </th>
                        <th
                            className="bg-[#DCCFFC] px-4 py-2 border border-[#fff]"
                            colSpan={2}
                        >
                            <div className="flex justify-center items-center gap-1 text-[#463E59] leading-5 font-work text-sm font-medium">
                                <img src={split} alt="split" className="w-4 h-4" />
                                Answer a question
                                <img src={more} alt="more" className="w-5 h-5" />
                            </div>
                        </th>
                        <th
                            className="bg-[#FAC2AF] px-4 py-2 border border-[#fff]"
                            colSpan={1}
                        >
                            <div className="flex justify-center items-center gap-1 text-[#695149] leading-5 font-work text-sm font-medium">
                                <img src={split} alt="" className="w-4 h-4" />
                                Extract
                                <img src={more} alt="" className="w-5 h-5" />
                            </div>
                        </th>
                        <th
                            className="bg-[#eeeeee] w-[124px] border-x-2 border-dotted border-[#CBCBCB] h-full"
                            colSpan={1}
                        >
                            <div className="flex justify-center items-center ">
                                <img src={add} alt="" className="w-5 h-5" />
                            </div>
                        </th>
                    </tr>

                    <tr className="px-4 py-2 border w-[32px] h-[32px] border-[#fff] bg-[#eeeeee] text-xs text-[#757575] font-work font-normal ">
                        <th className="px-3 py-2 gap-1 border-b-0">
                            <img src={hash} alt="hash" className="w-4 h-4" />
                        </th>
                        <th className="pl-2 pr-1 py-2 w-[256px] h-full border border-[#fff]">
                            <div className="gap-1 flex justify-between">
                                <div className="flex items-center gap-1">
                                    <img src={briefcase} alt="" className="w-4 h-4" />
                                    Job Request
                                </div>
                                <img src={dropdown} alt="dropdown" />
                            </div>
                        </th>
                        <th className="pl-2 pr-1 py-2 w-[124px] border border-[#fff]">
                            <div className="gap-1 flex justify-between">
                                <div className="flex items-center gap-1">
                                    <img src={calender} alt="" className="w-4 h-4" />
                                    Summitted
                                </div>
                                <img src={dropdown} alt="dropdown" />
                            </div>
                        </th>
                        <th className="pl-2 pr-1 py-2 max-w-[124px] border border-[#fff]">
                            <div className="gap-1 flex justify-between">
                                <div className="flex items-center gap-1">
                                    <img src={chevronCircle} alt="" className="w-4 h-4" />
                                    Status
                                </div>
                                <img src={dropdown} alt="dropdown" />
                            </div>
                        </th>
                        <th className="pl-2 pr-1 py-2 w-[124px] border border-[#fff]">
                            <div className="gap-1 flex justify-between">
                                <div className="flex items-center gap-1">
                                    <img src={user} alt="" className="w-4 h-4" />
                                    Summitter
                                </div>
                                <img src={dropdown} alt="dropdown" />
                            </div>
                        </th>
                        <th className="pl-2 pr-1 py-2 w-[124px] border border-[#fff]">
                            <div className="gap-1 flex justify-between">
                                <div className="flex items-center gap-1">
                                    <img src={globe} alt="" className="w-4 h-4" />
                                    URL
                                </div>
                                <img src={dropdown} alt="dropdown" />
                            </div>
                        </th>
                        <th className="pl-2 pr-1 py-2 w-[124px] border border-[#fff] text-[#666C66] bg-[#E8F0E9] ">
                            <div className="gap-1 flex justify-between">
                                <div className="flex items-center gap-1">
                                    <img src={emoji} alt="" className="w-4 h-4" />
                                    Assigned
                                </div>
                            </div>
                        </th>
                        <th className="px-4 py-2 border w-[125px] border-[#fff] text-[#655C80] bg-[#EAE3FC] ">Priority</th>
                        <th className="px-4 py-2 border w-[125px] border-[#fff] text-[#655C80] bg-[#EAE3FC]">Due Date</th>
                        <th className="px-4 py-2 border w-[124px] border-[#fff] text-[#8C6C62] bg-[#FFE9E0]">Est. Value</th>
                        <th className="px-4 py-2 w-[124px] border-x-2 border-dotted border-[#CBCBCB] bg-[#fff]"></th>
                    </tr>
                </thead>
                <tbody className="h-screen overflow-y-auto">
                    {rows.map((row) => (
                        <tr key={row.id} className="font-work font-normal text-xs leading-4 text-[#121212]">
                            <td className="border px-4 py-2 text-[#757575]">{row.id}</td>
                            <td className="border px-2">
                                <input
                                    value={row.job}
                                    className="w-full outline-none bg-transparent"
                                />
                            </td>
                            <td className="border px-2">
                                <input
                                    value={row.submitted}
                                    className="w-full outline-none bg-transparent text-right"
                                />
                            </td>
                            <td className="border px-3 text-center">
                                <div
                                    className={`inline-block px-[5px] py-1 gap-2 text-center rounded-[100px] font-medium
                                    ${row.status === "In-process"
                                            ? "text-[#85640B] bg-[#FFF3D6]"
                                            : row.status === "Complete"
                                                ? "text-[#4B6A4F] bg-[#D3F2E3]"
                                                : row.status === "Blocked"
                                                    ? "text-[#C22219] bg-[#FFE1DE]"
                                                    : row.status === "Need to start"
                                                        ? "text-[#475569] bg-[#E2E8F0]"
                                                        : row.status
                                                            ? ""
                                                            : "bg-transparent"
                                        }
                                `}
                                >
                                    <input
                                        value={row.status || ""}
                                        className="outline-none bg-transparent text-center"
                                        style={{ width: ((row.status || "")).length + "ch" }}
                                        readOnly
                                    />
                                </div>
                            </td>
                            <td className="border px-2">
                                <input
                                    value={row.submitter}
                                    className="w-full outline-none bg-transparent"
                                />
                            </td>
                            <td className="border px-2">
                                <input
                                    value={row.url}
                                    className="w-full underline outline-none bg-transparent"
                                />
                            </td>
                            <td className="border px-2">
                                <input
                                    value={row.assigned}
                                    className="w-full outline-none bg-transparent"
                                />
                            </td>
                            <td className="border px-2">
                                <input
                                    value={row.priority}
                                    className={`w-full text-center outline-none bg-transparent font-semibold ${row.priority === "High"
                                        ? "text-[#EF4D44]"
                                        : row.priority === "Low"
                                            ? "text-[#1A8CFF]"
                                            : "text-[#C29210]"
                                        }`}
                                    readOnly
                                />
                            </td>
                            <td className="border px-2 ">
                                <input
                                    value={row["due date"]}
                                    className="w-full outline-none bg-transparent text-right"
                                />
                            </td>
                            <td className="border px-2 ">
                                <input
                                    value={row["ext value"] ? row["ext value"] + " ₹" : ""}
                                    className="w-full outline-none bg-transparent text-right"
                                />
                            </td>
                            <td className="border-x-2 border-dotted border-[#CBCBCB]">
                                <input
                                    value={""}
                                    className="w-full outline-none bg-transparent text-right"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
