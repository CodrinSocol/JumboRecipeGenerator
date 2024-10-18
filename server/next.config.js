module.exports = {
    async rewrites() {
        return [
            {
                source: 'https://https://jumbo-recipe-generator.vercel.app/',
                destination: 'https://jumbo-recipe-generator-ek73.vercel.app/api',
            },
        ]
    },
};