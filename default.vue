<template>
  <v-app style="background-color: #f1f2f3">
    <v-navigation-drawer v-if="false" v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app elevation="0" style="z-index: 100">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <div class="hero">
        <v-container>
          <Nuxt />
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-shape-outline",
          title: "Products",
          to: "/",
        },
        {
          icon: "mdi-account-group-outline",
          title: "Customers",
          to: "/customers",
        },
        {
          icon: "mdi-truck-check-outline",
          title: "Orders",
          to: "/orders",
        },
      ],
      title: "Mini Project 1",
    };
  },
};
</script>
<style scoped>
.hero {
  background: url("https://img.freepik.com/free-vector/white-technology-background_23-2148390327.jpg?w=2000");
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow-y: auto;
  height: 100vh;
}
</style>
