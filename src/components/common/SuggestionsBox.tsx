import React from 'react';
import {useNavigate} from 'react-router-dom';
import {ResultsType} from "@/types/results.type";

interface SuggestionBoxInterface {
    data: ResultsType[]
}


const SuggestionsBox: React.FC<SuggestionBoxInterface> = ({data}) => {

    const navigate = useNavigate();

    const handleSuggestionClick = (suggestion: string) => {
        navigate(`/search-result/${suggestion}`);
    };

    return <>
        {data?.map((suggestion: ResultsType) => (
            <div
                key={suggestion.id}
                className="gc_result-suggestion-item"
                onClick={() => handleSuggestionClick(suggestion.title)}
            >
                <p className={"w-11/12 truncate"}>
                    {suggestion.title}
                </p>
                {suggestion.thumbnail ?
                    <img className={"w-8 h-8 object-fit rounded-full"} src={suggestion.thumbnail.lqip}
                         alt={suggestion.thumbnail.alt_text}/> : null
                }
            </div>
        ))
        }</>
}


export default SuggestionsBox;