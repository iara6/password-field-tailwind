module.exports = {
  content: ["./index.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        'font-clr-1': 'rgb(45, 45, 45)',
        'font-clr-2': 'rgb(99, 89, 126)',
        'clr': 'rgb(134, 46, 189)',
        'clr-1': 'rgba(177, 99, 225, 0.3)',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle at 50% 0%, rgb(88, 54, 109) 16.4%, rgb(45, 46, 72) 68.2%, rgb(33, 29, 44) 99.1%)',
      },
         keyframes: {
      glowing: {
        '0%': { boxShadow: '0 0 15px rgb(217, 159, 255, 0.5), 0 0 35px rgb(217, 159, 255, 0.7)' },
        '100%': { boxShadow: '0 0 15px rgb(217, 159, 255, 1), 0 0 35px rgb(217, 159, 255, 1)' },
      },
    },
    animation: {
      glowing: 'glowing 1.5s ease-in-out infinite alternate',
    },

    },
  },
  plugins: [],
};

/* :root {
  --font-clr-1: rgb(45, 45, 45);
  --font-clr-2: rgb(99, 89, 126);
  --clr: rgb(134, 46, 189);
  --clr-1: rgba(177, 99, 225, 0.3);
}
 */