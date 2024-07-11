import React from 'react';
import {BsSearch} from "react-icons/bs";
// @ts-ignore
import searchIcon from '@/assets/images/brand/google-microphone.svg';
// @ts-ignore
import cameraIcon from "@/assets/images/brand/google-camera-icon.svg";


const SearchBar: React.FC = () => {
    return (
        <div className="lg:max-w-2xl mx-auto rounded-full border dark:border-gray-400 flex mt-5 p-3 hover:shadow cursor-pointer">
            <div className="mr-2">
                <BsSearch className={"h-6"}/>
            </div>
            <input type="search" className="w-full outline-none bg-transparent" autoFocus={true}/>
            <div className="">
                <img src={searchIcon} alt="microphone" className={"h-6"}/>
            </div>
            <div className="ml-2">
                <img src={cameraIcon} alt="microphone" className={"h-6"}/>
            </div>
        </div>
    )
}

export default SearchBar;