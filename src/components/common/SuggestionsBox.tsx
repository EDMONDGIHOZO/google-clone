import React from 'react';
import {ResultsType} from "@/types/results.type";

interface SuggestionBoxInterface {
    data: ResultsType[]
}


const SuggestionsBox: React.FC<SuggestionBoxInterface> = ({data}) => {
    return <>
        {data?.map((suggestion: ResultsType) => (
            <div
                key={suggestion.id}
                className="gc_result-suggestion-item"
                // onClick={() => handleSuggestionClick(suggestion.name)}
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