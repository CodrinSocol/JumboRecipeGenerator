import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

// Define the type for a message
type Message = {
    text: string | ReactNode; // Allow text to be either a string or ReactNode (JSX)
    isUser: boolean;
};

const recipe = `Pasta Carbonara:\n\n**Ingredients:**\n- 200g Spaghetti\n- 100g Pancetta or Bacon\n- 2 large eggs\n- 50g Parmesan cheese\n- Black pepper\n- Salt\n\n**Instructions:**\n1. Boil the spaghetti in salted water until al dente.\n2. While pasta is boiling, fry the pancetta/bacon until crispy.\n3. Beat eggs in a bowl, add grated Parmesan, and mix.\n4. Once spaghetti is cooked, drain it and toss in the pan with pancetta.\n5. Off the heat, quickly toss the spaghetti with the egg mixture.\n6. Season with black pepper and serve immediately.`;

const missingIngredients = ['Pancetta', 'Parmesan cheese'];

export function RecipeChat({ setSelected }: { setSelected: React.Dispatch<React.SetStateAction<number>> }) {
    const [messages, setMessages] = useState<Message[]>([ // Use the Message type
        { text: "Hi! I can help you make recipes. What ingredients do you have?", isUser: false },
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [secondMessageSent, setSecondMessageSent] = useState(false);
    const messageEndRef = useRef<HTMLDivElement | null>(null);

    // Scroll to the bottom whenever messages change
    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleSend = () => {
        if (inputMessage.trim() === '') return;

        // Add the user's message to the chat
        const userMessage: Message = { text: inputMessage, isUser: true };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setInputMessage('');

        // AI's first response after user enters ingredients
        setTimeout(() => {
            const aiMessage1: Message = { text: "Great! Here's a recipe you can try with those ingredients.", isUser: false };
            setMessages(prevMessages => [...prevMessages, aiMessage1]);

            if (!secondMessageSent) {
                setTimeout(() => {
                    // Send the Pasta Carbonara recipe
                    const pastaCarbonaraMessage: Message = { text: recipe, isUser: false };
                    setMessages(prevMessages => [...prevMessages, pastaCarbonaraMessage]);

                    // Send missing ingredients message
                    setTimeout(() => {
                        const missingIngredientsMessage: Message = {
                            text: `You are missing the following ingredients: ${missingIngredients.join(', ')}. Would you like to add the missing ingredients to your shopping cart?`,
                            isUser: false,
                        };
                        setMessages(prevMessages => [...prevMessages, missingIngredientsMessage]);

                        // Send the emoji message as a new message
                        setTimeout(() => {
                            const emojiMessage: Message = {
                                text: (
                                    <div className="flex gap-2 mt-2">
                                        <FaThumbsUp
                                            onClick={handleAddToCart}
                                            className="text-yellow-400 cursor-pointer"
                                        />
                                        <FaThumbsDown
                                            onClick={handleDislike}
                                            className="text-red-400 cursor-pointer"
                                        />
                                    </div>
                                ),
                                isUser: false,
                            };
                            setMessages(prevMessages => [...prevMessages, emojiMessage]);
                        }, 1000);
                    }, 2000);
                }, 2000);
                setSecondMessageSent(true);
            }
        }, 1500);
    };

    const handleAddToCart = () => {
        setSelected(4); // Navigate to the shopping cart
    };

    const handleDislike = () => {
        // Handle the dislike action, if necessary
        console.log("Disliked the suggestion.");
    };

    return (
        <div className="w-full h-full flex flex-col p-4 gap-4">
            {/* Header */}
            <div className="text-center text-xl font-semibold mb-4 mt-4">Recipe Maker</div>

            {/* Message container with scrolling */}
            <div className="flex flex-col gap-2 flex-1 p-4" style={{ maxHeight: '70vh', overflow: 'hidden' }}>
                <div className="overflow-y-auto scrollbar-hidden flex-1">
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
                                {message.text} {/* Directly render text which can be either string or JSX */}
                            </div>
                        </div>
                    ))}
                    <div ref={messageEndRef} />
                </div>
            </div>

            {/* Input and send button */}
            <div className="flex items-center gap-2">
                <input
                    className="input bg-gray-100 text-black flex-1 border border-gray-300 rounded-md p-2"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleSend} className="btn bg-yellow-400 hover:bg-yellow-500 text-black">
                    Send
                </button>
            </div>
        </div>
    );
}
