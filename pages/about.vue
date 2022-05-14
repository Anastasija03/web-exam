<template>
  <v-row class="page-info-wrap pt-5">
    <!-- v-html вместо текста, ибо опять-же HTML код приходит -->
      <p class="pa-4 pt-6" v-html="pagesData.about && pagesData.about.text" />
      <img :src="pagesData.about && pagesData.about.image || pagesData.home.image" alt="" />
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AboutPage",
  computed: {
    ...mapState(["pagesData"]),
  },
};
</script>
<style scoped lang="scss">
.page-info-wrap {
  display: flex;
  flex-wrap: nowrap;

  > img {
    height: 100%;
    max-width: 50%;
  }
}
</style>
