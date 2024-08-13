<template>
  <v-app>
    <v-theme-provider :theme="currentTheme">
      <v-btn @click="toggleTheme"> Toggle Theme </v-btn>
      <slot></slot>
    </v-theme-provider>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentTheme = ref('light');

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
};
</script>

<style></style>
