const commonThemeProperties = {
  typography: {
    fontFamily: "Lexend, sans-serif",
    h1: { fontWeight: 300, fontSize: "5rem", lineHeight: "6rem" },
    h2: { fontWeight: 300, fontSize: "3.75rem", lineHeight: "4.5rem" },
    h3: { fontWeight: 300, fontSize: "2.5rem", lineHeight: "3rem" },
    h4: { fontWeight: 300, fontSize: "1.88rem", lineHeight: "2.25rem" },
    h5: { fontWeight: 300, fontSize: "1.5rem", lineHeight: "1.8rem" },
    h6: { fontWeight: 300, fontSize: "1.3rem", lineHeight: "1.6rem" },
    body1: { fontWeight: 300, fontSize: "1.13rem", lineHeight: "1.8rem" },
    body2: { fontWeight: 300, fontSize: "0.88rem", lineHeight: "1.4rem" },
    caption: { fontWeight: 300, fontSize: "0.75rem", lineHeight: "1.2rem" },
    label: { fontWeight: 300, fontSize: "0.69rem", lineHeight: "1rem" },
  },
  transitions: {
    duration: {
      standard: 300,
    },
    easing: {
      easeInOut: "ease-in-out",
    },
  },
  customColors: {
    gradients: {
      primary: "linear-gradient(45deg, #7fbe30 0%, #30a5be 100%)",
      secondary: "linear-gradient(45deg, #30beb6 0%, #3069be 100%)",
      tertiary: "linear-gradient(45deg, #5d30be 0%, #b330be 100%)",
    },
    options: ["#30be82", "#30beb6", "#5d30be", "#304fbe"],
  },
};

export default commonThemeProperties;
