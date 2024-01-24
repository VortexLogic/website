/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "content/**/*.md",
        "content/**/*.html",
        "layouts/**/*.html",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin'),
    ],
}
