/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00adb5", // Turkuaz
        secondary: "#00adb5", // Turkuaz
        tertiary: "#393e46", // Koyu gri
        "black-100": "#393e46", // Koyu gri
        "black-200": "#222831", // Daha koyu gri
        "white-100": "#eeeeee", // Açık gri
        flashWhite: "#eeeeee", // Açık gri
        platinum: "#eeeeee", // Açık gri
        platinumLight: "#f4f4f5", // Açık gri
        timberWolf: "#d4d4d8", // Gri
        taupe: "#9999a1", // Gri
        silver: "#d6d6d6", // Gri
        dim: "#66666e", // Koyu gri
        battleGray: "#858585", // Gri
        french: "#b5b5ba", // Gri
        night: "#141414", // Koyu siyah
        jet: "#292929", // Koyu gri
        jetLight: "#333333", // Koyu gri
        jetGray: "#6d6d74", // Gri
        richBlack: "#2e2e2e", // Koyu siyah
        eerieBlack: "#1f1f1f", // Koyu siyah
        onyx: "#5b5b5b", // Koyu gri
        darkPrimary: "#004043", // Koyu mavi
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1f1f1f",
        cardLight: "0px 19px 38px #eaeaec, 0px 15px 12px #eaeaec",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        xmd: "900px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1800px",
      },
      backgroundImage: {
        about:
          "linear-gradient(165deg, rgb(31, 31, 31) 100%, rgba(57,62,70,1) 100%)", // Güncellenmiş renk geçişi
        experience:
          "linear-gradient(135deg, rgba(238,238,238,0.5) 60%, rgba(34,40,49,0.2) 100%),url('/src/assets/backgrounds/white-abstract.png')", // Yeni renk geçişi
        experienceLight:
          "linear-gradient(137deg, rgba(238,238,238,0.5) 60%, rgba(34,40,49,0.9) 60%)", // Yeni renk geçişi
        hero: "linear-gradient(135deg, rgb(0 173 181 / 90%) 60%, rgb(34 40 49 / 90%) 60%)", // Yeni renk geçişi
        "hero-mobile":
          "linear-gradient(137deg, rgb(0 173 181 / 90%) 60%, rgb(34 40 49 / 90%) 60%)", // Yeni renk geçişi
        tech: "linear-gradient(165deg, rgba(20,20,20,0.8) 100%, rgba(109,109,116,0.8) 100%), url('/src/assets/backgrounds/istanbul.png')",
      },
      filter: {
        grayscale: "grayscale(1)", // Özel bir `grayscale` filtresi ekleyin
      },
      fontFamily: {
        beckman: ["Beckman"],
        overcameBold: ["Overcame Bold"],
        overcameOutline: ["Overcame Outline"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
