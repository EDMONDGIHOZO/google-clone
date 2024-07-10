import React, {ReactNode} from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";


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
            <Footer />
        </div>
    )
}

export default Wrapper;