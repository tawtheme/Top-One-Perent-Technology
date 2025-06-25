/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./src/**/*.{html,ts}",
    ],

    theme: {
        extend: {
            fontFamily: {
                'sans': ['"Instrument Sans"', 'sans-serif'],
                'grotesk': ['"Space Grotesk"', 'sans-serif'],
            },
            colors: {
                'brand-dark': '#0D0D0D',
                'brand-light': '#FFFD73',
                'brand-gray': '#cccccc',
                'brand-border': '#FFFD73',
            },
            backgroundImage: {
                'hero-pattern': "url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%231a1a1a%22 fill-opacity=%220.4%22 fill-rule=%22evenodd%22%3E%3Cpath d=%22M0 40L40 0H20L0 20M40 40V20L20 40%22/%3E%3C/g%3E%3C/svg%3E')",
                'service-gradient': "linear-gradient(to right, #1a2a29, #101a24)",
            }
        },
    },
    
    plugins: [],    
} 