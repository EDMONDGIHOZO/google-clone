import React from 'react';
import Wrapper from "@/components/layouts/Wrapper";
// @ts-ignore
import logo from '@/assets/images/brand/logo.svg';


const Home: React.FC = () => {
    return (
        <Wrapper>
            <div className={"pt-12"}>
                <img className={"gc_search-hero-logo"} src={logo} alt="google-logo"/>
            </div>
        </Wrapper>
    )
}

export default Home;