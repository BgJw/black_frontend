import Link from 'next/link';
import React from 'react';

const Sidebar = () => {


    return (
        <div style={{ backgroundColor: 'rgb(17 24 39 / 1)', position: 'fixed', top: '0' }} className='flex flex-col h-[100%] w-[160px] mt-16'>
            <div
                className="p-3 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
                <i className="bi bi-house-door-fill"></i>
                <Link href={'/orders'} className="text-[15px] ml-4 text-gray-200 font-bold">Zlecenia</Link>
            </div>
            <div
                className="p-3 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
                <i className="bi bi-bookmark-fill"></i>
                <Link href={'/list'} className="text-[15px] ml-4 text-gray-200 font-bold">Zeszyt</Link>
            </div>
            <div
                className="p-3 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
                <i className="bi bi-bookmark-fill"></i>
                <Link href={'/schedule'} className="text-[15px] ml-4 text-gray-200 font-bold">Grafik</Link>
            </div>

            <div className="my-4 bg-gray-600 h-[1px]"></div>
            {/* <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            // onClick="dropdown()"
            >
                <i className="bi bi-chat-left-text-fill"></i>
                <div className="flex justify-between w-full items-center">
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
                    <span className="text-sm rotate-180" id="arrow">
                        <i className="bi bi-chevron-down"></i>
                    </span>
                </div>
            </div>
            <div
                className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
                id="submenu"
            >
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    Social
                </h1>
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    Personal
                </h1>
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    Friends
                </h1>
            </div> */}

        </div>
    );
};

export default Sidebar;