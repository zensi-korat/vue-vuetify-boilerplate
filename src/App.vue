<template>
  <v-app>
    <v-main>
      <v-layout class="rounded rounded-md">
        <v-app-bar title="Application bar">
          <v-toolbar density="compact">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>
              <v-btn to="/" variant="plain">Home</v-btn>
              <!-- <RouterLink to="/">Home</RouterLink> -->
              <RouterLink to="/about">About</RouterLink>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
        </v-app-bar>

        <v-navigation-drawer>
          <v-list>
            <v-list-item title="Navigation drawer"></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main
          class="d-flex align-center justify-center"
          style="min-height: 300px"
        >
          Main Content
          <router-view />
        </v-main>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
</script>
