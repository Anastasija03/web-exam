<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 12 : 2"
      class="pa-4 my-2 col salesItem"
      :class="{ 'on-hover': hover }"
    >
      <div class="salesItem__text-top">
        <span>Из: {{ salesData.departure_city }}</span>
        <span>В: {{ salesData.destination_city }}</span>
      </div>
      <div class="salesItem__text-mid">
        <div style="text-align: right">{{ salesData.type }}</div>
        <div>Адрес отправителя: {{ salesData.departure_address }}</div>
        <div>Адрес получателя: {{ salesData.destination_address }}</div>
        <div>Вес (кг): {{ salesData.weight }}</div>
        <div>Объем (м3): {{ salesData.volume }}</div>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    salesData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.on-hover {
  cursor: pointer;
  transform: scale(1.003);
  transition: 200ms;
}
.link {
  text-decoration: none;
}
.salesItem__text-top {
  display: flex;
  justify-content: space-between;
}
</style>