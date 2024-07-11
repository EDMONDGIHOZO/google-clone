import React from 'react';


const QuickLinks: React.FC = () => {
    return (
        <div className={"space-x-4 lg:flex justify-center hidden"}>
            <button className={"gc_button"}>Google Search</button>
            <button className={"gc_button"}>I'm Feeling Lucky</button>
        </div>
    )
}

export default QuickLinks;