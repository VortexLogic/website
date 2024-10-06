const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "content/**/*.md",
        "content/**/*.html",
        "layouts/**/*.html",
        "i18n/**/*.yaml",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        colors: {
            primary: {
                DEFAULT: "#F37000",
                50: "#fff9ec",
                100: "#fff2d3",
                200: "#ffe2a5",
                300: "#ffcb6d",
                400: "#ffa932",
                500: "#ff8e0a",
                600: "#f37000",
                700: "#cc5502",
                800: "#a1420b",
                900: "#82380c",
                950: "#461a04",
            },
            ccgray: {
                800: "#1e1e23",
            },
            ccorange: {
                50: "#faf5eb",
                100: "#ffad63",
                300: "#ff8c50",
                400: "#ff8253",
                600: "#ff7d58",
                800: "#ff6e4b",
            },
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            slate: colors.slate,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            orange: colors.orange,
        },
        extend: {},
        fontFamily: {
            sans: ["Rubik", "sans-serif"],
            display: ["Lustra", "sans-serif"],
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ],
}
