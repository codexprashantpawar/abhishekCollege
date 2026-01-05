/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Exo", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#128982", // Theme primary
          dark: "#51aea9", // Dark theme
          50: "#e4f7f6",
          100: "#c0eeec",
          200: "#9ce5e1",
          300: "#78dcd7",
          400: "#54d3cc",
          500: "#30cac2",
          600: "#27a29b",
          700: "#1e7a74",
          800: "#15524d",
          900: "#0b2a27",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1d3131", // Heading color
          50: "#e6ebeb",
          100: "#ccd7d7",
          200: "#b3c3c3",
          300: "#99afaf",
          400: "#809b9b",
          500: "#668787",
          600: "#526c6c",
          700: "#3d5151",
          800: "#293636",
          900: "#141b1b",
          foreground: "#ffffff",
        },
        body: "#74787c", // Body text color
        dark: {
          DEFAULT: "#000000", // Dark color
          1: "#161f23", // Black 1
          2: "#0b0f13", // Black 2
          3: "#151d22", // Black 3
          foreground: "#f7f4f7",
        },
        gray: {
          1: "#1c2f35", // Gray 1
          2: "#2c383d", // Gray 2
          3: "#0d161a", // Gray 3
          4: "#f7f4f7", // Gray 4
          5: "#263b42", // Gray 5
          6: "#1f363e", // Gray 6
          7: "#18282d", // Gray 7
          8: "#172727", // Gray 8
          foreground: "#ffffff",
        },
        smoke: {
          DEFAULT: "#f5f6f7", // Smoke
          2: "#e4f2f6", // Smoke 2
          3: "#f6f6f7", // Smoke 3
          4: "#f2f6ff", // Smoke 4
          5: "#f6f6f6", // Smoke 5
          6: "#708288", // Smoke 6
          7: "#f0f3f9", // Smoke 7
          foreground: "#1d3131",
        },
        red: {
          DEFAULT: "#ed1730", // Red default
          foreground: "#ffffff",
        },
        yellow: {
          DEFAULT: "#fce300", // Yellow default
          foreground: "#1d3131",
        },
        white: {
          DEFAULT: "#ffffff", // White default
          foreground: "#1d3131",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideLeft: {
          "0%": { transform: "translateX(50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideRight: {
          "0%": { transform: "translateX(-50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scale: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "3d-rotate": {
          "0%": { transform: "perspective(1000px) rotateY(0deg)" },
          "100%": { transform: "perspective(1000px) rotateY(360deg)" },
        },
        "3d-float": {
          "0%, 100%": { transform: "perspective(1000px) rotateX(0deg) translateZ(0)" },
          "50%": { transform: "perspective(1000px) rotateX(5deg) translateZ(20px)" },
        },
        "3d-tilt": {
          "0%, 100%": { transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" },
          "25%": { transform: "perspective(1000px) rotateX(2deg) rotateY(2deg)" },
          "50%": { transform: "perspective(1000px) rotateX(-2deg) rotateY(2deg)" },
          "75%": { transform: "perspective(1000px) rotateX(-2deg) rotateY(-2deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 20s linear infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
        slideUp: "slideUp 0.7s ease-out",
        slideDown: "slideDown 0.7s ease-out",
        slideLeft: "slideLeft 0.7s ease-out",
        slideRight: "slideRight 0.7s ease-out",
        pulse: "pulse 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        spin: "spin 1s linear infinite",
        scale: "scale 0.3s ease-out",
        wave: "wave 2s linear infinite",
        bounce: "bounce 1s infinite",
        shimmer: "shimmer 2s infinite linear",
        breathe: "breathe 4s ease-in-out infinite",
        "3d-rotate": "3d-rotate 15s linear infinite",
        "3d-float": "3d-float 4s ease-in-out infinite",
        "3d-tilt": "3d-tilt 6s ease-in-out infinite",
      },
      boxShadow: {
        "teal-glow": "0 0 15px rgba(18, 137, 130, 0.5)",
        "dark-teal-glow": "0 0 15px rgba(81, 174, 169, 0.5)",
        soft: "0 5px 15px rgba(0, 0, 0, 0.05)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.1)",
        hard: "0 10px 40px rgba(0, 0, 0, 0.2)",
        "3d": "0 10px 30px -10px rgba(0, 0, 0, 0.3), 0 5px 10px -5px rgba(0, 0, 0, 0.2)",
        "3d-hover": "0 20px 40px -15px rgba(0, 0, 0, 0.4), 0 10px 20px -10px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "teal-gradient": "linear-gradient(135deg, #128982 0%, #51aea9 100%)",
        "dark-gradient": "linear-gradient(135deg, #1d3131 0%, #263b42 100%)",
        "light-gradient": "linear-gradient(135deg, #f7f4f7 0%, #e4f2f6 100%)",
        shimmer:
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.2) 75%, rgba(255,255,255,0) 100%)",
        dots: "radial-gradient(#128982 1px, transparent 1px)",
        "diagonal-lines": "repeating-linear-gradient(45deg, #128982 0, #128982 1px, transparent 0, transparent 50%)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      perspective: {
        none: "none",
        500: "500px",
        1000: "1000px",
        2000: "2000px",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

