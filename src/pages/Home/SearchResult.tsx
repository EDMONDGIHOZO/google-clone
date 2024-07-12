import React from "react";
import {useParams} from 'react-router-dom';
import Wrapper from "@/components/layouts/Wrapper";
import SearchBar from "@/components/common/SearchBar";

const SearchResult: React.FC = () => {

    const {query} = useParams<{ query: string }>();

    return (
        <Wrapper>
            <SearchBar/>
            <hr className={"my-10"}/>
            <div className={"mx-auto p-10 w-full rounded-xl my-10 lg:max-w-4xl border border-gray-500"}>
                <p>SEARCH RESULTS for {query}</p>
            </div>
        </Wrapper>
    )
}


export default SearchResult;