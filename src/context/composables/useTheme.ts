// // src/composables/useTheme.js
// import { ref } from "vue";
// import { useVuetify } from "vuetify";

// const currentTheme = ref("light");

// const toggleTheme = () => {
//   const vuetify = useVuetify();
//   currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
//   vuetify.theme.global.name.value = currentTheme.value;
// };

// export function useTheme() {
//   return {
//     currentTheme,
//     toggleTheme,
//   };
// }

import { ref, watch, onMounted } from 'vue';

const themes = {
  default: 'default',
  dark: 'dark'
};

const themeColor = ref(localStorage.getItem('data-theme') || 'default');

const setThemeColor = (newTheme: keyof typeof themes) => {
  themeColor.value = newTheme;
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('data-theme', newTheme);
};

const toggleTheme = () => {
  setThemeColor(themeColor.value === 'default' ? 'dark' : 'default');
};

// Watch for changes in theme color and update DOM and local storage
watch(themeColor, (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('data-theme', newTheme);
});

onMounted(() => {
  setThemeColor(themeColor.value as keyof typeof themes);
});

export function useThemeSwitcher() {
  return {
    themeColor,
    toggleTheme,
    setThemeColor
  };
}
