/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./src/**/*.{html,js,svelte,ts}', './src/*.{html,js}'],
    relative:true,
    transform:(content) => content.replace(/taos:/g, ''),
},
  theme: {
    extend: {}
  },
  plugins: [require('taos/plugin')],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
};

// module.exports = {
//   content: {
//     relative: true,
//     transform: (content) => content.replace(/taos:/g, ''),
//     files: ['./src/*.{html,js}'],
//   },
// }

// module.exports = {
//   plugins: [
//     require('taos/plugin')
//   ],
// }

// module.exports = {
//   safelist: [
//     '!duration-[0ms]',
//     '!delay-[0ms]',
//     'html.js :where([class*="taos:"]:not(.taos-init))'
//   ]
// }