import React, { ReactElement, useState } from 'react';
import { Footer } from "./components/FooterNavigation";
import { Homepage } from "./components/pages/Homepage/Homepage";
import { ShoppingCart } from "./components/pages/ShoppingCart/ShoppingCart";
import {Message, RecipeChat} from "./components/pages/RecipeChat/RecipeChat";
import {JumboProduct} from "./processing/AHApi";

function App() {
    const [selected, setSelected] = useState<number>(0);
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hi! I can help you make recipes. What ingredients do you have?", isUser: false, isLoading: false }
    ]);
    const [jumboProducts, setJumboProducts] = useState<JumboProduct[]>([]);


    return (
        <div className="w-[100vw] h-[100vh] flex flex-row items-center justify-center bg-white">
            <div className={"mockup-phone w-[440px] h-[956px]"}>
                <div className="camera"></div>
                <div className="display w-full h-full bg-white flex flex-col justify-between">
                    <div className={"flex w-full h-[calc(100%-70px)]"}>
                        {getContentToRender(selected, jumboProducts, setSelected, setJumboProducts, messages, setMessages)}
                    </div>
                    <Footer selected={selected} setSelected={setSelected} />
                </div>
            </div>
        </div>
    );
}

function getContentToRender(selected: number, jumboProducts: JumboProduct[], setSelected: (selected: number) => void, setJumboProducts: React.Dispatch<React.SetStateAction<JumboProduct[]>>, messages: Message[], setMessages:  React.Dispatch<React.SetStateAction<Message[]>>): ReactElement {
    switch (selected) {
        case 0: return <Homepage setSelected={setSelected} />;
        case 2: return <RecipeChat setSelected={setSelected} setJumboProducts={setJumboProducts} messages={messages} setMessages={setMessages}/>;
        case 4: return <ShoppingCart jumboProducts={jumboProducts}/>;
        default: return <div>Not implemented</div>;
    }
}

export default App;
