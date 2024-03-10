/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      screens: {
        'sm': '520px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px'
      },
      backgroundImage: {
        'teaser-bg': 'url("images/teaser-bg.jpg")',
        'small-group': 'url("images/small-group.jpg")',
        'medium-group': 'url("images/medium-group.jpg")',
        'large-group': 'url("images/large-group.jpg")',
        'to-top-white-transparent': 'linear-gradient(to top, white, transparent)',
        'contacts-teaser-bg': 'url("images/contacts-teaser-bg.jpg")',
        'about-us-teaser-bg': 'url("images/slider-order.jpg")',
        'services-teaser-bg': 'url("images/services-teaser-bg.jpg")',
        'cross': 'url("images/close-cross.svg")',
        'blue-spots': 'url("images/bg-blue-spots.png")',
        'advantages-bg': 'url("images/advantages-bg.png")',
        'trainer-nicolay': 'url("images/trainer-nicolay.jpg")',
        'trainer-ivan': 'url("images/trainer-ivan.jpg")',
        'groups-bg': 'url("images/groups-bg.png")',
        'about-bg': 'url("images/about-bg.png")'
      },
      colors: {
        'red': '#f33636',
        'gray': 'rgba(249,249,249,1.00)',
        'gray-text': '#67768e',
        'gray-border': 'rgba(0,0,0,0.25)',
        'blue-text': '#060097',
        'light-purple': '#f9f6fe',
        'blue': '#3858e9',
        'green': '#34AA56'
      },
      boxShadow: {
        'header': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        'inset-top': 'inset 0 170px 100px 0 rgba(0,0,0,.9)',
        'quote': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        'prices': 'rgba(99, 99, 99, 0.2) 0px 0px 15px 2px'
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px'
      },
      backgroundPosition: {
        'left-of-center': '40% 100%'
      },
      borderRadius: {
        'circle': '50%'
      }
    },
  },
  plugins: [],
}
