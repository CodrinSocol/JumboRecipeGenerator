import {ReactElement, useState} from 'react';
import {Footer} from "./components/FooterNavigation";
import {Homepage} from "./components/pages/Homepage/Homepage";
import {ShoppingCart} from "./components/pages/ShoppingCart/ShoppingCart";

function App() {
    const [selected, setSelected] = useState<number>(0);

    return (
    <div className="w-[100vw] h-[100vh] flex flex-row items-center justify-center">
        <div className={"mockup-phone w-[440px] h-[956px]"}>
            <div className="camera"></div>
            <div className="display w-full h-full bg-white flex flex-col justify-between">
                <div className={"flex flex-1"}>
                    {getContentToRender(selected)}
                </div>
                <Footer selected={selected} setSelected={setSelected}/>
            </div>
        </div>
    </div>
    );
}

function getContentToRender(selected: number): ReactElement {
    switch(selected) {
        case 0: return <Homepage />;
        case 4: return <ShoppingCart />;
        default: return <div>Not implemented</div>;
    }
}

export default App;
