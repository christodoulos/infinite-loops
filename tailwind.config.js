const plugin = require('tailwindcss/plugin')

module.exports = {
    prefix: '',
    purge: {
      content: [
        './apps/**/*.{html,ts}',
        './libs/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      backgroundColor: ({after}) => after(['invalid']),
      extend: {},
    }, 
    plugins: [
      require('@tailwindcss/forms'),
      plugin(function({ addVariant, e }) {
        addVariant('invalid', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${e(`invalid${separator}${className}`)}:invalid`
          })
        })
      })
    ],
};
