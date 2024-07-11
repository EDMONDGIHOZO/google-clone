import React, {ChangeEvent, useState} from 'react';
import {BsSearch} from "react-icons/bs";
import {mediaPaths} from "@/assets/media-paths";
import useAutocomplete from "../../hooks/search";
import QuickLinks from "@/components/common/QuickLinks";


const SearchBar: React.FC = () => {
    const [keywordValue, setKeywordValue] = useState<string>('');
    const maxChars = 3;
    const {data: suggestions, loading, error} = useAutocomplete({query: keywordValue, limit: 6});

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setKeywordValue(value)
    }

    return (
        <>
            <div
                className={`lg:max-w-2xl mx-auto border dark:border-gray-400 flex mt-5 p-3 hover:shadow cursor-pointer ${keywordValue.length > maxChars ? 'rounded-t-2xl border-b-white' : 'rounded-full'}`}>
                <div className="mr-2">
                    <BsSearch className={"h-6"}/>
                </div>
                <input value={keywordValue} onChange={(event) => handleInputChange(event)} type="search"
                       className="w-full outline-none bg-transparent" autoFocus={true}/>
                <div className="">
                    <img src={mediaPaths.microPhoneIcon} alt="microphone" className={"h-6"}/>
                </div>
                <div className="ml-2">
                    <img src={mediaPaths.cameraIcon} alt="camera" className={"h-6"}/>
                </div>
            </div>
            {loading && <div className="absolute lg:max-w-2xl mx-auto left-0 right-0 mt-1 bg-white shadow-lg z-10 p-2">Searching ...</div>}
            {error &&
                <div className="absolute lg:max-w-2xl mx-auto left-0 right-0 mt-1 bg-white shadow-lg z-10 p-2 text-red-500">{error}</div>}
            {suggestions.length > 0 && keywordValue.length > maxChars && (
                <div
                    className="absolute left-0 lg:max-w-2xl mx-auto right-0 mt-1 rounded-b-2xl border border-t-0 border-gray-300 bg-white shadow-lg z-10">
                    {suggestions.map((suggestion) => (
                        <div
                            key={suggestion.id}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            // onClick={() => handleSuggestionClick(suggestion.name)}
                        >
                            {suggestion.title}
                        </div>
                    ))}
                    <QuickLinks />
                </div>
            )}
        </>
    )
}

export default SearchBar;