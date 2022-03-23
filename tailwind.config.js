const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    corePlugins: {
        // preflight: false,
    },
    content: ['./public/*.{html,js}'],
    theme: {
        screens: {
            xs: '375px',
            ...defaultTheme.screens,
        },
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1.5rem',
                    md: '2.25rem',
                    xl: '0',
                },
            },
            colors: {
                primary: {
                    800: '#1C2D8C',
                    900: '#162473',
                },
                gray: {
                    200: '#d6d6d6',
                    300: '#bfbfbf',
                },
            },
            fontFamily: {
                sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {},
            spacing: {},
            maxWidth: {
                micro: '10ch',
                compact: '30ch',
                short: '45ch',
                long: '65ch',
            },
            maxHeight: {},
            zIndex: {
                60: '60',
                70: '70',
                80: '80',
                80: '80',
                90: '90',
                100: '100',
            },
        },
    },
    plugins: [],
};
