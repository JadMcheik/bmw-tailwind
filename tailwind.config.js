/** @type {import('tailwindcss').Config} */
module.exports = {








  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
    

      dropShadow: {
        'custom': '3px 3px 3px rgba(3, 26, 102, 0.4)',
      
      },

      screens: {


        'min-2000':{'min' : '2000px'},

'min-1500':{'min' : '1500px'},

'max-1300':{'max':'1300px'},

'max-1000':{'max':'1000px'},

'max-700':{'max':'700px'},

'max-500':{'max':'500px'},

'max-400':{'max':'400px'},
      },




      fontFamily: {
        customFont: ['"customFont"', "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", 'Geneva', 'Verdana', 'sans-serif'],

          Poland:["Poland","sans-serif"],

         'georgia': ['Georgia', 'Times New Roman', 'Times', 'serif'],

        // Add more custom font families as needed
      },

     
      colors: { 
        'custom-dark-blue': '#272727', 
        'custom-bg-color':'#f0f2f5',
        'link-color':'#606060',
        'menu-link-hover':'#12436b',
        'item-bg-color':'#ffffff',
       
    }, 


      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
