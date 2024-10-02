/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        500: "500ms",
      },
      screens: {
        xsm: { min: "280px", max: "639px" },
        // => @media (min-width: 280px) { ... }
        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
      },
      colors: {
        neocon_gray: "#757E95",
        neocon_black: "#001736",
        neocon_blue: "#2059E6",
        neocon_blue_200: "#0072BC",
        neocon_light_blue: "#10BAEE",
        neocon_green: "#00A99D",
        neocon_green_200: "#A6E1DD",
        neocon_g_fw: "#F1F8FB",
        neocon_g_mg: "#E3F2F6",
        neocon_g_lw: "#F1FAFA",
        neocon_g_sw: "#F7FCFC",
        neocon_g_rgw: "#C6E2EF",
        neocon_g_dg: "#9BD2DF",
        neocon_g_rgw: "#C5EAEA",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        gradient_primary:
          "linear-gradient(99.74deg, #0072BC 1.06%, #00A99D 100.89%)",
        gradient_primary_blur:
          "url('../public/assets/images/hero/hero_section_bg.png') linear-gradient(99.74deg, #0072BC 1.06%, #00A99D 100.89%)",
      },
      backdropFilter: {
        blur: "blur(400px)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
