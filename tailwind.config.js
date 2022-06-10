const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./dist/*.{html,js}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
                md: '2.25rem',
                xl: '0',
            },
        },
        screens: {
            xs: '375px',
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                brand: "rgb(var(--color-brand) / <alpha-value>)",
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
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
    plugins: [
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/line-clamp'),
        // require('@tailwindcss/typography')
    ],
}
