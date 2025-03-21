import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        container: {
            center: true,
            screens: {
                xl: "1280px"
            }
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'robin-egg-blue': '#25CED1',
                'champagne-pink': '#FCEADE',
                'coral': '#FF8A5B',
                'bright-pink': '#EA526F',
                'soft-gray': '#F7F7F7',
                'dark-gray': '#333333',
            },
        },
    },

    plugins: [forms],
};
