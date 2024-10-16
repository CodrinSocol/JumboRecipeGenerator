import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export async function interactWithOpenAI(input: string): Promise<{ingredientList: string[], recipe: string}> {

    const systemMessage = "You are a helpful chef assistant that helps with creating recipes from incomplete lists of ingredients." +
        "The chef will give you a list of ingredients and ask you to make a recipe." +
        "You will reply with a list of missing ingredients and a step-by-step recipe." +
        "You need to reply with all the information in one message." +
        "Do not include alternatives (like vegetarian options) or aggregate ingredients together (like fresh herbs). Be specific." +
        "Please write your missing ingredient list in Dutch and the recipe in English." +
        "Here is an example of how to structure your answer:" + res;

    console.log(systemMessage)
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    "role": "system",
                    "content": [
                        {
                            "type": "text",
                            "text": systemMessage
                        }
                    ]
                },
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": "These are ingredients I have in my fridge: yogurt, cocoa powder, garlic, paprika, sugar. Generate a list of missing ingredients and a step-by-step recipe."
                        }
                    ]
                }
            ]
        });
        const aiReply = response.choices[0].message.content ?? "";
        console.log(response.choices[0].message);
        const ingredients = parseIngredientsToList(aiReply)
        const recipe = parseRecipeStepsToString(aiReply)
        console.log("ingredients", ingredients)
        console.log("recipe", recipe)
        return {ingredientList: ingredients, recipe: recipe};
    }
    catch(e) {
        console.warn(e)
    }
    return {ingredientList: [], recipe: ""};
}


const res = "\"Missing ingredients:\n" +
    "- Olijfolie\n" +
    "- Tomatensaus\n" +
    "- Zout\n" +
    "- Peper\n" +
    "- Parmesankaas\n" +
    "- Petersille\n" +
    "- Dille \n"+
    "\n" +
    "Instructions:\n" +
    "1. Cook pasta according to package instructions until al dente. Drain and set aside.\n" +
    "2. In a pan, heat olive oil over medium heat.\n" +
    "3. Add diced onions and minced garlic to the pan. Cook until onions are translucent and garlic is fragrant.\n" +
    "4. Pour in tomato sauce and season with salt, pepper, and Italian seasoning. Let simmer for a few minutes.\n" +
    "5. Add the cooked pasta to the sauce mixture and toss to combine, ensuring the pasta is well-coated.\n" +
    "6. Serve the pasta in bowls and top with grated Parmesan cheese.\n" +
    "7. Enjoy your flavorful pasta dish!\""


function parseIngredientsToList(rawInput: string): string[] {
    // ingredient list has some text before it. every list item starts with a - and a space and ends with a newline character. Ignore all text before the list and after it.
    // split the string by newline characters
    const lines = rawInput.split("\n");
    // filter out all lines that do not start with a - and a space
    const ingredients = lines.filter(line => line.startsWith("- "));
    // remove the - and space from each ingredient
    return ingredients.map(ingredient => ingredient.slice(2));
}

function parseRecipeStepsToString(rawInput: string): string {
    // instruction list is added immediately after the ingredients list. return the string after the ingredient list
    const lines = rawInput.split("\n");
    // find the index of the first instruction
    const start = lines.findIndex(line => line.includes("Instructions:"));
    // return the string after the instruction list
    return lines.slice(start + 1).join("\n");
}