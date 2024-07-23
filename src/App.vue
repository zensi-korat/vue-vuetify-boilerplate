<template>
  <ThemeProvider>
    <LayoutView />
  </ThemeProvider>
</template>

<script lang="ts" setup>
import LayoutView from "./components/Layout/LayoutView.vue";
import ThemeProvider from "./context/ThemeProvider.vue";
</script>
