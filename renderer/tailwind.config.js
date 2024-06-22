// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./renderer/layouts/**/*.{js,ts,jsx,tsx,mdx}",
        "./renderer/pages/**/*.{js,ts,jsx,tsx}",
        "./renderer/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {}
    },
    darkMode: "class",
    plugins: [nextui()]
};
