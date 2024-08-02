// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
// import "../assets/styles/main.scss";

// Composables
import { createVuetify } from "vuetify";
import { componentTokens } from "@/config/token";

export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "green",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
      dark: {
        colors: {
          primary: "orange",
          secondary: "#424242",
          accent: "#FF4081",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  },
  defaults: componentTokens,
});
