import React, { ReactElement, useState } from 'react';
import { Footer } from "./components/FooterNavigation";
import { Homepage } from "./components/pages/Homepage/Homepage";
import { ShoppingCart } from "./components/pages/ShoppingCart/ShoppingCart";
import { RecipeChat } from "./components/pages/RecipeChat/RecipeChat";

function App() {
    const [selected, setSelected] = useState<number>(0);

    return (
        <div className="w-[100vw] h-[100vh] flex flex-row items-center justify-center">
            <div className={"mockup-phone w-[440px] h-[956px]"}>
                <div className="camera"></div>
                <div className="display w-full h-full bg-white flex flex-col justify-between">
                    <div className={"flex flex-1"}>
                        {getContentToRender(selected, setSelected)}
                    </div>
                    <Footer selected={selected} setSelected={setSelected} />
                </div>
            </div>
        </div>
    );
}

function getContentToRender(selected: number, setSelected: React.Dispatch<React.SetStateAction<number>>): ReactElement {
    switch (selected) {
        case 0: return <Homepage setSelected={setSelected} />;
        case 4: return <ShoppingCart />;
        case 5: return <RecipeChat setSelected={setSelected} />;
        default: return <div>Not implemented</div>;
    }
}

export default App;
