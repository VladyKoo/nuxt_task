<template>
  <div class="card-container">
    <div
      v-for="(cardStatus, idx) of cardStatuses"
      :key="idx"
      class="d-flex type-container"
    >
      <div class="d-flex">
        <p class="item-or" v-if="idx > 0">или</p>
        <p>Статус {{ idx + 1 }}</p>
      </div>
      <div class="d-flex card-selector">
        <select
          :value="cardStatus"
          @input="updateCardStaus($event, idx)"
          class="selector"
        >
          <option
            v-for="initCardStatus of initCardStatuses"
            :key="initCardStatus.id"
          >
            {{ initCardStatus.type }}
          </option>
        </select>
      </div>
    </div>

    <div class="d-flex item-btn">
      <button @click.prevent="addCardStatus">
        <img src="@/static/plus.png" />Добавить статус
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  computed: {
    cardStatuses() {
      return this.$store.getters.cardStatus(this.id);
    },
    initCardStatuses() {
      return this.$store.getters.initConditionNames.initCardStatuses;
    }
  },
  methods: {
    updateCardStaus(e, idx) {
      const payload = { id: this.id, idx, value: e.target.value };
      this.$store.commit("UPDATE_CARDSTATUS", payload);
    },
    addCardStatus() {
      this.$store.commit("ADD_CARDSTATUS", this.id);
    }
  }
};
</script>

<style scoped>
.card-container {
}

.d-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item {
  justify-content: center;
}

.type-container {
  width: 700px;
  margin-bottom: 20px;
}

input {
  width: 110px;
  height: 40px;
  border-radius: 5px;
  margin: 0 20px 0 10px;
}

.item-or {
  width: 50px;
  height: 40px;
  background-color: #e5f0fa;
  border-radius: 5px;
  margin-right: 20px;
  padding: 10px;
}

.card-selector {
  padding-right: 80px;
}

.selector {
  font-size: 16px;
  color: #444;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 400px;
  max-width: 100%;
  border: 1px solid #e3e3e3;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  background-color: #fff;
}

.item-btn {
  padding-left: 220px;
}

button {
  color: #8aac12;
  height: 40px;
  border: 2px solid #dbf28b;
  border-radius: 10px;
}
img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
</style>
