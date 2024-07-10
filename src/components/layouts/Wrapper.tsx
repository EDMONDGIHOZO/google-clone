import React, {ReactNode} from "react";
import Header from "@/components/layouts/Header";


interface WrapperProps {
    children: ReactNode
}

const Wrapper:React.FC<WrapperProps> = ({children}) => {
    return (
        <div className={"wrapper"}>
            <Header />
            <main className={"main"}>
                {children}
            </main>
        </div>
    )
}

export default Wrapper;