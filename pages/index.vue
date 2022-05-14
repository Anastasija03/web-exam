<template>
  <v-row class="page-info-wrap pt-5">
    <!-- v-html вместо простого текста, ибо приходит текст с html кодом -->
      <p class="pa-4 pt-6" v-html="pagesData.home && pagesData.home.text" />
      <img :src="pagesData.home && pagesData.home.image" alt="" />
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "IndexPage",
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
    max-width: 45%;
    height: 100%;
  }
}
</style>
