/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                accent: '#00f0ff',
            },
            fontFamily: {
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }
        },
    },
    plugins: [],
}
