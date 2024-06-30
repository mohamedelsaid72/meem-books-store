export default {
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1120px",
        "2xl": "1180px",
      },
    },
    extend: {
      colors: {
        main: "#222222",
        second: "#777777",
        "main-blue": "#2A7DE5",
        "second-yellow": "#FFC107",
        "stroke-gray": "#D9D9D9",
        "blue-icons": "#A9CDFF",
        "secondary-black": "#3E3E3E",
      },
    },
    fontSize: {
      "header-1": [
        "32px",
        {
          lineHeight: "42px",
          fontWeight: "500",
        },
      ],
      "header-2": [
        "24px",
        {
          lineHeight: "auto",
          fontWeight: "500",
        },
      ],
      "header-3": [
        "20px",
        {
          lineHeight: "auto",
          fontWeight: "500",
        },
      ],
      "header-4": [
        "16px",
        {
          lineHeight: "auto",
          fontWeight: "500",
        },
      ],
      body: [
        "16px",
        {
          lineHeight: "26px",
          fontWeight: "400",
        },
      ],
      small: [
        "14px",
        {
          lineHeight: "auto",
          fontWeight: "400",
        },
      ],
      "btn-text": [
        "14px",
        {
          lineHeight: "26px",
          fontWeight: "500",
        },
      ],
    },
    boxShadow: {
      "level-0": "0px 2px 3px 0px rgba(0, 0, 0, 0.08)",
      "level-1": "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
      "level-2": "0px 6px 24px 0px rgba(0, 0, 0, 0.1)",
      "level-3": "0px 10px 40px 0px rgba(0, 0, 0, 0.12)",
      "level-4": "0px 24px 128px 0px rgba(0, 0, 0, 0.14)",
      navbar: "0px 2px 10px 0px rgba(0, 0, 0, 0.08)",
      custom: "0px 6px 24px 0px rgba(0, 0, 0, 0.1)",
    },
    backgroundImage: {
      "custom-gradient":
        "linear-gradient(to bottom, #f1faff 0%, #ffffff 300px)",
    },
  },
};
