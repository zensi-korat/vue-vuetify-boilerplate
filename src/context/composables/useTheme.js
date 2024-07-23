// src/composables/useTheme.js
import { ref } from "vue";
import { useVuetify } from "vuetify";

const currentTheme = ref("light");

const toggleTheme = () => {
  const vuetify = useVuetify();
  currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
  vuetify.theme.global.name.value = currentTheme.value;
};

export function useTheme() {
  return {
    currentTheme,
    toggleTheme,
  };
}
