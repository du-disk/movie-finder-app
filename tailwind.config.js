/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/*.{html,js}', './src/*.{html,js}', './src/**/*.{html,js}'],
    theme: {
        extend: {
            maxHeight: {
                '85vh': '85vh',
            },
        },
    },
    plugins: [],
};
