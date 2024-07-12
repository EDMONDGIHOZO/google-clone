import React, {ChangeEvent, useState} from 'react';
import {BsSearch} from "react-icons/bs";
import {mediaPaths} from "@/assets/media-paths";
import useAutocomplete from "../../hooks/search";
import QuickLinks from "@/components/common/QuickLinks";
import useClickOutside from "@/hooks/click-outside";
import SuggestionsBox from "@/components/common/SuggestionsBox";
import LoadingBar from "@/components/common/LoadingBar";


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
                className={`gc_search-input-container ${keywordValue.length > maxChars && showSearchingDetails ? 'rounded-t-2xl border-b-white' : 'rounded-full'}`}>
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
                {loading && <LoadingBar/>}
                {error &&
                    <div
                        className="gc_result-container text-red-500">{error}</div>}
                {suggestions.length > 0 && keywordValue.length > maxChars && (
                    <div
                        className="gc_result-container">
                        <SuggestionsBox data={suggestions}/>
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