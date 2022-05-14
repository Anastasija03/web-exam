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
        <div><span>Способ перевозки:</span> <span>{{ salesData.type }}</span></div>
        <div><span>Адрес отправителя:</span> <span>{{ salesData.departure_address }}</span></div>
        <div><span>Адрес получателя:</span> <span>{{ salesData.destination_address }}</span></div>
        <div><span>Вес (кг):</span> <span>{{ salesData.weight }}</span></div>
        <div><span>Объем (м3):</span> <span> {{ salesData.volume }}</span></div>
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

.salesItem__text-mid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>