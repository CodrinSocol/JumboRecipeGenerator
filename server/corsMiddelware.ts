// lib/corsMiddleware.js
import Cors from 'cors';

// Initializing the CORS middleware
const cors = Cors({
    origin: 'https://jumbo-recipe-generator.vercel.app', // Allow your specific domain
    methods: ['POST'], // Define allowed methods
    credentials: false,  // Enable credentials if necessary
    allowedHeaders: ['Content-Type'],  // Customize allowed headers if needed
    preflightContinue: true,  // To ensure preflight requests are handled properly
});

// Helper function to run the middleware
export function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default cors;
