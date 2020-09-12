module.exports = {
    plugins: [
        require("postcss-easy-import"),
        require("tailwindcss"),
        process.env.NODE_ENV === "production" &&
        require("@fullhuman/postcss-purgecss")({
            // Update Purge CSS in production
            content: [
                "./pages/**/*.{js,jsx,ts,tsx}",
                "./components/**/*.{js,jsx,ts,tsx}",
                "./styles/**/*.{css,scss}",
                "./node_modules/swiper/**/**/*.{css,scss}"
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        }),
        require("autoprefixer"),
        require("cssnano"),
    ],
}
