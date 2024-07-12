import React from 'react';
import menu from '@/constants/menu.json'
import {MenuItem} from "@/types/navigation.type";
import {IoFlask} from "react-icons/io5";
import {TbGridDots} from "react-icons/tb";
import {Avatar} from "@/components/common/Avatar";
import {randomImages} from "@/constants/urls";
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className={"gc_main-header"}>
            <ul className={"gc_menu-container"}>
                <li className={"block lg:hidden"}>
                    <button>
                        <IoFlask className={"gc_menu-icon"}/>
                    </button>
                </li>
                <li className={"block lg:hidden"}>
                    <button>
                        All
                    </button>
                </li>
                <li className={"block lg:hidden"}>
                    <button>
                        Images
                    </button>
                </li>
            </ul>
            <ul className={"gc_menu-container"}>
                {
                    menu.headerMenu.map((m: MenuItem, i: number) => (
                        <li key={i} className={"mb-2 hidden lg:block"}>
                            <NavLink to={m.path} className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'} >{m.label}</NavLink>
                        </li>
                    ))
                }
                <li className={"mx-2 hidden lg:block"}>
                    <NavLink to={"/"}>
                        <IoFlask className={"gc_menu-icon"}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/"}>
                        <TbGridDots className={"gc_menu-icon"}/>
                    </NavLink>
                </li>
                <li>
                    <Avatar imageUrl={randomImages} altText={"user-profile"}/>
                </li>
            </ul>
        </header>
    )
}

export default Header;