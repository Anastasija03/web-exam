<template>
  <div class="pt-5">
    <v-btn @click="switchFormVisibility">
      {{ isFormVisible ? "Скрыть форму" : "Добавить доставку" }}
    </v-btn>
    <template v-if="isFormVisible">
      <!-- Форма, формирующаяся из запроса api/delivery/sales/form -->
      <v-form class="form" v-model="isValid" ref="form" v-if="fields">
        <div v-for="(field, i) in Object.keys(fields)" :key="i">
          <v-text-field
            v-if="fields[field].type === 'string'"
            v-model="formData[field]"
            :rules="[(v) => !!v || 'Нужно заполнить']"
            :label="fields[field].title"
            :placeholder="fields[field].title"
            required
          ></v-text-field>
          <v-select
            v-else-if="fields[field].type === 'select'"
            v-model="formData[field]"
            :rules="[(v) => !!v || 'Нужно заполнить']"
            :items="fields[field].values"
            :label="fields[field].title"
            :placeholder="fields[field].title"
            required
          ></v-select>
        </div>
      </v-form>

      <v-btn :disabled="!isValid" class="mt-5 mb-10" @click="submit">
        Добавить доставку
      </v-btn>
    </template>
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
  data: () => ({
    formData: {},
    isValid: false,
    isFormVisible: false,
  }),
  computed: {
    ...mapState(["sales", "fields"]),
  },
  methods: {
    ...mapActions(["addSalesItem", "getSales"]),
    async submit() {
      if (!this.isValid) return;

      await this.addSalesItem(this.formData);
      this.$refs.form.reset();
      this.getSales();
      this.isFormVisible = false
    },
    switchFormVisibility() {
      this.isFormVisible = !this.isFormVisible;
    },
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

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
</style>
