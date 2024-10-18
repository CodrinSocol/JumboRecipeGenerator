import React, {useState, useRef, ReactNode, useEffect} from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import {interactWithOpenAI} from "../../../processing/openAiAPI";
import {getIngredients, JumboProduct} from "../../../processing/AHApi";

const jumbo = require('../Homepage/jumbologo.png')

// Define the type for a message
export interface Message {
    text: string | ReactNode; // Allow text to be either a string or ReactNode (JSX)
    isUser: boolean;
    isLoading: boolean;
};

interface RecipeChatProps {
    setSelected: (index: number) => void;
    setJumboProducts: React.Dispatch<React.SetStateAction<JumboProduct[]>>;
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export function RecipeChat({ setSelected, setJumboProducts, messages, setMessages }: RecipeChatProps) {
    const [inputMessage, setInputMessage] = useState('');
    const [loading, setLoading] = useState<boolean>(false);
    // const [currentProducts, setCurrentProducts] = useState<JumboProduct[]>([]);
    const messageEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleButtonClick = () => {
        const userMessage: Message = { text: inputMessage, isUser: true, isLoading: false };
        const loadingMessage: Message = { text:
                <div className={"w-16 h-16 flex flex-row items-center justify-center"}>
                    <span className={"loading loading-dots text-warning text-xl"}></span>
                </div>
            , isUser: false, isLoading: true
        };
        setMessages(prevMessages => [...prevMessages, userMessage, loadingMessage]);
        setInputMessage('');
        void handleSend();
    }
    const handleSend = async () => {
        if (inputMessage.trim() === '') return;
        setLoading(true)

        const {ingredientList, recipe} = await interactWithOpenAI(inputMessage);
        const jumboProducts = await fetch("https://jumbo-recipe-generator-ek73.vercel.app/api", {
            method: "POST",
            body: JSON.stringify({ingredientList}),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        if(jumboProducts.ok) {
            const data = await jumboProducts.json() as JumboProduct[]
            console.log(data)
            setJumboProducts(prevState => [...prevState, ...data]);

        }

        const aiMessage1: Message = {
            text: "Great! Here's a recipe you can try with those ingredients.",
            isUser: false,
            isLoading: false
        };
        setMessages(prevMessages => [...prevMessages.filter(x => !x.isLoading), aiMessage1]);


        const recipeMessageReply: Message = {text: recipe, isUser: false, isLoading: false};
        await addMessageWithDelay(recipeMessageReply);

        // Send missing ingredients message
        const missingIngredientsMessage: Message = {
            text: `You are missing the following ingredients: ${ingredientList.join(', ')}. Would you like to add the missing ingredients to your shopping cart?`,
            isUser: false,
            isLoading: false,
        };

        await addMessageWithDelay(missingIngredientsMessage);
        const emojiMessage: Message = {
            text: (
                <div className="flex gap-2 mt-2">
                    <FaThumbsUp
                        onClick={handleAddToCart}
                        className="text-yellow-400 cursor-pointer"
                    />
                    <FaThumbsDown
                        className="text-red-400 cursor-pointer"
                    />
                </div>
            ),
            isUser: false,
            isLoading: false,
        };
        await addMessageWithDelay(emojiMessage);

        setLoading(false)
    }

    const addMessageWithDelay = async (newMessage: Message) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setMessages(prevMessages => [...prevMessages, newMessage]);
    }

    const handleAddToCart = () => {
        setSelected(4); // Navigate to the shopping cart
    };

    return (
        <div className="w-full h-full flex flex-col p-4 gap-4">
            <img src={jumbo} alt={'asd'} className={"pt-1 rounded-xl object-contain w-32 h-fit"}/>
            <div className="h-full w-full flex overflow-y-auto flex-col gap-2">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-2`}
                    >
                        <div
                            className={`p-3 rounded-lg ${
                                message.isUser ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-black'
                            } max-w-xs`}
                        >
                            {typeof message.text === 'string' ? message.text.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br/>
                                </React.Fragment>
                            )) : message.text}
                        </div>
                    </div>
                ))}
                <div ref={messageEndRef}/>
            </div>

            {/* Input and send button */}
            <div className="flex items-center gap-2">
                <input
                    className="input bg-gray-100 text-black flex-1 border border-gray-300 rounded-md p-2"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleButtonClick} disabled={loading}
                        className="btn bg-yellow-400 hover:bg-yellow-500 text-black">
                    Send
                </button>
            </div>
        </div>
    );
}
