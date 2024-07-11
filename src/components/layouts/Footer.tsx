import React from 'react'
import menu from '@/constants/menu.json';
import {MenuItem} from "@/types/navigation.type";
import useCountry from "@/hooks/country";
import useTheme from "@/hooks/theme";

const Footer: React.FC = () => {

    const country = useCountry();
    const {theme, toggleTheme} = useTheme();

    return (
        <footer className={"bg-gray-100 dark:bg-gray-900 dark:text-gray-500"}>
            <div className={"p-4 border-b border-b-gray-300 dark:border-b-gray-700 flex items-center gap-3"}>
                <p>{country}</p>
                <button onClick={toggleTheme}>
                    Dark theme: {theme === 'light' ? 'off' : 'on'}
                </button>
            </div>
            <div className={"flex justify-between flex-col gap-3 lg:flex-row items-center p-4 flex-wrap"}>
                <ul className={"gc_menu-container"}>
                    {menu.footerLeftMenu.map((m: MenuItem, i: number) => (
                        <li key={i}>
                            <a href={m.path}>{m.label}</a>
                        </li>
                    ))}
                </ul>
                <ul className={"gc_menu-container"}>
                    {menu.footerRightMenu.map((m: MenuItem, i: number) => (
                        <li key={i}>
                            <a href={m.path}>{m.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
