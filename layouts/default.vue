<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
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
      <v-row class="mt-10 mb-2 pl-8 widget-left">
        <h4>Грузов доставлено</h4>
      </v-row>
      <template v-if="pagesData.leftWidget">
      <v-row class="mt-2 pl-8">Грузовиками: {{pagesData.leftWidget.trucks}}</v-row>
      <v-row class="mt-2 pl-8">Поездами: {{pagesData.leftWidget.trains}}</v-row>
      <v-row class="mt-2 pl-8">Кораблями: {{pagesData.leftWidget.ships}}</v-row>
      <v-row class="mt-2 pl-8">Самолетами: {{pagesData.leftWidget.planes}}</v-row>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: "Главная",
          to: "/",
        },
        {
          title: "О нас",
          to: "/about",
        },
        {
          title: "Список доставок",
          to: "/sales"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Деловая колбаса",
    };
  },
  computed: {
    ...mapState(["pagesData"])
  },

  created() { // Берем все данные для страниц при запуске
    this.getPagesData();
    this.getSales();
    this.getFields();
  },
  methods: {
    ...mapActions(["getPagesData", "getSales", "getFields"])
  },
};
</script>
