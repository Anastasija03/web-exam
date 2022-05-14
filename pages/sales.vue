<template>
  <div class="pt-5">
    <!-- [...sales].reverse() тут потому-что без [...] кидает ворнинги из-за мутации -->
    <div class="sales-list">
      <v-row v-for="item in [...sales].reverse()" :key="item.id">
        <SalesItem :salesData="item" />
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SalesItem from "@/components/SalesItem";

export default {
  name: "SalesPage",
  components: {
    SalesItem,
  },
  computed: {
    ...mapState(["sales"]),
  },
  methods: {
    ...mapActions(["getSales"])
  },
};
</script>
<style scoped lang="scss">
.sales-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  .row {
    margin: 0 10px 0 0;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}
</style>
