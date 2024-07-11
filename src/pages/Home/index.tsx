import React from 'react';
import Wrapper from "@/components/layouts/Wrapper";
// @ts-ignore
import logo from '@/assets/images/brand/logo.svg';
import SearchBar from "@/components/common/SearchBar";
import languages from '@/constants/offered-languages.json';


const Home: React.FC = () => {
    return (
        <Wrapper>
            <div className={"pt-4 lg:pt-16"}>
                <img className={"gc_search-hero-logo"} src={logo} alt="google-logo"/>
                <SearchBar />
                <div className={"space-x-4 flex justify-start flex-col items-center gap-4 my-5"}>
                    <div className={"space-x-4 lg:flex justify-center hidden"}>
                        <button className={"gc_button"}>Google Search</button>
                        <button className={"gc_button"}>I'm Feeling Lucky</button>
                    </div>
                    <div>
                        <p>
                            Google offered in:
                            {
                                languages.map((l:string, i: number) => (
                                    <a className={"text-blue-800 dark:text-blue-400 mx-1"} key={i} href={`google.com/${l}`}>{l}</a>
                                ))
                            }
                        </p>
                    </div>
                </div>

            </div>
        </Wrapper>
    )
}

export default Home;