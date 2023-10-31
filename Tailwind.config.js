/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          gray: {
            "100": "#262626",
            "200": "#1a1a1a",
          },
          "grey-70": "#b3b3b3",
          "grey-75": "#bfbfbf",
          greenyellow: "#caff33",
          "grey-11": "#1c1c1c",
          "white-shades-90": "#e3e3e8",
          "absolute-white": "#fff",
          darkslategray: "#333",
          red: "#ff0000",
          "absolute-black": "#000",
          gainsboro: "#d9d9d9",
          dimgray: "#515960",
        },
        spacing: {},
        fontFamily: {
          lexend: "Lexend",
        },
        borderRadius: {
          "51xl": "70px",
          "31xl": "50px",
          "81xl": "100px",
          "63xl": "82px",
          "44xl": "63px",
          "6xl": "25px",
        },
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        "19xl": "38px",
        "6xl": "25px",
        "11xl": "30px",
        "21xl": "40px",
        inherit: "inherit",
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  