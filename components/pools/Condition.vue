<template>
  <div>
    <div
      v-for="(condition, idx) of conditoins"
      :key="condition.id"
      class="d-flex type-container"
    >
      <div class="condition-container">
        <p class="item-and" v-if="idx > 0">И</p>
        <div class="condition">
          <div class="item condition-title">
            <span
              ><p>Условие {{ idx + 1 }}</p></span
            >
          </div>
          <div class="item condition-selector">
            <select
              :input="condition.condition"
              @input="updateCondition($event, condition.id)"
              class="selector"
            >
              <option
                v-for="initCondition of initConditions"
                :key="initCondition.id"
              >
                {{ initCondition.name }}
              </option>
            </select>
          </div>
          <div class="item condition-option">
            <Age
              :id="condition.id"
              v-if="condition.condition === 'Возраст респондента'"
            />
            <CardType
              :id="condition.id"
              v-else-if="condition.condition === 'Тип карты лояльности'"
            />
            <CardStatus
              :id="condition.id"
              v-else-if="condition.condition === 'Статус карты лояльности'"
            />
          </div>
          <div class="item condition-delete">
            <button @click="removeCondition(condition.id)">
              <img src="@/static/delete.png" />Удалить условие
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Age from "@/components/pools/Age";
import CardType from "@/components/pools/CardType";
import CardStatus from "@/components/pools/CardStatus";

export default {
  components: {
    Age,
    CardType,
    CardStatus
  },
  computed: {
    conditoins() {
      return this.$store.getters.conditions;
    },
    initConditions() {
      return this.$store.getters.initConditionNames.initConditions;
    }
  },
  methods: {
    updateCondition(e, id) {
      console.log({ e: e.target.value, id });
      const payload = { id, value: e.target.value };
      this.$store.commit("UPDATE_CONDITION", payload);
    },
    removeCondition(id) {
      this.$store.commit("REMOVE_CONDITION", id);
    }
  }
};
</script>

<style scoped>
.condition-container {
  position: relative;
  background-color: #f8e8c2;
  border-bottom: 2px solid #e3e3e3;
  padding: 30px 20px;
}

.item-and {
  position: absolute;
  top: -20px;
  width: 50px;
  height: 40px;
  background-color: #e5f0fa;
  border-radius: 5px;
  padding-top: 10px;
  text-align: center;
}

.condition {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 50px 1fr;
  grid-gap: 20px;
}
.condition-title {
}
.condition-selector {
  grid-column: span 2;
}
.condition-option {
  grid-column: span 2;
}
.condition-delete {
  display: flex;
  align-items: flex-end;
}
.condition-delete > button {
  color: #f8736a;
  height: 40px;
  border: 2px solid #ffd2d2;
  border-radius: 10px;
}
.condition-delete img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}

.selector {
  font-size: 16px;
  color: #444;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 700px;
  max-width: 100%;
  border: 1px solid #e3e3e3;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  background-color: #fff;
}

.footer-add-condition {
  text-align: center;
  border: 1px solid #e5ecf0;
  padding: 20px 0;
}

.btn-add-condition {
  display: inline-block;
  width: 450px;
  color: #007017;
  border: none;
  background-color: #fff;
  text-decoration: none;
}
</style>
