<template>
  <v-app :theme="currentTheme">
    <v-main>
      <v-layout class="rounded rounded-md" style="min-height: 100vh">
        <v-app-bar>
          <v-btn @click.stop="toggleDrawer" icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <v-btn @click="toggleTheme">
            {{ themeColor === "dark" ? "Light Mode" : "Dark Mode" }}
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="changeTheme">
            <v-icon
              :icon="darkTheme ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            ></v-icon>
          </v-btn>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          :class="{ 'custom-drawer': true, 'custom-drawer-rail': rail }"
          :rail="rail"
          permanent
          expand-on-hover
        >
          <v-list>
            <v-list-item
              prepend-icon="mdi-home-city"
              title="Home"
              to="/"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-account-group-outline"
              title="About"
              to="/about"
            ></v-list-item>

            <!-- <RouterLink to="/">Home</RouterLink> -->
            <!-- <RouterLink>About</RouterLink> -->
          </v-list>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center">
          Main Content
          <router-view />
        </v-main>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();

import { useThemeSwitcher } from "@/context/composables/useTheme";
const { themeColor, toggleTheme } = useThemeSwitcher();

// const toggleTheme = (value: string) => {
//   setThemeColor(value as "default" | "dark");
// };

const darkTheme = ref(false);
const drawer = ref(true);
const rail = ref(false);

const currentTheme = ref("light");

function changeTheme() {
  //   darkTheme.value = !darkTheme.value;
  //   theme.global.name.value = darkTheme.value ? "dark" : "light";
  currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
  theme.global.name.value = currentTheme.value;
}

function toggleDrawer() {
  drawer.value = !drawer.value;
  rail.value = !rail.value;
}
</script>

<style scoped>
.custom-drawer {
  transition: width 0.3s ease;
}

.custom-drawer-rail {
  width: 56px !important;
  transform: translateX(0) !important;
}

.custom-drawer-rail .v-navigation-drawer__content {
  width: 56px !important;
}
</style>
