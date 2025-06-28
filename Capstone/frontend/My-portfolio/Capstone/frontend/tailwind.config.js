/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glow: {
          '0%, 100%': { opacity: '0.7', boxShadow: '0 0 5px hsl(var(--primary))' },
          '50%': { opacity: '1', boxShadow: '0 0 15px hsl(var(--primary))' },
        },
        "subtle-pulse": {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.03)', opacity: 0.9 },
        },
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 3s ease-in-out infinite",
        "subtle-pulse": "subtle-pulse 2.5s ease-in-out infinite",
        slide: "scroll 60s linear infinite",
      },
      backgroundImage: {
        'login-bg': "url('/images/2.jpeg')",
        'signup-bg': "url('/images/3.jpeg')",
        'home-bg': "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')",
        'profile-banner': "url('https://images.unsplash.com/photo-1557682257-2f9c37a31558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
        'gradient-backdrop': 'linear-gradient(145deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 100%)',
        'glass': 'linear-gradient(135deg, hsla(var(--card) / 0.1), hsla(var(--card) / 0))',
      },
      boxShadow: {
        'glow-sm': '0 0 8px 0px hsl(var(--primary) / 0.5)',
        'glow-md': '0 0 15px 2px hsl(var(--primary) / 0.6)',
        'inner-soft': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};









// /** @type {import('tailwindcss').Config} */
//     module.exports = {
//       darkMode: ["class"],
//       content: [
//         './pages/**/*.{js,jsx}',
//         './components/**/*.{js,jsx}',
//         './app/**/*.{js,jsx}',
//         './src/**/*.{js,jsx}',
//       ],
//       theme: {
//         container: {
//           center: true,
//           padding: "2rem",
//           screens: {
//             "2xl": "1400px",
//           },
//         },
//         extend: {
//           colors: {
//             border: "hsl(var(--border))",
//             input: "hsl(var(--input))",
//             ring: "hsl(var(--ring))",
//             background: "hsl(var(--background))",
//             foreground: "hsl(var(--foreground))",
//             primary: {
//               DEFAULT: "hsl(var(--primary))", // Vibrant Teal
//               foreground: "hsl(var(--primary-foreground))", // White/Light
//             },
//             secondary: {
//               DEFAULT: "hsl(var(--secondary))", // Darker Blue/Purple
//               foreground: "hsl(var(--secondary-foreground))", // Lighter text
//             },
//             destructive: {
//               DEFAULT: "hsl(var(--destructive))",
//               foreground: "hsl(var(--destructive-foreground))",
//             },
//             muted: {
//               DEFAULT: "hsl(var(--muted))", // Slightly lighter than secondary
//               foreground: "hsl(var(--muted-foreground))", // Greyish text
//             },
//             accent: {
//               DEFAULT: "hsl(var(--accent))", // Bright Purple/Pink for highlights
//               foreground: "hsl(var(--accent-foreground))",
//             },
//             popover: {
//               DEFAULT: "hsl(var(--popover))",
//               foreground: "hsl(var(--popover-foreground))",
//             },
//             card: {
//               DEFAULT: "hsl(var(--card))", // Slightly lighter than background
//               foreground: "hsl(var(--card-foreground))",
//             },
//           },
//           borderRadius: {
//             lg: "var(--radius)",
//             md: "calc(var(--radius) - 2px)",
//             sm: "calc(var(--radius) - 4px)",
//           },
//           keyframes: {
//             "accordion-down": {
//               from: { height: "0" },
//               to: { height: "var(--radix-accordion-content-height)" },
//             },
//             "accordion-up": {
//               from: { height: "var(--radix-accordion-content-height)" },
//               to: { height: "0" },
//             },
//              "glow": {
//               '0%, 100%': { opacity: '0.7', boxShadow: '0 0 5px hsl(var(--primary))' },
//               '50%': { opacity: '1', boxShadow: '0 0 15px hsl(var(--primary))' },
//             },
//              "subtle-pulse": {
//                '0%, 100%': { transform: 'scale(1)', opacity: 1 },
//                '50%': { transform: 'scale(1.03)', opacity: 0.9 },
//              }
//           },
//           animation: {
//             "accordion-down": "accordion-down 0.2s ease-out",
//             "accordion-up": "accordion-up 0.2s ease-out",
//             "glow": "glow 3s ease-in-out infinite",
//             "subtle-pulse": "subtle-pulse 2.5s ease-in-out infinite",
//           },
//           backgroundImage: {
//              'login-bg': "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1864&q=80')",
//              'signup-bg': "url('https://images.unsplash.com/photo-1542899217-0958cbe32a17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
//              'home-bg': "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')",
//              'profile-banner': "url('https://images.unsplash.com/photo-1557682257-2f9c37a31558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
//              'gradient-backdrop': 'linear-gradient(145deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 100%)',
//              'glass': 'linear-gradient(135deg, hsla(var(--card) / 0.1), hsla(var(--card) / 0))',
//           },
//           boxShadow: {
//              'glow-sm': '0 0 8px 0px hsl(var(--primary) / 0.5)',
//              'glow-md': '0 0 15px 2px hsl(var(--primary) / 0.6)',
//              'inner-soft': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
//           },
//           backdropBlur: {
//             xs: '2px',
//           }
//         },
//       },
//       plugins: [require("tailwindcss-animate")],
//     }

//     module.exports = {
//       content: [/* your paths */],
//       theme: {
//         extend: {
//           animation: {
//             slide: 'scroll 60s linear infinite',
//           },
//           keyframes: {
//             scroll: {
//               '0%': { transform: 'translateX(0%)' },
//               '100%': { transform: 'translateX(-50%)' },
//             },
//           },
//         },
//       },
//       plugins: [],
//     };
    