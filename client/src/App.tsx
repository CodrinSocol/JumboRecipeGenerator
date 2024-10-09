import React from 'react';
import Footer from "./components/FooterNavigation";

function App() {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-row items-center justify-center">
            <div className={"mockup-phone w-[440px] h-[956px]"}>
                <div className="camera"></div>
                <div className="display w-full h-full bg-white flex flex-col justify-between">
                    <div></div>
                    <Footer/>
                </div>
            </div>
        </div>
    );

}
export default App;

