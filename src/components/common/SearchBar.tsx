import React, {ChangeEvent, useState} from 'react';
import {BsSearch} from "react-icons/bs";
import {mediaPaths} from "@/assets/media-paths";
import useAutocomplete from "../../hooks/search";
import QuickLinks from "@/components/common/QuickLinks";
import useClickOutside from "@/hooks/click-outside";


const SearchBar: React.FC = () => {
    const [keywordValue, setKeywordValue] = useState<string>('');
    const maxChars = 3;
    const {data: suggestions, loading, error} = useAutocomplete({query: keywordValue, limit: 6});
    const [showSearchingDetails, setShowSearchingDetails] = useState(false)


    const handleCloseSuggestions = () => {
        setShowSearchingDetails(false)
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setShowSearchingDetails(true)
        const value = event.target.value;
        setKeywordValue(value)
    }

    const ref = useClickOutside(handleCloseSuggestions);

    return (
        <div className={"lg:max-w-2xl mx-auto"}>
            <div
                className={`border dark:border-gray-400 border-gray-300 flex mt-5 p-3 hover:shadow cursor-pointer ${keywordValue.length > maxChars && showSearchingDetails ? 'rounded-t-2xl border-b-white' : 'rounded-full'}`}>
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
            {showSearchingDetails ? <div ref={ref}>
                {loading && <div
                    className="absolute lg:max-w-2xl dark:bg-gray-900 lg:mx-auto mx-8 left-0 right-0 mt-1 bg-white shadow-lg z-10 p-2">Searching
                    ...</div>}
                {error &&
                    <div
                        className="absolute lg:max-w-2xl lg:mx-auto left-0 right-0 mt-1  dark:bg-gray-800 bg-white border border-gray-300 border-t-transparent mx-8 rounded-b-xl shadow-lg z-10 p-2 text-red-500">{error}</div>}
                {suggestions.length > 0 && keywordValue.length > maxChars && (
                    <div
                        className="absolute left-0 lg:max-w-2xl lg:mx-auto mx-8 dark:bg-gray-900 right-0 mt-1 rounded-b-2xl border border-t-0 border-gray-300 bg-white shadow-lg z-10">
                        {suggestions.map((suggestion) => (
                            <div
                                key={suggestion.id}
                                className="border-b p-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer flex justify-between items-center"
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
                        ))}
                        <div className={"my-4"}>
                            <QuickLinks/>
                        </div>
                    </div>
                )}
            </div> : null}
        </div>
    )
}

export default SearchBar;