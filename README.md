
# AI-based Recipe Generation for Jumbo Supermarkten

## Introduction
This project contains a small prototype of an AI-based recipe generation system for Jumbo Supermarkten. The system generates recipes based on a user-specified ingredient list and autofills the missing ingredients. 
This project contains a small mock-up of the Jumbo Supermarkten mobile app, to place the recipe generator in a realistic context. Due to limited time and resources, the project is a proof-of-concept and not a fully functional application.


This project was created for the group project of the course "Information Strategy", from the Master's in Business Information Management at the Erasmus University Rotterdam.
- **Course**: BM-01BIM _Information Strategy_
- **Academic Year**: 2024-2025
- **Team**: 10 ([click here for students](#contributors))

### Technologies Used
- `TypeScript` programming language;
- `React Framework` for the client application;
- `TailwindCSS` for styling the frontend components;
- `DaisyUI` for pre-built TailwindCSS-based UI components;
- `OpenAI API` for generating recipes based on user input _(GPT-4o-mini model)_.;

_Since there was no public Jumbo API for querying products, we have used the Albert Heijn API instead._


## Installation

### Prerequisites
For this project to run, you need to have an OpenAI API key. You can get one by following this tutorial [here](https://platform.openai.com/docs/quickstart).

After you have obtained your API key, create an `.env` file in the `/client` directory and add the following line:
```
REACT_APP_OPENAI_API_KEY=<YOUR_API_KEY>
```

You also need to have `Node.js` installed on your machine. You can download it [here](https://nodejs.org/en/download/).

You also need to have `yarn` enabled. You can install it by running the following command (Windows only):
```
corepack enable
```

### Installation Steps
1. Clone the repository:
```
git clone
```
2. Navigate to the `/client` directory:
```
cd client
```
3. Install the dependencies:
```
yarn install
```
4. Start the development server:
```
yarn start
```

## Contributors
These are the students from team 10 that have contributed to this project:

| Student          | ID         |
|------------------|------------|
| Codrin Socol     | _744294cs_ |
| David Peta       | _744425dp_ |
| Ioana Buia       | _741838ib_ |
| Alexandra Stancu | _697789ms_ |