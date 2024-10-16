import React, { useState, useRef, useEffect } from 'react';

export function RecipeChat() {
    const [messages, setMessages] = useState([
        { text: "Hi! I can help you make recipes. What ingredients do you have?", isUser: false },
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [secondMessageSent, setSecondMessageSent] = useState(false);
    const messageEndRef = useRef<HTMLDivElement | null>(null);

    // Function to scroll to the bottom of the chat whenever a new message is added
    const scrollToBottom = () => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Scroll to the bottom whenever messages change
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (inputMessage.trim() === '') return;

        // Add the user's message to the chat
        const userMessage = { text: inputMessage, isUser: true };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInputMessage('');

        // AI's first response after user enters ingredients
        setTimeout(() => {
            const aiMessage1 = { text: "Great! Here's a recipe you can try with those ingredients.", isUser: false };
            setMessages(prevMessages => [...prevMessages, aiMessage1]);

            // Send the Pasta Carbonara recipe after a second delay
            if (!secondMessageSent) {
                setTimeout(() => {
                    const pastaCarbonaraRecipe = {
                        text: `Here’s a recipe for Pasta Carbonara:\n\n**Ingredients:**\n- 200g Spaghetti\n- 100g Pancetta or Bacon\n- 2 large eggs\n- 50g Parmesan cheese\n- Black pepper\n- Salt\n\n**Instructions:**\n1. Boil the spaghetti in salted water until al dente.\n2. While pasta is boiling, fry the pancetta/bacon until crispy.\n3. Beat eggs in a bowl, add grated Parmesan, and mix.\n4. Once spaghetti is cooked, drain it and toss in the pan with pancetta.\n5. Off the heat, quickly toss the spaghetti with the egg mixture.\n6. Season with black pepper and serve immediately.`,
                        isUser: false,
                    };
                    setMessages(prevMessages => [...prevMessages, pastaCarbonaraRecipe]);
                }, 2000); // Second delay for recipe

                setSecondMessageSent(true);
            }
        }, 1500); // First delay for general response
    };

    return (
        <div className="w-full h-full flex flex-col p-4 gap-4">
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
                                {message.text}
                            </div>
                        </div>
                    ))}
                    <div ref={messageEndRef} />
                </div>
            </div>

            {/* Input and send button */}
            <div className="flex items-center gap-2">
                <input
                    className="input input-primary flex-1"
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
